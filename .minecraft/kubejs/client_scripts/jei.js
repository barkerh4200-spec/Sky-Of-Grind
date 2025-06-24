JEIEvents.hideItems(event => {
  const hideByRegex = regex => Ingredient.of(regex).itemIds.forEach(id => {
    console.log(`hiding ${id}`)  
    event.hide(id)
  })
  const hideByKeywords = (modId, keywords) => keywords.forEach(keyword => {
    hideByRegex(new RegExp(`${modId}:.*${keyword}.*`))
  })

  event.hide([Item.of("ad_astra:hammer", "{Damage:0}")])
  event.hide([
    "ad_astra:coal_generator", "ad_astra:compressor", "ad_astra:oxygen_distributor",
    "ad_astra:fuel_refinery", "ad_astra:iron_plate", "ad_astra:steel_ingot",
    "ad_astra:steel_plate", "ad_astra:iron_rod", "ad_astra:steel_cable", "ad_astra:desh_cable",
    "ad_astra:wrench", "ad_astra:oxygen_sensor"
  ])
  hideByKeywords("ad_astra", ["pipe"])

  event.hide(["ironfurnaces:augment_speed", "ironfurnaces:augment_generator"])
  hideByKeywords("ironfurnaces", ["upgrade", "rainbow"])

  hideByKeywords("functionalstorage", ["upgrade"])

  hideByKeywords("exdeorum", ["sieve"])

  event.hide(["enderchests:ender_pouch", "enderchests:ender_bag", "endertanks:ender_bucket"])

  event.hide(["expatternprovider:ex_inscriber", "expatternprovider:ex_charger"])
  event.hide([
    "ae2:certus_quartz_crystal", "ae2:charged_certus_quartz_crystal", "ae2:certus_quartz_dust",
    "ae2:inscriber", "ae2:charger"
  ])

  hideByKeywords("megacells", ["interface", "pattern_provider"])

  event.hide([
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:bronze\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:electrum\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:invar\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:steel\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:lapis_lazuli\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:emerald\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:coal\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:redstone\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:aluminum\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:silver\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:tin\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:diamond\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:platinum\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:copper\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:iron\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:lead\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:nickel\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:gold\"}"),
    Item.of("extendedcrafting:singularity", "{Id:\"extendedcrafting:glowstone\"}"),
    "extendedcrafting:ultimate_singularity"
  ])

  event.hide([
    "watersources:water_source_tier_3", "watersources:water_source_tier_4",
    "watersources:water_source_tier_5"
  ])
  hideByKeywords("watersources", ["upgrade"])

  // this needs a custom regex because of blank_ and ae2/energy_ exclusions
  hideByRegex(/^solarflux:(?:(?!blank_|energy_).)*upgrade.*$/)

  hideByKeywords("draconicevolution", ["crafting"])
  hideByKeywords("exdeorum", ["mesh", "chunk"])

  event.hide(["bloodmagic:apprenticebloodorb", "bloodmagic:masterbloodorb"])

  event.hide("ae2additions:me_wireless_transceiver")
  event.hide(["ae2additions:disk_item_256k", "ae2additions:item_storage_cell_1024"])
  hideByKeywords("ae2additions", ["4096", "16834", "65536", "chemical", "crafting_storage"])

  event.hide(["mae2:eu_multi_p2p_tunnel", "mae2:eu_p2p_tunnel"])

  event.hide([
    "crazyae2addons:energy_exporter", "crazyae2addons:entity_ticker",
    "crazyae2addons:crazy_calculator", "crazyae2addons:xp_shard",
    "crazyae2addons:spawner_controller_wall"
  ])
  hideByKeywords("crazyae2addons", ["mob"])

  const gtmThingsHideList = [
    "huge", "opv", "max", "wireless_energy_receive_cover", "programmablec"
  ]
  const amps = ["4a", "16a", "64a", "256a", "1024a", "4096a", "16384a", "65536a"]

  // 4a, 16a: LV, MV, HV
  amps.slice(0, 2).forEach(amp => gtmThingsHideList.push(`lv_${amp}`, `mv_${amp}`, `hv_${amp}`))
  // 256a, 1024a, 4096a: EV
  amps.slice(3, 6).forEach(amp => gtmThingsHideList.push(`ev_${amp}`))
  // 16384a, 65536a: all tiers
  gtmThingsHideList.push(amps.slice(-2))

  hideByKeywords("gtmthings", gtmThingsHideList)
})

JEIEvents.removeCategories(event => {
  event.remove("ae2:inscriber")
  event.remove("ae2:charger")
  event.remove("ae2:transform")
})
