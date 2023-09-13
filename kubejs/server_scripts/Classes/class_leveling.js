let berserker_hitcounter_map = new Map();
let berserker_hurtcounter_map = new Map();
let berserker_trigger = false;
EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let source_player = source.player;
    
    if (source_player) {
    if (!source_player.persistentData.contains(`kubejs_trial_complete:bloodlust`)) return;
    let sp_user = source.player.username; 
        
        if (berserker_hitcounter_map[sp_user] > 4) {
            berserker_hitcounter_map[sp_user] = 4;
        }

        if (berserker_hitcounter_map[sp_user] == undefined) {
            berserker_hitcounter_map[sp_user] = 1;
            Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:haste 4 ${berserker_hitcounter_map[sp_user]*2}`)
        } else {
            berserker_hitcounter_map[sp_user] + 1;
            Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:haste 4 ${berserker_hitcounter_map[sp_user]*2}`)
        }
    }
})    

ItemEvents.rightClicked('kubejs:rune_of_the_berserker', event => {
    event.player.tags.add('berserker')
})

EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let target_player = target.player;
    let source_player = source.player;

    if (target_player) {
    if (!event.entity.persistentData.contains(`kubejs_trial_complete:bloodlust`)) return;
    let tp_user = event.entity.username;
    
    if (berserker_hurtcounter_map[tp_user] == 2) {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            Utils.server.runCommandSilent(`/effect clear ${tp_user} minecraft:haste`)
            Utils.server.runCommandSilent(`/effect clear ${tp_user} minecraft:speed`)
            berserker_hurtcounter_map[tp_user] = 0;
            berserker_hitcounter_map[tp_user] = 0;
    }

    if (berserker_hurtcounter_map[tp_user] == undefined) {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            berserker_hurtcounter_map[tp_user] = 1;
            berserker_hurtcounter_map[berserker_trigger] = true;
            event.server.scheduleInTicks(10, () => {
                berserker_hurtcounter_map[berserker_trigger] = false
        })
    } else {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            berserker_hurtcounter_map[tp_user]++;
            berserker_hurtcounter_map[berserker_trigger] = true;
            event.server.scheduleInTicks(10, () => {
                berserker_hurtcounter_map[berserker_trigger] = false
            })
    }
}
}) 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let tools_crafted_counter = new Map();
let crafted_armor_counter = new Map();
let engineer_counter = new Map();

ItemEvents.crafted(event => {
    let player_name = event.player.username
    if (!event.player.persistentData.contains(`kubejs_class:engineer`)) return
    if (event.item.hasTag('forge:tools')) {
        if (event.item.hasTag('forge:tools/wooden')) return
        if (event.item.hasTag('forge:tools/stone')) return
        if (tools_crafted_counter[player_name] == NaN) {
            tools_crafted_counter[player_name] = 2
    
        } else {
            tools_crafted_counter[player_name]++;
        }
    }
    if (event.item.hasTag('forge:armor')) {
        if (crafted_armor_counter[player_name] == NaN) {
            crafted_armor_counter[player_name] = 2
    
        } else {
            crafted_armor_counter[player_name]++;
        }
    }
})

ItemEvents.crafted(event => {
    let player_name = event.player.username
    if (tools_crafted_counter[player_name] != engineer_counter*500) return
    if (engineer_counter[player_name] == undefined) {
        engineer_counter[player_name] = 2
        tools_crafted_counter[player_name] = 0
        Utils.server.runCommandSilent(`/tell ${player_name}Engineer Mutliplier: Level Up`)
        engineer_tool_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
        //Utils.server.tell(`Engineer Counter: ${engineer_counter[player_name]}`)
        //Utils.server.tell(`Tools Counter: ${tools_crafted_counter[player_name]}`)
    } else {
        engineer_counter[player_name]++;
        tools_crafted_counter[player_name] = 0
        Utils.server.runCommandSilent(`/tell ${player_name}Engineer Mutliplier: Level Up`)
        engineer_tool_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
    }
})

ItemEvents.crafted(event => {
    let player_name = event.player.username
    if (crafted_armor_counter[player_name] != engineer_counter*400) return
    if (engineer_counter[player_name] == undefined) {
        engineer_counter[player_name] = 2
        crafted_armor_counter[player_name] = 0
        Utils.server.runCommandSilent(`/tell ${player_name}Engineer Mutliplier: Level Up`)
        engineer_armor_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
        //Utils.server.tell(`Engineer Counter: ${engineer_counter[player_name]}`)
        //Utils.server.tell(`Tools Counter: ${crafted_armor_counter[player_name]}`)
    } else {
        engineer_counter[player_name]++;
        crafted_armor_counter[player_name] = 0
        Utils.server.runCommandSilent(`/tell ${player_name}Engineer Mutliplier: Level Up`)
        engineer_armor_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
    }
})


const engineer_tool_commands = [
    
    'skilltree:crafted_melee_weapon_attack_speed base set',
    'skilltree:crafted_melee_weapon_damage_bonus base set',
    'skilltree:crafted_ranged_weapon_attack_speed base set',
    'skilltree:crafted_ranged_weapon_sockets base set',
    'skilltree:crafted_shields_armor_bonus base set'
]
const engineer_armor_commands = [
    'skilltree:crafted_armor_defence base set',    
    'skilltree:crafted_boots_sockets base set',
    'skilltree:crafted_helmets_sockets base set',
    'skilltree:crafted_equipment_duarability base set',
]



PlayerEvents.respawned(event => {
    const player_name = event.player.username
    const player = event.player
    if (!event.player.persistentData.contains(`kubejs_class:engineer`)) return
        engineer_tool_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
        engineer_armor_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
        })
    }
)


ItemEvents.rightClicked('kubejs:rune_of_the_engineer', event => {
    const player_name = event.player.username
    engineer_tool_commands.forEach((command) => {
        Utils.server.runCommandSilent(`/attribute ${player_name} ${command} 1.1`)
    })
    engineer_armor_commands.forEach((command) => {
        Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${engineer_counter[player_name]*1.1}`)
    })
})