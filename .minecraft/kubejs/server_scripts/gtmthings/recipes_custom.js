ServerEvents.recipes(event => {
  const PRESERVED_RECIPES = [
    "flux_transfer_cover",
    "me_export_hatch",
    "virtual_item_hatch",
    "virtual_item_provider"
  ]

  const TIERS = [
    "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv",
    "uhv", "uev", "uiv", "uxv", "opv", "max"
  ]

  const tierIndex = tier => TIERS.indexOf(tier)
  const tiersBetween = (start, end) => TIERS.slice(tierIndex(start), tierIndex(end) + 1)

  const addHatchRecipe = (tier, amp, isInput, isLaser) => {
    const hatchIoName = isInput ? "target" : "source"
    const hatchType = isLaser ? "laser" : "energy"
    const fluxItem = isInput ? "point" : "plug"

    const hatchSuffix = `${hatchType}_${hatchIoName}_hatch`
    const ampSuffix = amp === "2a" && !isLaser ? "" : `_${amp}`

    event.shapeless(`gtmthings:${tier}_${amp}_wireless_${hatchSuffix}`, [
      `gtceu:${tier}${ampSuffix}_${hatchSuffix}`,
      `fluxnetworks:flux_${fluxItem}`
    ])
  }

  event.remove({ output: new RegExp(`gtmthings:(?!${PRESERVED_RECIPES.join("|")}).+`) })

  TIERS.forEach(tier => {
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
      addHatchRecipe(tier, amp, true, false)
      addHatchRecipe(tier, amp, false, false)
    })

    if (index >= tierIndex("iv")) {
      const laserAmps = ["256a", "1024a", "4096a"]

      laserAmps.forEach(amp => {
        addHatchRecipe(tier, amp, true, true)
        addHatchRecipe(tier, amp, false, true)
      })
    }
  })

  event.shapeless("gtmthings:wireless_energy_binding_hatch", [
    "gtceu:data_stick",
    "gtceu:machine_controller_cover"
  ])
})
