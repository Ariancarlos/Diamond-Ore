const SuiAirT2 = extendContent(UnitType, "firefly", {
});
SuiAirT2.constructor = () => extend(UnitEntity, {});
SuiAirT2.ammoType = AmmoTypes.power;

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "diamond-ore-gnat"), Vars.content.getByName(ContentType.unit, "diamond-ore-firefly")]);
Blocks.additiveReconstructor.upgrades.add(upgrade.toArray(UnitType));