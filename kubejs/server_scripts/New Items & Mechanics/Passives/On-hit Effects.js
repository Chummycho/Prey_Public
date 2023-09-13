let hitcounter_map = new Map();
let trigger = false;

EntityEvents.hurt(event => {
    let source = event.source;
    let source_player = source.player;

    // If the player was the one attacking
    if (source_player) {
        if (hitcounter_map[trigger]) return;

        let sp_user = source_player.username;

        if (hitcounter_map[sp_user] == undefined) {
            hitcounter_map[sp_user] = 0;
        } else {
            hitcounter_map[sp_user]++;
        }

        if (hitcounter_map[sp_user] > 14) {
            hitcounter_map[sp_user] = 0;
            if (source_player.persistentData.contains(`kubejs_hit:speed`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:speed 15`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(1200, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} SPEED PASSIVE: Ready`)
                })
            }
            if (source_player.persistentData.contains(`kubejs_hit:endurance`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} feathers:endurance 20 2`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(1200, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} ENDURANCE PASSIVE: Ready`)
                })
            }
            if (source_player.persistentData.contains(`kubejs_hit:evasion`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} irons_spellbooks:evasion 15`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(6000, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} EVASION PASSIVE: Ready`)
                })
            }
            if (source_player.persistentData.contains(`kubejs_hit:regeneration`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:regeneration 10`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(1200, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} REGENERATION PASSIVE: Ready`)
                })
            }
            if (source_player.persistentData.contains(`kubejs_hit:resistance`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:resistance 10`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(1200, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} RESISTANCE PASSIVE: Ready`)
                })
            }
            if (source_player.persistentData.contains(`kubejs_hit:strength`)) {
                Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:strength 10`)
                hitcounter_map[trigger] = true;

                event.server.scheduleInTicks(1200, () => {
                    hitcounter_map[trigger] = false
                    Utils.server.runCommandSilent(`/tell ${sp_user} STRENGTH PASSIVE: Ready`)
                })
            }


        }
    }
});