ServerEvents.recipes(sog => {



sog.recipes.gtceu.plasma_nexus('energized_anomaly')
.inputFluids('gtceu:eternity 20', 'gtceu:hypercharged_nihonium_plasma 256000')
.itemInputs('2x kubejs:quantum_anomaly')
.itemOutputs('1x kubejs:energized_quantum_anomaly')
.duration(64*60)
.EUt(GTValues.VA[GTValues.UXV]);


})