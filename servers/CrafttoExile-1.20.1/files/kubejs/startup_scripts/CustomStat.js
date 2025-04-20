const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")

StartupEvents.registry("attribute", e => {
    e.createCustom("kubejs:move_speed", () => new $RangedAttribute("MnS Move Speed", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:critical_hit", () => new $RangedAttribute("MnS Critical Hit", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:magic_find", () => new $RangedAttribute("MnS Magic Find", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:plus_lvl_all_spells", () => new $RangedAttribute("MnS Plus Level All Skills", 1, 0, 10).setSyncable(true));
});

EntityJSEvents.attributes(event => {
    event.modify('minecraft:player', attribute => {
        attribute.add("kubejs:move_speed", 0.0);
        attribute.add("kubejs:critical_hit", 0.0);
        attribute.add("kubejs:magic_find", 0.0);
        attribute.add("kubejs:plus_lvl_all_spells", 0.0);
    })
}) 