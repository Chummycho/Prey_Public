
const main_class_commands = {
    'warlock':'irons_spellbooks:max_mana base set 200',
    'engineer':'skilltree:crafted_weapon_attack_speed_multiplier base set 1.15',
    'warlord': 'minecraft:generic.armor base set 4',
    'rogue': 'skilltree:crit_damage base set 1.2',
    'scout':'skilltree:attack_speed_with_ranged_weapon base set 1.2',
}


Object.entries(main_class_commands).forEach(([class_name, class_command]) => {
    ItemEvents.rightClicked(`kubejs:${class_name}`, event => {
        const player_username = event.player.username
        let player = event.player
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot give ${player_username} loot minecraft:loot_boxes/${class_name}`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${x_subclass_drops} 1`)
        Utils.server.runCommandSilent(`/puffish_skills category unlock ${player_username} Starter`)
        Utils.server.runCommandSilent(`/puffish_skills points set ${player_username} Starter 12`)
        Utils.server.runCommandSilent(`/curios set ring ${player_username} 5`)
        Utils.server.runCommandSilent(`/attribute ${player_username} ${class_command}`);
        player.getPersistentData().putBoolean(`kubejs_class:${class_name}`, true)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${class_name}`);

    })
})

Object.entries(main_class_commands).forEach(([perm_class_name, perm_class_command]) => {
    PlayerEvents.respawned(event => {
        const player = event.player.username;
        if (!event.player.persistentData.contains(`kubejs_class:${perm_class_name}`)) return
        Utils.server.runCommandSilent(`/attribute ${player} ${perm_class_command}`)
    })
})



const explorer_commands = [
    'skilltree:luck_while_fishing base set 2',
    'skilltree:experience_from_fishing base set 1.5',
    'skilltree:double_fishing_loot_chance base set 1.10'
]

const alchemist_commands = [
    'feathers:feathers.max_feathers base set 40',//
    'feathers:feathers.feather_regen base set 1.5',//
    'minecraft:generic.max_health base set 10',//
    'minecraft:generic.attack_damage base set 0.25',//
    'skilltree:brewed_beneficial_potions_duration base set 1.75',//
    'skilltree:brewed_beneficial_potions_strength base set 1.75',//
    'skilltree:brewed_harmful_potions_duration base set 1.75',//
    'skilltree:brewed_harmful_potions_strength base set 1.75',//
    'skilltree:attack_speed_under_potion_effect base set 1.75',//
    'skilltree:damage_under_potion_effect base set 1.75',//
    'skilltree:damage_per_potion_effect base set 1.25',//
    'skilltree:crit_chance_against_poisoned base set 1.25',//
    'skilltree:crit_damage_against_poisoned base set 1.25',//
    'skilltree:incoming_healing base set 1.2',//
    'skilltree:maximum_life_under_potion_effect base set 10'//
]



PlayerEvents.respawned(event => {
    const player_username = event.player.username
    const player = event.player
    if (!event.player.persistentData.contains(`kubejs_class:explorer`)) return
        explorer_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_username} ${command}`)
        })
    }
)

PlayerEvents.respawned(event => {
    const player_username = event.player.username
    const player = event.player
    if (!event.player.persistentData.contains(`kubejs_class:alchemist`)) return
    potionEffects.add('feathers:energized', 20, 40)
        alchemist_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_username} ${command}`)
        })
    }
)

const passives = {
    'arcane_ranger': 'minecraft:generic.attack_knockback base set 0.1',
    'druid': 'dungeons_libraries:artifact_cooldown_multiplier base set 1.5',
    'duelist': 'skilltree:crit_damage base set 1.15',
    'head_hunter': 'projectile_damage:generic base set 1.15',
    'spell_sword': 'irons_spellbooks:cooldown_reduction base set 1.2',
    'summoner': 'irons_spellbooks:summon_damage base set 1.1',
    'battlemage': 'irons_spellbooks:fire_spell_power base set 1.10',
    'guardian': 'irons_spellbooks:holy_spell_power base set 1.1',
    'berserker': 'skilltree:attack_speed_if_wounded base set 1.05',
    'kensei': 'minecraft:generic.attack_speed base set 4.25'

}

Object.entries(passives).forEach(([subclass, command]) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${subclass}`, event => {
        const player = event.player.username
        Utils.server.runCommandSilent(`/attribute ${player} ${command}`)
    })
    
    PlayerEvents.respawned(event => {
        const player_username = event.player.username
        if (!event.player.persistentData.contains(`kubejs_class:${subclass}`)) return
            Utils.server.runCommandSilent(`/attribute ${player_username} ${command}`)
    })
})
