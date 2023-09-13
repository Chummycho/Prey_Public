const x_subclass_drops = [
    'guardian',
    'battlemage',
    'summoner',
    'spellsword', 
    'kensei', 
    'berserker', 
    'head_hunter', 
    'alchemist',
    'duelist', 
    'druid', 
    'arcane_ranger',
    'explorer',
]


ItemEvents.rightClicked(`kubejs:class_lootbox`, event => {
    const player_username = event.player.username
    let player = event.player
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:class_lootbox 1`)
    if (player.persistentData.contains(`kubejs_class:guardian`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/guardian_lootbox`)
        event.player.tell('Guardian Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:battlemage`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/battlemage_lootbox`)
        event.player.tell('Battlemage Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:summoner`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/summoner_lootbox`)
        event.player.tell('Summoner Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:spellsword`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/spellsword_lootbox`)
        event.player.tell('Spellsword Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:kensei`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/kensei_lootbox`)
        event.player.tell('Kensei Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:berserker`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/berserker_lootbox`)
        event.player.tell('Berserker Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:head_hunter`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/head_hunter_lootbox`)
        event.player.tell('Head Hunter Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:alchemist`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/alchemist_lootbox`)
        event.player.tell('Alchemist Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:duelist`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/duelist_lootbox`)
        event.player.tell('Duelist Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:druid`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/druid_lootbox`)
        event.player.tell('Druid Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:arcane_ranger`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/arcane_ranger_lootbox`)
        event.player.tell('Arcane Ranger Lootbox Dropped')
    }
    if (player.persistentData.contains(`kubejs_class:explorer`)) {
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/explorer_lootbox`)
        event.player.tell('Explorer Lootbox Dropped')
    }


        
})




x_subclass_drops.forEach((x_subclass_drops) => {
    ServerEvents.genericLootTables((event) => {
        event.addGeneric(`loot_boxes/${x_subclass_drops}`, (table) => {
        })
	})
})

x_subclass_drops.forEach((x_subclass_drops) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${x_subclass_drops}`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${player_username} loot minecraft:loot_boxes/${x_subclass_drops}`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${x_subclass_drops} 1`) 
    })
})

ItemEvents.rightClicked(`kubejs:subclass_skill_point`, event => {
    const player = event.player
    const player_username = player.username
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:subclass_skill_point 1`)
    
    if (player.persistentData.contains(`kubejs_class:guardian`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Guardian 1`)
    }
    if (player.persistentData.contains(`kubejs_class:battlemage`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Battlemage 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:summoner`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Summoner 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:engineer`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Crafting 3`)
    }
        
    if (player.persistentData.contains(`kubejs_class:spellsword`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Spellsword 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:kensei`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Kensei 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:berserker`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Melee 2`)
    }
        
    if (player.persistentData.contains(`kubejs_class:head_hunter`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Bounty_Hunter 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:alchemist`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Crafting 3`)
    }
        
    if (player.persistentData.contains(`kubejs_class:duelist`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Duelist 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:druid`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Druid 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:arcane_ranger`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Arcane_Ranger 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:explorer`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Explorer 1`)
    }
        
})



x_subclass_drops.forEach((x_subclass_drop) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${x_subclass_drop}`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/${x_subclass_drop}`)
        event.player.getPersistentData().putBoolean(`kubejs_class:${x_subclass_drop}`, true)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${x_subclass_drop} 1`)
        x_subclass_drops.forEach((class_item) => {
            Utils.server.runCommandSilent(`/clear ${player_username} kubejs:rune_of_the_${class_item}`)
        })
        event.server.scheduleInTicks(7200, event => {
            Utils.server.runCommand(`/give ${player_username} kubejs:class_lootbox`)
                event.reschedule()
            })
        
    })
})


ItemEvents.rightClicked('kubejs:rune_of_the_guardian', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Guardian`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_head_hunter', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Head_Hunter`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_battlemage', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Battlemage`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_summoner', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Summoner`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_spellsword', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Spellsword`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_kensei', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Kensei`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_berserker', event => {
    let player_name = event.player.username
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Berserker`)
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_name} Berserker 1`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_explorer', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Explorer`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_duelist', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Duelist`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_druid', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Druid`)
})
ItemEvents.rightClicked('kubejs:rune_of_the_arcane_ranger', event => {
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Arcane_Ranger`)
})
