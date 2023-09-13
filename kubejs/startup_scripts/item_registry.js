//priority: 900
StartupEvents.registry('item', (event) => {
    const subclass_runes = {
        'guardian': 'guardian_rune',//
        'battlemage': 'battlemage_rune',//
        'summoner': 'summoner_rune',//
        'spellsword': 'spellsword_rune',//
        'kensei': 'kensei_rune',//
        'berserker': 'berserker_rune',//
        'head_hunter': 'head_hunter_rune',//
        'alchemist': 'alchemist_rune',//
        'duelist': 'duelist_rune',//
        'druid':'druid_rune',//
        'arcane_ranger': 'arcane_ranger_rune',
        'explorer': 'explorer_rune'
    };
    Object.entries(subclass_runes).forEach(([name, texture]) => {
        event.create(`rune_of_the_${name}`).group('KubeJS').texture(`kubejs:item/${texture}`)
    })


    const summon_items = {
        'gorilla': '2 Modes: Stay, Wander. Will defend its owner from attackers',
        'grizzly_bear': '3 Modes: Follow, Stay, Wander. Can be ridden without a saddle. Will defend its owner from attackers',
        'crow': '4 Modes: Follow, Stay, Wander, Gather Items (Gathers nearby items and brings to containers). Will defend its owner from attackers and deals additional damage to the undead.',
        'crocodile': '2 modes: Wander, Stay. Crocodiles will attack by biting their target with their jaws then dragging them into Water where they proceed to do a death roll to damage their target.',
        'capuchin_monkey':'3 Modes: Follow, Stay, Wander. Will defend its owner. Give this animal an Ancient Dart to increase its attack damage and add a piercing ability.',
        'elephant': 'Cannot be commanded to follow but can be ridden. Will defend its owner from attackers.',
        'komodo_dragon': '3 Modes: Follow, Stay, Wander. Attacks inflict poison. Can be ridden with a saddle.',
        'tarantula_hawk': '3 Modes: Follow, Stay, Wander. Will aid its owner in a fight. Due to the Debilitating Sting effect, Tarantula Hawks are very good at protecting their owner, especially from arthropods.',
        'mantis_shrimp': '4 Modes: Follow, Stay, Wander, Break Blocks. Will defend its owner from attackers with its fists which inflict a fire effect. To enter Break Blocks mode give a mantis shrimp the block you wish it to break and set to wander mode.',
        'kangaroo':'3 Modes: Follow, Stay, Wander. Has a storage space in its pouch. If given a melee weapon, chestplate or helmet the kangaroo will use them in combat.',
        'bald_eagle':'3 Modes: Follow, Stay, Wander. Will defend its owner and can be used for scouting areas if used with Falconry Glove and Hood.',
        'sugar_glider': '3 Modes: Follow, Stay, Wander. Cannot attack.',
        'mimic_octopus': '3 Modes: Follow, Stay, Wander. The Mimic Octopus will defend its owner if attacked. Using certain items on it will cause it to transform.',
        'flutter': '3 Modes: Follow, Stay, Wander. The Flutter will defend its owner if attacked'
    };
    Object.entries(summon_items).forEach(([entity, texture]) => {
        event.create(`${entity}_summoning_stone`, 'basic').group('KubeJS').texture(`kubejs:item/${entity}_totem`)
    })

    Object.entries(summon_items).forEach(([entity, texture]) => {
        event.create(`${entity}_bone_effigy`, 'basic').group('KubeJS').texture(`kubejs:item/bone_effigy`)
    })

    const lootboxes = [
        'common_bounty_reward',
        'uncommon_bounty_reward',
        'rare_bounty_reward',

        'common_head_hunter_reward',
        'uncommon_head_hunter_reward',
        'rare_head_hunter_reward',

        'common_pet_lootbox',
        'uncommon_pet_lootbox',
        'rare_pet_lootbox',
        'class_lootbox',
        'food_crate',
        'arcana_lootbox',
    ]
    lootboxes.forEach(common_lootboxes => {event.create(common_lootboxes, 'basic').group('KubeJS').texture('kubejs:item/crate')})


    const bounty_level_one = [
        'creeper',
        'skeleton',
        'spider',
        'zombie',
        'enderman',
        'pillager',
        'piglin',
        'drowned',
        //'mutant'
    
    ]

    bounty_level_one.forEach((entity) => {
        event.create(`${entity}_bounty`, 'basic').group('KubeJS').texture('kubejs:item/bounty')
    })
})




    StartupEvents.registry('item', event => {
        event.create('warlock', 'basic').group('KubeJS').texture('kubejs:item/warlock')
        event.create('engineer', 'basic').group('KubeJS').texture('kubejs:item/engineer')
        event.create('warlord', 'basic').group('KubeJS').texture('kubejs:item/warlord')
        event.create('scout', 'basic').group('KubeJS').texture('kubejs:item/scout')
        event.create('rogue', 'basic').group('KubeJS').texture('kubejs:item/rogue')
        event.create('admin_sword', 'sword').tier('netherite').attackDamageBaseline(1000.0).tooltip('A weapon')
        event.create('rune_of_the_dead', 'basic').group('KubeJS').texture('kubejs:item/rune_of_the_dead').rarity('epic') /// Dead King Drop
        event.create('redstone_key', 'basic').unstackable().group('KubeJS').texture('kubejs:icons/key_01b') ///Redstone Golem Drop
        event.create('forgotten_tablet', 'basic').group('KubeJS').texture('kubejs:icons/forgotten_tablet') ///Warden Golem Drop
        event.create('torn_page', 'basic').group('KubeJS').maxStackSize(10).texture('kubejs:item/torn_page')
        event.create('create_manual', 'basic').texture('kubejs:icons/book_01g') 
        event.create('subclass_skill_point', 'basic').group('KubeJS').texture('kubejs:item/subclass_point')
        event.create('evasion_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_evasion').rarity('epic')//
        event.create('speed_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_speed').rarity('epic')//
        event.create('resistance_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_resistance').rarity('epic')//
        event.create('regeneration_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_regeneration').rarity('epic')//
        event.create('shadow_form_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_shadow').rarity('epic').displayName('Heart Stop Elixir')//
        event.create('strength_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_strength').rarity('epic')//
        event.create('endurance_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_endurance').rarity('epic')//
        event.create('fire_elixir', 'basic').group('KubeJS').texture('kubejs:item/fire_elixir').rarity('epic').displayName('Dragons Breath Elixir')//
        event.create('absorption_elixir', 'basic').group('KubeJS').texture('kubejs:item/absorption_elixir').rarity('epic')//
        event.create('charged_elixir', 'basic').group('KubeJS').texture('kubejs:item/charged_elixir').rarity('epic')//
        event.create('soul_steal_elixir', 'basic').group('KubeJS').texture('kubejs:item/soul_steal_elixir').rarity('epic')//
        event.create('angel_wings_elixir', 'basic').group('KubeJS').texture('kubejs:item/angelic_elixir').rarity('epic')//
        event.create('bloodlust', 'basic').displayName('Forgotten Tablet: Bloodlust').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('surge', 'basic').displayName('Forgotten Tablet: Surge').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('restoration', 'basic').displayName('Forgotten Tablet: Restoration').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('shadow_form', 'basic').displayName('Forgotten Tablet: Heartstop').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('strike', 'basic').displayName('Forgotten Tablet: Strike').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('trial_blood_oath', 'basic').displayName('Forgotten Tablet: Blood Oath').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('blood_oath', 'basic').group('KubeJS').texture('kubejs:icons/blood_oath')
        event.create('summoners_gateway', 'basic').group('KubeJS').texture('kubejs:item/totem')
        
        event.create('evasion_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Evasion Elixir')////
        event.create('speed_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Speed Elixir')////
        event.create('resistance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Resistance Elixir')////
        event.create('regeneration_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Regeneration Elixir')////
        event.create('shadow_form_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Heart Stop Elixir')//
        event.create('strength_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Strength Elixir')////
        event.create('endurance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Endurance Elixir')////
        event.create('fire_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Dragons Breath Elixir')////
        event.create('absorption_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Absorption Elixir')////
        event.create('charged_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Charged Elixir')////
        event.create('soul_steal_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Soul Steal Elixir')////
        event.create('angel_wings_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Angel Wings Elixir')////
        event.create('taming_flute', 'basic').group('KubeJS').texture('kubejs:item/taming_flute').rarity('epic')
        event.create('time_turner', 'basic').group('KubeJS').texture('kubejs:item/time_turner').rarity('epic')
        event.create('high_value_target', 'basic').group('KubeJS').texture('kubejs:item/hvt')
    });




    