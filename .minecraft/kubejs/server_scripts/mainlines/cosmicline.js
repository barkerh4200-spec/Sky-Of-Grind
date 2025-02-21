ServerEvents.recipes(sog => {



sog.recipes.gtceu.dimensionalmatter('saturn_primary_rp')
.notConsumable('kubejs:gravitational_fluctuation_module')
.itemInputs('kubejs:quantum_energy_capsule')
.circuit(20)
.dimension('ad_extendra:saturn')
.outputFluids('gtceu:crude_astral_flux_plasma 1000')
.duration(20*60)
.EUt(GTValues.VA[GTValues.UXV]);




})