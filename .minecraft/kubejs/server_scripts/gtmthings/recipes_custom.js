ServerEvents.recipes(event => {
  const GTMTHINGS_WHITELIST = [
    "advanced_terminal",
    "wireless_energy_monitor",
  ].map(id => { output: `gtmthings:${id}` })
  const TIERS = [
    "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv",
    "uhv", "uev", "uiv", "uxv", "opv", "max"
  ]

  const tierIndex = tier => TIERS.indexOf(tier)
  const tiersBetween = (start, end) => TIERS.slice(tierIndex(start), tierIndex(end) + 1)

  const getHatchId = (tier, amp, isInput, isLaser, isWireless) => {
    const hatchIoName = isInput ? ["input", "target"] : ["output", "source"]
    const wirelessPart = isWireless ? "wireless_" : ""
    const modId = isWireless ? "gtmthings" : "gtceu"
    const ampSuffix = isWireless || isLaser || amp !== "2a" ? "" : `_${amp}`

    const commonPrefix = `${modId}:${tier}${ampSuffix}_`

    return isLaser
      ? `${commonPrefix}laser_${hatchIoName[1]}_hatch`
      : `${commonPrefix}${wirelessPart}energy_${hatchIoName[0]}_hatch`
  }

  const addHatchRecipe = (tier, amp, isInput, isLaser) => {
    const hatchIoName = isInput ? ["input", "target"] : ["output", "source"]
    const hatchType = isLaser ? "laser" : "energy"
    const fluxItem = isInput ? "point" : "plug"

    const hatchSuffix = `${hatchType}_${hatchIoName[isLaser ? 1 : 0]}_hatch`
    const itemId = `gtmthings:${tier}_${amp}_wireless_${hatchSuffix}`

    if (!Item.exists(itemId)) {
      console.warn(itemId, "does not exist")
      return
    }

    event.shapeless(`gtmthings:${tier}_${amp}_wireless_${hatchSuffix}`, [
      getHatchId(tier, amp, isInput, isLaser),
      `fluxnetworks:flux_${fluxItem}`
    ])
  }

  event.remove({ mod: "gtmthings", not: GTMTHINGS_WHITELIST })

  tiersBetween("lv", "opv").forEach(tier => {
    event.shapeless(`gtmthings:${tier}_wireless_energy_receive_cover`, [
      `gtceu:${tier}_energy_input_hatch`,
      "gtceu:machine_controller_cover",
      "fluxnetworks:flux_point"
    ])
  })

  tiersBetween("lv", "uxv").forEach((tier, index) => {
    const energyAmps = ["2a"]

    if (index >= tierIndex("ev")) {
      energyAmps.push("4a", "16a")
    }

    energyAmps.forEach(amp => {
      console.log(tier, amp, false)
      addHatchRecipe(tier, amp, true, false)
      addHatchRecipe(tier, amp, false, false)
    })

    if (index >= tierIndex("iv")) {
      let laserAmps = ["256a", "1024a", "4096a", "16384a", "65536a"]

      laserAmps.forEach(amp => {
        console.log(tier, amp, true)
        addHatchRecipe(tier, amp, true, true)
        addHatchRecipe(tier, amp, false, true)
      })
    }
  })

  event.shapeless("gtmthings:wireless_energy_binding_tool", [
    "gtceu:data_stick",
    "gtceu:machine_controller_cover"
  ])
})
