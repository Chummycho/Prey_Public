
ItemEvents.rightClicked(`kubejs:common_pet_lootbox`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/common_pet_lootbox`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:common_pet_lootbox 1`)});

ItemEvents.rightClicked(`kubejs:common_bounty_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/common_bounty_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:common_bounty_reward 1`)});

ItemEvents.rightClicked(`kubejs:uncommon_pet_lootbox`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/uncommon_pet_lootbox`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:uncommon_pet_lootbox 1`)});
    
ItemEvents.rightClicked(`kubejs:uncommon_bounty_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/uncommon_bounty_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:uncommon_bounty_reward 1`)});
    
ItemEvents.rightClicked(`kubejs:rare_pet_lootbox`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/rare_pet_lootbox`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:rare_pet_lootbox 1`)});
    
ItemEvents.rightClicked(`kubejs:rare_bounty_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/rare_bounty_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:rare_bounty_reward 1`)});
    
ItemEvents.rightClicked(`kubejs:common_head_hunter_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/common_head_hunter_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:common_head_hunter_reward 1`)});
    
ItemEvents.rightClicked(`kubejs:uncommon_head_hunter_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/uncommon_head_hunter_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:uncommon_head_hunter_reward 1`)});
    
ItemEvents.rightClicked(`kubejs:rare_head_hunter_reward`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/rare_head_hunter_reward`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:rare_head_hunter_reward 1`)});

