let hurtcounter_map = new Map();
let trigger = false;

EntityEvents.hurt(event => {
    let entity = event.entity;
    let sp_user = entity.username

    // If the player was the one attacking
    if (!entity.isPlayer()) return
    if (hurtcounter_map[trigger]) return;
    const healthPercent = entity.health / entity.maxHealth * 100
    if (healthPercent > 50) return
    if (entity.persistentData.contains(`kubejs_hurt:charged`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} irons_spellbooks:charged 10`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} CHARGED PASSIVE: Ready`)
        })
    }
    if (entity.persistentData.contains(`kubejs_hurt:absorption`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:absorption 15`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} ABSORPTION PASSIVE: Ready`)
        })
    }
    if (entity.persistentData.contains(`kubejs_hurt:soul_steal`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} alexsmobs:soulsteal 10`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} SOUL STEAL PASSIVE: Ready`)
        })
    }
    if (entity.persistentData.contains(`kubejs_hurt:angel_wings`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} irons_spellbooks:angel_wings 20`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} ANGEL WINGS PASSIVE: Ready`)
        })
    }
    if (entity.persistentData.contains(`kubejs_hurt:fire`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:fire_resistance 3`)
        Utils.server.runCommandSilent(`/effect give ${sp_user} undead_unleashed:flame_breathing 1`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} FLAME BREATH PASSIVE: Ready`)
        })
    }
    if (entity.persistentData.contains(`kubejs_hurt:shadow_form`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} irons_spellbooks:heartstop 15`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} HEARTSTOP PASSIVE: Ready`)
        })
    }
})