ItemEvents.rightClicked(`kubejs:arcana_lootbox`, event => {
    const player_username = event.player.username;
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/arcana_lootbox`);
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:arcana_lootbox 1`)});

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/common_head_hunter_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]
            pool.addItem('simplyswords:diamond_longsword', 3)
            pool.addItem('simplyswords:diamond_twinblade', 3)
            pool.addItem('simplyswords:diamond_rapier', 3)
            pool.addItem('simplyswords:diamond_katana', 3)
            pool.addItem('simplyswords:diamond_sai', 3)
            pool.addItem('simplyswords:diamond_spear', 3)
            pool.addItem('simplyswords:diamond_glaive', 3)
            pool.addItem('simplyswords:diamond_warglaive', 3)
            pool.addItem('simplyswords:diamond_cutlass', 3)
            pool.addItem('simplyswords:diamond_greathammer', 3)
            pool.addItem('simplyswords:diamond_claymore', 3)
            pool.addItem('simplyswords:diamond_greataxe', 3)
            pool.addItem('simplyswords:diamond_chakram', 3)
            pool.addItem('simplyswords:diamond_scythe', 3)
            pool.addItem('simplyswords:diamond_halberd', 3)
            pool.addItem('simplyswords:netherite_longsword', 1.5)
            pool.addItem('simplyswords:netherite_twinblade', 1.5)
            pool.addItem('simplyswords:netherite_rapier', 1.5)
            pool.addItem('simplyswords:netherite_katana', 1.5)
            pool.addItem('simplyswords:netherite_sai', 1.5)
            pool.addItem('simplyswords:netherite_spear', 1.5)
            pool.addItem('simplyswords:netherite_glaive', 1.5)
            pool.addItem('simplyswords:netherite_warglaive', 1.5)
            pool.addItem('simplyswords:netherite_cutlass', 1.5)
            pool.addItem('simplyswords:netherite_greathammer', 1.5)
            pool.addItem('simplyswords:netherite_claymore', 1.5)
            pool.addItem('simplyswords:netherite_greataxe', 1.5)
            pool.addItem('simplyswords:netherite_chakram', 1.5)
            pool.addItem('simplyswords:netherite_scythe', 1.5)
            pool.addItem('simplyswords:netherite_halberd', 1.5)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:29}}'), 9)

            pool.addItem('kubejs:uncommon_pet_lootbox', 60)
            pool.addItem('kubejs:torn_page', 50, [1,2])

            pool.addItem('minecraft:gold_ingot', 14)
            pool.addItem('minecraft:iron_ingot', 14)
            pool.addItem('blocky_siege:cast_iron_ingot', 14)
            pool.addItem('create:zinc_ingot', 14)
            pool.addItem('create:brass_ingot', 14)
            pool.addItem('create:copper_ingot', 14)
            pool.addItem('assortedcore:tin_ingot', 14)
            pool.addItem('assortedcore:platinum_ingot', 14)
            pool.addItem('assortedcore:silver_ingot', 14)
            pool.addItem('assortedcore:steel_ingot', 14)
            pool.addItem('assortedcore:invar_ingot', 14)
            pool.addItem('assortedcore:bronze_ingot', 14)
            pool.addItem('assortedcore:lead_ingot', 14)
            pool.addItem('assortedcore:aluminum_ingot', 14)
            pool.addItem('assortedcore:nickel_ingot', 14)

            pool.addItem('9x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3, '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"feathers:cold_potion"}'), 18)


        })
    })
})


ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/uncommon_head_hunter_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]

            pool.addItem('kubejs:torn_page', 50, [1,2])


            pool.addItem('simplyswords:netherite_longsword', 4)
            pool.addItem('simplyswords:netherite_twinblade', 4)
            pool.addItem('simplyswords:netherite_rapier', 4)
            pool.addItem('simplyswords:netherite_katana', 4)
            pool.addItem('simplyswords:netherite_sai', 4)
            pool.addItem('simplyswords:netherite_spear', 4)
            pool.addItem('simplyswords:netherite_glaive', 4)
            pool.addItem('simplyswords:netherite_warglaive', 4)
            pool.addItem('simplyswords:netherite_cutlass', 4)
            pool.addItem('simplyswords:netherite_greathammer', 4)
            pool.addItem('simplyswords:netherite_claymore', 4)
            pool.addItem('simplyswords:netherite_greataxe', 4)
            pool.addItem('simplyswords:netherite_chakram', 4)
            pool.addItem('simplyswords:netherite_scythe', 4)
            pool.addItem('simplyswords:netherite_halberd', 4)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:29}}'), 9)

            pool.addItem('kubejs:rare_pet_lootbox', 60)

            pool.addItem('3x minecraft:gold_ingot', 14)
            pool.addItem('3x minecraft:iron_ingot', 14)
            pool.addItem('3x blocky_siege:cast_iron_ingot', 14)
            pool.addItem('3x create:zinc_ingot', 14)
            pool.addItem('3x create:brass_ingot', 14)
            pool.addItem('3x create:copper_ingot', 14)
            pool.addItem('3x assortedcore:tin_ingot', 14)
            pool.addItem('3x assortedcore:platinum_ingot', 14)
            pool.addItem('3x assortedcore:silver_ingot', 14)
            pool.addItem('3x assortedcore:steel_ingot', 14)
            pool.addItem('3x assortedcore:invar_ingot', 14)
            pool.addItem('3x assortedcore:bronze_ingot', 14)
            pool.addItem('3x assortedcore:lead_ingot', 14)
            pool.addItem('3x assortedcore:aluminum_ingot', 14)
            pool.addItem('3x assortedcore:nickel_ingot', 14)

            pool.addItem('18x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9, '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"feathers:cold_potion"}'), 18)

        })
    })
})

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/rare_head_hunter_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]

            pool.addItem('simplyswords:netherite_longsword', 2)
            pool.addItem('simplyswords:netherite_twinblade', 2)
            pool.addItem('simplyswords:netherite_rapier', 2)
            pool.addItem('simplyswords:netherite_katana', 2)
            pool.addItem('simplyswords:netherite_sai', 2)
            pool.addItem('simplyswords:netherite_spear', 2)
            pool.addItem('simplyswords:netherite_glaive', 2)
            pool.addItem('simplyswords:netherite_warglaive', 2)
            pool.addItem('simplyswords:netherite_cutlass', 2)
            pool.addItem('simplyswords:netherite_greathammer', 2)
            pool.addItem('simplyswords:netherite_claymore', 2)
            pool.addItem('simplyswords:netherite_greataxe', 2)
            pool.addItem('simplyswords:netherite_chakram', 2)
            pool.addItem('simplyswords:netherite_scythe', 2)
            pool.addItem('simplyswords:netherite_halberd', 2)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:29}}'), 9)

            pool.addItem('kubejs:rare_pet_lootbox', 60)
            pool.addItem('kubejs:torn_page', 50, [1,2])


            pool.addItem('3x minecraft:gold_ingot', 14)
            pool.addItem('3x minecraft:iron_ingot', 14)
            pool.addItem('3x blocky_siege:cast_iron_ingot', 14)
            pool.addItem('3x create:zinc_ingot', 14)
            pool.addItem('3x create:brass_ingot', 14)
            pool.addItem('3x create:copper_ingot', 14)
            pool.addItem('3x assortedcore:tin_ingot', 14)
            pool.addItem('3x assortedcore:platinum_ingot', 14)
            pool.addItem('3x assortedcore:silver_ingot', 14)
            pool.addItem('3x assortedcore:steel_ingot', 14)
            pool.addItem('3x assortedcore:invar_ingot', 14)
            pool.addItem('3x assortedcore:bronze_ingot', 14)
            pool.addItem('3x assortedcore:lead_ingot', 14)
            pool.addItem('3x assortedcore:aluminum_ingot', 14)
            pool.addItem('3x assortedcore:nickel_ingot', 14)

            pool.addItem('18x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9, '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"feathers:cold_potion"}'), 18)

        })
    })
})



ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/common_bounty_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]
            pool.addItem('simplyswords:iron_longsword', 2)
            pool.addItem('simplyswords:iron_twinblade', 2)
            pool.addItem('simplyswords:iron_rapier', 2)
            pool.addItem('simplyswords:iron_katana', 2)
            pool.addItem('simplyswords:iron_sai', 2)
            pool.addItem('simplyswords:iron_spear', 2)
            pool.addItem('simplyswords:iron_glaive', 2)
            pool.addItem('simplyswords:iron_warglaive', 2)
            pool.addItem('simplyswords:iron_cutlass', 2)
            pool.addItem('simplyswords:iron_greathammer', 2)
            pool.addItem('simplyswords:iron_claymore', 2)
            pool.addItem('simplyswords:iron_greataxe', 2)
            pool.addItem('simplyswords:iron_chakram', 2)
            pool.addItem('simplyswords:iron_scythe', 2)
            pool.addItem('simplyswords:iron_halberd', 2)
            pool.addItem('simplyswords:gold_longsword', 2)
            pool.addItem('simplyswords:gold_twinblade', 2)
            pool.addItem('simplyswords:gold_rapier', 2)
            pool.addItem('simplyswords:gold_katana', 2)
            pool.addItem('simplyswords:gold_sai', 2)
            pool.addItem('simplyswords:gold_spear', 2)
            pool.addItem('simplyswords:gold_glaive', 2)
            pool.addItem('simplyswords:gold_warglaive', 2)
            pool.addItem('simplyswords:gold_cutlass', 2)
            pool.addItem('simplyswords:gold_greathammer', 2)
            pool.addItem('simplyswords:gold_claymore', 2)
            pool.addItem('simplyswords:gold_greataxe', 2)
            pool.addItem('simplyswords:gold_chakram', 2)
            pool.addItem('simplyswords:gold_scythe', 2)
            pool.addItem('simplyswords:gold_halberd', 2)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:1,type:29}}'), 9)

            pool.addItem('kubejs:common_pet_lootbox', 60)
            pool.addItem('kubejs:torn_page', 50, [1,2])


            pool.addItem('minecraft:gold_nugget', 14)
            pool.addItem('minecraft:iron_nugget', 14)
            pool.addItem('blocky_siege:cast_iron_nugget', 14)
            pool.addItem('create:zinc_nugget', 14)
            pool.addItem('create:brass_nugget', 14)
            pool.addItem('create:copper_nugget', 14)
            pool.addItem('assortedcore:tin_nugget', 14)
            pool.addItem('assortedcore:platinum_nugget', 14)
            pool.addItem('assortedcore:silver_nugget', 14)
            pool.addItem('assortedcore:steel_nugget', 14)
            pool.addItem('assortedcore:invar_nugget', 14)
            pool.addItem('assortedcore:bronze_nugget', 14)
            pool.addItem('assortedcore:lead_nugget', 14)
            pool.addItem('assortedcore:aluminum_nugget', 14)
            pool.addItem('assortedcore:nickel_nugget', 14)

            pool.addItem('3x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', '{Potion:"feathers:cold_potion"}'), 18)
        })
    })
})

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/uncommon_bounty_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]
            pool.addItem('simplyswords:diamond_longsword', 3)
            pool.addItem('simplyswords:diamond_twinblade', 3)
            pool.addItem('simplyswords:diamond_rapier', 3)
            pool.addItem('simplyswords:diamond_katana', 3)
            pool.addItem('simplyswords:diamond_sai', 3)
            pool.addItem('simplyswords:diamond_spear', 3)
            pool.addItem('simplyswords:diamond_glaive', 3)
            pool.addItem('simplyswords:diamond_warglaive', 3)
            pool.addItem('simplyswords:diamond_cutlass', 3)
            pool.addItem('simplyswords:diamond_greathammer', 3)
            pool.addItem('simplyswords:diamond_claymore', 3)
            pool.addItem('simplyswords:diamond_greataxe', 3)
            pool.addItem('simplyswords:diamond_chakram', 3)
            pool.addItem('simplyswords:diamond_scythe', 3)
            pool.addItem('simplyswords:diamond_halberd', 3)
            pool.addItem('simplyswords:netherite_longsword', 1.5)
            pool.addItem('simplyswords:netherite_twinblade', 1.5)
            pool.addItem('simplyswords:netherite_rapier', 1.5)
            pool.addItem('simplyswords:netherite_katana', 1.5)
            pool.addItem('simplyswords:netherite_sai', 1.5)
            pool.addItem('simplyswords:netherite_spear', 1.5)
            pool.addItem('simplyswords:netherite_glaive', 1.5)
            pool.addItem('simplyswords:netherite_warglaive', 1.5)
            pool.addItem('simplyswords:netherite_cutlass', 1.5)
            pool.addItem('simplyswords:netherite_greathammer', 1.5)
            pool.addItem('simplyswords:netherite_claymore', 1.5)
            pool.addItem('simplyswords:netherite_greataxe', 1.5)
            pool.addItem('simplyswords:netherite_chakram', 1.5)
            pool.addItem('simplyswords:netherite_scythe', 1.5)
            pool.addItem('simplyswords:netherite_halberd', 1.5)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:2,type:29}}'), 9)

            pool.addItem('kubejs:uncommon_pet_lootbox', 60)
            pool.addItem('kubejs:torn_page', 50, [1,2])


            pool.addItem('minecraft:gold_ingot', 14)
            pool.addItem('minecraft:iron_ingot', 14)
            pool.addItem('blocky_siege:cast_iron_ingot', 14)
            pool.addItem('create:zinc_ingot', 14)
            pool.addItem('create:brass_ingot', 14)
            pool.addItem('create:copper_ingot', 14)
            pool.addItem('assortedcore:tin_ingot', 14)
            pool.addItem('assortedcore:platinum_ingot', 14)
            pool.addItem('assortedcore:silver_ingot', 14)
            pool.addItem('assortedcore:steel_ingot', 14)
            pool.addItem('assortedcore:invar_ingot', 14)
            pool.addItem('assortedcore:bronze_ingot', 14)
            pool.addItem('assortedcore:lead_ingot', 14)
            pool.addItem('assortedcore:aluminum_ingot', 14)
            pool.addItem('assortedcore:nickel_ingot', 14)

            pool.addItem('9x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3, '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 3,'{Potion:"feathers:cold_potion"}'), 18)


        })
    })
})

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/rare_bounty_reward', table => {
        table.addPool(pool => {
            pool.rolls = [4,6]

            pool.addItem('simplyswords:netherite_longsword', 4)
            pool.addItem('simplyswords:netherite_twinblade', 4)
            pool.addItem('simplyswords:netherite_rapier', 4)
            pool.addItem('simplyswords:netherite_katana', 4)
            pool.addItem('simplyswords:netherite_sai', 4)
            pool.addItem('simplyswords:netherite_spear', 4)
            pool.addItem('simplyswords:netherite_glaive', 4)
            pool.addItem('simplyswords:netherite_warglaive', 4)
            pool.addItem('simplyswords:netherite_cutlass', 4)
            pool.addItem('simplyswords:netherite_greathammer', 4)
            pool.addItem('simplyswords:netherite_claymore', 4)
            pool.addItem('simplyswords:netherite_greataxe', 4)
            pool.addItem('simplyswords:netherite_chakram', 4)
            pool.addItem('simplyswords:netherite_scythe', 4)
            pool.addItem('simplyswords:netherite_halberd', 4)

            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:10}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:6}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:2}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:7}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:12}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:11}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:13}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:33}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:49}}'), 9)
            pool.addItem(Item.of('irons_spellbooks:scroll', '{ISB_spell:{level:3,type:29}}'), 9)

            pool.addItem('kubejs:rare_pet_lootbox', 60)
            pool.addItem('kubejs:torn_page', 50, [1,2])


            pool.addItem('3x minecraft:gold_ingot', 14)
            pool.addItem('3x minecraft:iron_ingot', 14)
            pool.addItem('3x blocky_siege:cast_iron_ingot', 14)
            pool.addItem('3x create:zinc_ingot', 14)
            pool.addItem('3x create:brass_ingot', 14)
            pool.addItem('3x create:copper_ingot', 14)
            pool.addItem('3x assortedcore:tin_ingot', 14)
            pool.addItem('3x assortedcore:platinum_ingot', 14)
            pool.addItem('3x assortedcore:silver_ingot', 14)
            pool.addItem('3x assortedcore:steel_ingot', 14)
            pool.addItem('3x assortedcore:invar_ingot', 14)
            pool.addItem('3x assortedcore:bronze_ingot', 14)
            pool.addItem('3x assortedcore:lead_ingot', 14)
            pool.addItem('3x assortedcore:aluminum_ingot', 14)
            pool.addItem('3x assortedcore:nickel_ingot', 14)

            pool.addItem('18x minecraft:arrow', 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9, '{Potion:"minecraft:slowness"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"minecraft:poison"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:blindness_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:levitation_potion3"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:nausea_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:withering_potion"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"morevanillapotions:darkness_potion2"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"rottencreatures:strong_freeze"}'), 18)
            pool.addItem(Item.of('minecraft:tipped_arrow', 9,'{Potion:"feathers:cold_potion"}'), 18)

        })
    })
})
ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/common_pet_lootbox', table => {
        table.addPool(pool => {
            pool.rolls = [1,1]
            pool.addItem('kubejs:crow_summoning_stone', 32, [1,3])
            pool.addItem('kubejs:bald_eagle_summoning_stone', 33, [1,2])
            pool.addItem('kubejs:sugar_glider_summoning_stone', 33, [1,2])
            pool.addItem('kubejs:mantis_shrimp_summoning_stone', 33, [1,2])
            pool.addItem('kubejs:capuchin_monkey_summoning_stone', 15)
            pool.addItem('kubejs:kangaroo_summoning_stone', 15)
            pool.addItem('kubejs:komodo_dragon_summoning_stone', 5)
            })
        })
    })
ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/uncommon_pet_lootbox', table => {
        table.addPool(pool => {
            pool.rolls = [1,1]
            pool.addItem('kubejs:capuchin_monkey_summoning_stone', 15, [1,2])
            pool.addItem('kubejs:flutter_summoning_stone', 15, [1,2])
            pool.addItem('kubejs:mimic_octopus_summoning_stone', 15, [1,2])
            pool.addItem('kubejs:tarantula_hawk_summoning_stone', 15)
            pool.addItem('kubejs:kangaroo_summoning_stone', 10, [1,2])
            pool.addItem('kubejs:elephant_summoning_stone', 10)
            pool.addItem('kubejs:komodo_dragon_summoning_stone', 10)
            })
        })
    })

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/rare_pet_lootbox', table => {
        table.addPool(pool => {
            pool.rolls = [1,1]
            pool.addItem('kubejs:kangaroo_summoning_stone', 10, [2,3])
            pool.addItem('kubejs:tarantula_hawk_summoning_stone', 10, [2,3])
            pool.addItem('kubejs:gorilla_summoning_stone', 10)
            pool.addItem('kubejs:grizzly_bear_summoning_stone', 10)
            pool.addItem('kubejs:crocodile_summoning_stone', 10)
            })
        })
    })


ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/food_box', table => {
        table.addPool(pool => {
            pool.rolls = [1,3]
            pool.addTag('forge:food', true)
            })
        })
    })

ServerEvents.genericLootTables(event => {
    event.modify('minecraft:loot_boxes/arcana_lootbox', table => {
        table.addPool(pool => {
            pool.rolls = [1,3]
            pool.addTag('kubejs:scrolls', true)
            })
        })
    })