const removeids = ['celestisynth:breezebreaker','celestisynth:crescentia','celestisynth:solaris','lategamegolems:lgg_sword_diamond','lategamegolems:lgg_sword_netherite','lategamegolems:lgg_mace_diamond','lategamegolems:lgg_mace_netherite','lategamegolems:lgg_mace_emerald','lategamegolems:lgg_mace_iron','lategamegolems:lgg_spear_netherite','lategamegolems:lgg_spear_emerald','lategamegolems:lgg_spear_diamond','lategamegolems:lgg_spear_iron','lategamegolems:lgg_sword_emerald','lategamegolems:lgg_sword_iron','lategamegolems:lgg_axe_diamond','lategamegolems:lgg_axe_iron','lategamegolems:lgg_axe_netherite','lategamegolems:lgg_axe_emerald','xtraarrows:golden_freezing_arrow','xtraarrows:diamond_freezing_arrow','xtraarrows:netherite_freezing_arrow','xtraarrows:iron_freezing_arrow','xtraarrows:flint_freezing_arrow','xtraarrows:diamond_explosive_arrow','xtraarrows:golden_explosive_arrow','xtraarrows:netherite_explosive_arrow','xtraarrows:iron_explosive_arrow','xtraarrows:flint_explosive_arrow','archers_paradox:diamond_arrow','archers_paradox:slime_arrow','xtraarrows:netherite_lightning_arrow','xtraarrows:diamond_lightning_arrow','xtraarrows:flint_lightning_arrow','xtraarrows:iron_lightning_arrow','xtraarrows:golden_lightning_arrow',"cgm:heavy_rifle","cgm:machine_pistol","cgm:assault_rifle","cgm:mini_gun","cgm:bazooka","cgm:grenade_launcher","cgm:rifle","cgm:shotgun","cgm:pistol","cgm:workbench","cgm:specialised_grip","cgm:light_grip","cgm:weighted_stock","cgm:tactical_stock","cgm:light_stock","cgm:silencer","cgm:long_scope","cgm:medium_scope","cgm:short_scope","cgm:stun_grenade","cgm:grenade","cgm:missile","cgm:basic_bullet","cgm:shell","cgm:advanced_bullet",'powder_power:token_night_vision','powder_power:token_speed','powder_power:token_fire_resistance','powder_power:token_speed','powder_power:token_no_fall','powder_power:token_healing','powder_power:token_exp','powder_power:token_trash','powder_power:token_jump_boost','powder_power:token_haste','powder_power:token_breathing','powder_power:token_good_omen','powder_power:token_unseen','powder_power:token_greater_healing','powder_power:token_sunshine','powder_power:token_dolphin','powder_power:token_conduit_power','powder_power:token_resistance','powder_power:token_strength','powder_power:token_greater_absorption','musketmod:musket','musketmod:musket_with_bayonet','artifacts:scarf_of_invisibility','max_armory:copper_spear','max_armory:wooden_spear','max_armory:iron_spear','max_armory:stone_spear','max_armory:diamond_spear','max_armory:golden_spear', 'max_armory:netherite_spear', 'max_armory:wooden_halberd','max_armory:iron_halberd','max_armory:stone_halberd','max_armory:diamond_halberd','max_armory:golden_halberd','max_armory:netherite_halberd']
const removemods = [
	'endrem','valhelsia_furniture','nikgubs_blades_plus', 'divineweaponry', 'rpggods', 'shieldexp'
]
const LTC = [
	 'dungeons_gear:dual_crossbow','dungeons_gear:dual_crossbow','endrem:black_eye','assortedtools:ultimate_fist', 'endrem:old_eye','endrem:cursed_eye','endrem:corrupted_eye','endrem:rogue_eye','endrem:nether_eye','endrem:cold_eye','endrem:lost_eye'
]
const ELM = {
	'minecraft:evoker':'endrem:magical_eye',
	'minecraft:elder_guardian':'endrem:guardian_eye',
	'minecraft:wither':'endrem:wither_eye',
	'blue_skies:alchemist': 'blue_skies:poison_key',
	'blue_skies:summoner': 'blue_skies:nature_key'
}


ServerEvents.recipes(e => {
	e.smelting('minecraft:leather','minecraft:rotten_flesh')
	
	e.shapeless(
		Item.of('minecraft:string', 3),
		[
			'#forge:wool',
		])
	removeids.forEach((removeids) => {
		e.remove({id: `${removeids}`});
	})
	removemods.forEach((removemods) => {
		e.remove({mod: `${removemods}`})
	})
	e.shaped('3x mutantmore:compound_z', [
		'EAE',
		'RGR',
		'HBH'
	], {
	E: 'undead_revamp2:huntereye',
	A: 'mutagenesis:antlers',
	R: 'mutantmonsters:mutant_skeleton_rib',
	G: 'minecraft:gunpowder',
	H: 'minecraft:spider_eye',
	B: 'minecraft:water_bucket'
	})
	e.shapeless(
		Item.of('kubejs:rare_pet_lootbox', 1),
		[
			'kubejs:uncommon_pet_lootbox',
			'kubejs:uncommon_pet_lootbox',
			'kubejs:uncommon_pet_lootbox'
		])
	e.shapeless(
		Item.of('nikgubs_blades_plus:heart_of_final', 1),
		[
			'mutantmonsters:creeper_shard',
			'mutantmonsters:mutant_skeleton_rib_cage',
			'mutantmonsters:hulk_hammer'
		])
	e.recipes.createMechanicalCrafting('cgm:bazooka', [
		'CCCCCC ',
		'CPFAMHN',
		'CCCCCC '
	], {
		C: 'create:copper_sheet',
		P: 'create:propeller',
		F: 'create:fluid_tank',
		A: 'create:potato_cannon',
		M: 'createaddition:electric_motor',
		H: 'immersive_aircraft:engine',
		N: 'minecraft:netherite_ingot'
	})
	e.recipes.createMechanicalCrafting('cgm:grenade_launcher', [
		' BBZZZB ',
		' BLPCQBD',
		'B BZZZB '
	], {
		B: 'create:brass_sheet',
		P: 'create:propeller',
		L: 'create:powered_latch',
		Z: 'createaddition:zinc_sheet',
		Q: 'create:polished_rose_quartz',
		C: 'createaddition:large_connector',
		D: 'create_sa:brass_drill_head'
	})

	e.recipes.createMechanicalCrafting('6x cgm:grenade', [
		' N ',
		'GFG',
		' N ',
		' S '
	], {
		G: 'minecraft:gunpowder',
		F: 'minecraft:firework_rocket',
		N: 'assortedcore:copper_dust',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('6x cgm:stun_grenade', [
		' N ',
		'GFG',
		' N ',
		' S '
	], {
		G: 'minecraft:gunpowder',
		F: 'minecraft:firework_rocket',
		N: 'assortedcore:platinum_dust',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('6x cgm:missile', [
		' D ',
		'DFD',
		' T ',
		' S '
	], {
		D: 'minecraft:diamond',
		F: 'minecraft:firework_rocket',
		T: 'minecraft:tnt',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('cgm:shotgun', [
		' BBBR ',
		'FIGGBD',
		' BBBR '
	], {
		B: 'create:brass_sheet',
		R: 'createaddition:brass_rod',
		F: 'musketmod:pistol',
		D: 'createaddition:electric_motor',
		B: 'create:nixie_tube',
		G: 'create:propeller',
		I: 'create:brass_hand'
	})
	e.recipes.createMechanicalCrafting('16x cgm:shell', [
		'BFB',
		'IGI',
		'ICI'
	], {
		I: 'minecraft:iron_ingot',
		B: 'create:brass_sheet',
		F: 'minecraft:firework_rocket',
		G: 'minecraft:blaze_powder',
		C: 'minecraft:fire_charge',

	})
})



LootJS.modifiers((event) => {
	Object.entries(ELM).forEach(([entity, loot]) => {
        event.addEntityLootModifier(entity).removeLoot(loot);
	})
	LTC.forEach((LTC) => {
		event.addLootTypeModifier([LootType.CHEST]).removeLoot(`${LTC}`);
	})
})



const torn_page_drop = {

	'mutantmonsters:mutant_creeper':'kubejs:torn_page',
	'mutantmonsters:mutant_skeleton':'kubejs:torn_page',
	'mutantmonsters:mutant_enderman':'kubejs:torn_page',
	'mutantmonsters:mutant_zombie':'kubejs:torn_page'
}
ServerEvents.entityLootTables(event => {
	Object.entries(torn_page_drop).forEach(([entity, loot]) => {
		event.modifyEntity(`${entity}`, table => {
			table.addPool(pool => {
				pool.addItem(`${loot}`).randomChance(0.30)
			})
		})
	})
})

const bossdrops = {
	'mutantmonsters:mutant_creeper':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_skeleton':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_enderman':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_zombie': '2x numismaticoverhaul:silver_coin',
	'irons_spellbooks:dead_king': 'endrem:undead_eye',
	'minecraft:elder_guardian': 'endrem:guardian_eye',
	'minecraft:warden': 'endrem:cryptic_eye',
	'dungeons_mobs:redstone_golem': 'endrem:rogue_eye',
	'dungeons_mobs:drowned_necromancer': 'endrem:exotic_eye',
	'blue_skies:starlit_crusher': 'blue_skies:poison_key',
	'aquamirae:maze_mother': 'endrem:cold_eye',
	'aquamirae:captain_cornelia': 'endrem:black_eye',
	'mutantmore:mutant_wither_skeleton': 'endrem:cursed_eye',
	'mutantmore:mutant_blaze': 'endrem:old_eye',
	'minecraft:wither': 'endrem:wither_eye',
	'cataclysm:the_harbinger': 'endrem:corrupted_eye',
	'deeperdarker:stalker': 'endrem:witch_eye',
	'cataclysm:ignis': 'endrem:nether_eye',
	'cataclysm:netherite_monstrosity': 'endrem:lost_eye',
	'alexsmobs:crow':'kubejs:crow_bone_effigy',
	'alexsmobs:sugar_glider':'kubejs:sugar_glider_bone_effigy',
	'alexsmobs:bald_eagle':'kubejs:bald_eagle_bone_effigy',
	'alexsmobs:mantis_shrimp':'kubejs:mantis_shrimp_bone_effigy',
	'alexsmobs:capuchin_monkey':'kubejs:capuchin_monkey_bone_effigy',
	'alexsmobs:flutter':'kubejs:flutter_bone_effigy',
	'alexsmobs:mimic_octopus':'kubejs:mimic_octopus_bone_effigy',
	'alexsmobs:tarantula_hawk':'kubejs:tarantula_hawk_bone_effigy',
	'alexsmobs:elephant':'kubejs:elephant_bone_effigy',
	'alexsmobs:komodo_dragon':'kubejs:komodo_dragon_bone_effigy',
	'alexsmobs:kangaroo':'kubejs:kangaroo_bone_effigy',
	'alexsmobs:gorilla':'kubejs:gorilla_bone_effigy',
	'alexsmobs:crocodile':'kubejs:crocodile_bone_effigy',
	'alexsmobs:grizzly_bear':'kubejs:grizzly_bear_bone_effigy',

	


}

ServerEvents.entityLootTables(event => {
	Object.entries(bossdrops).forEach(([entity, loot]) => {
		event.modifyEntity(`${entity}`, table => {
			table.addPool(pool => {
				pool.addItem(`${loot}`)
			})
		})
	})
})


ItemEvents.rightClicked('kubejs:food_crate', event => {
	let player = event.player.username
	Utils.server.runCommandSilent(`/execute at ${player} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/food_box`)
	Utils.server.runCommandSilent(`/clear ${player} kubejs:food_crate 1`)
})






const coin_entities = [
    'creeperoverhaul:badlands_creeper',
	'creeperoverhaul:bamboo_creeper',
	'creeperoverhaul:beach_creeper',
	'creeperoverhaul:cave_creeper',
	'creeperoverhaul:dark_oak_creeper',
	'creeperoverhaul:desert_creeper',
	'creeperoverhaul:dripstone_creeper',
	'creeperoverhaul:hills_creeper',
	'creeperoverhaul:jungle_creeper',
	'creeperoverhaul:mushroom_creeper',
	'creeperoverhaul:ocean_creeper',
	'creeperoverhaul:savannah_creeper',
	'creeperoverhaul:snowy_creeper',
	'creeperoverhaul:spruce_creeper',
	'creeperoverhaul:swamp_creeper',
	'born_in_chaos_v1:phantom_creeper',
	'dungeons_mobs:icy_creeper',
	'minecraft:creeper',
        'born_in_chaos_v1:baby_skeleton',
	'born_in_chaos_v1:baby_skeleton_2',
	'born_in_chaos_v1:baby_skeleton_minion',
	'born_in_chaos_v1:bone_imp',
	'born_in_chaos_v1:bone_imp_2',
	'born_in_chaos_v1:bone_imp_minion',
	'born_in_chaos_v1:bonescaller',
	'born_in_chaos_v1:supreme_bonescaller',
	'born_in_chaos_v1:dark_vortex',
	'born_in_chaos_v1:decrepit_skeleton',
	'born_in_chaos_v1:restless_spirit',
	'born_in_chaos_v1:spirit_guide',
	'born_in_chaos_v1:skeleton_thrasher',
	'born_in_chaos_v1:skeleton_demoman',
	'dungeons_mobs:necromancer',
	'dungeons_mobs:sunken_skeleton',
	'irons_spellbooks:citadel_keeper',
	'irons_spellbooks:necromancer',
	'rottencreatures:skeleton_lackey',
	'minecraft:skeleton',
	'minecraft:wither_skeleton',
	'minecraft:stray',
        'born_in_chaos_v1:wither_scuttler',
	'minecraft:spider',
	'minecraft:cave_spider',
        'minecraft:zombie',
	'born_in_chaos_v1:barrel_zombie',
	'born_in_chaos_v1:decaying_zombie',
	'born_in_chaos_v1:door_knight',
	'born_in_chaos_v1:zombie_clown',
	'born_in_chaos_v1:fallen_chaos_knight',
	'dungeons_mobs:frozen_zombie',
	'dungeons_mobs:jungle_zombie',
	'rottencreatures:burned',
	'rottencreatures:frostbitten',
	'rottencreatures:glacial_hunter',
	'rottencreatures:mummy',
	'rottencreatures:swampy',
	'rottencreatures:undead_miner',
	'rottencreatures:zombie_lackey',
	'undead_revamp2:bomber',
	'undead_revamp2:sucker',
	'undead_revamp2:the_moonflower',
	'undead_revamp2:thebeartamer',
	'undead_revamp2:thehorrors',
	'undead_revamp2:thehunter',
	'undead_revamp2:thesmoker',
	'undead_revamp2:thespectre',
	'undead_revamp2:thespitter',
	'undead_revamp2:theswarmer',
	'minecraft:husk',
        'born_in_chaos_v1:seared_spirit',
	'born_in_chaos_v1:pumpkin_spirit',
	'dungeons_mobs:blastling',
	'dungeons_mobs:snareling',
	'minecraft:enderman',
        'dungeons_mobs:geomancer',
	'minecraft:pillager',
	'minecraft:illusioner',
	'minecraft:evoker',
	'minecraft:ravager',
	'minecraft:vindicator',
	'dungeons_mobs:iceologer',
	'dungeons_mobs:mage',
	'dungeons_mobs:mountaineer',
	'dungeons_mobs:royal_guard',
	'dungeons_mobs:windcaller',
	'irons_spellbooks:cryomancer',
	'irons_spellbooks:pyromancer',
	'irons_spellbooks:archevoker',
	'minecraft:witch',
	'takesapillage:archer',
	'takesapillage:skirmisher',
	'takesapillage:legioner',
        'dungeons_mobs:zombified_fungus_thrower',
	'minecraft:piglin',
        'minecraft:piglin_brute',
	'minecraft:zombified_piglin',
	'minecraft:hoglin',
        'dungeons_mobs:wavewhisperer',
	'rottencreatures:immortal',
	'rottencreatures:zap',
        'mutantmore:mutant_blaze',
	'mutantmore:mutant_wither_skeleton',
	'mutantmonsters:mutant_creeper',
	'mutantmonsters:mutant_skeleton',
        'mutantmonsters:mutant_zombie',
	'mutantmonsters:mutant_enderman',
        'minecraft:blaze',
        'minecraft:ghast',
        'minecraft:phantom',
        'minecraft:vex'
]

coin_entities.forEach((entity) => {
        ServerEvents.entityLootTables(event => {
                event.modifyEntity(`${entity}`, table => {
                        table.addPool(pool => {
                                pool.addItem('numismaticoverhaul:bronze_coin').randomChance(0.03)
                                pool.addItem('numismaticoverhaul:silver_coin').randomChance(0.01)
								pool.addItem('kubejs:time_turner').randomChance(0.01)
                                pool.addItem('kubejs:zombie_bounty').randomChance(0.01)
                                pool.addItem('kubejs:creeper_bounty').randomChance(0.01)
                                pool.addItem('kubejs:skeleton_bounty').randomChance(0.01)
                                pool.addItem('kubejs:spider_bounty').randomChance(0.01)
                                pool.addItem('kubejs:piglin_bounty').randomChance(0.01)
                                pool.addItem('kubejs:enderman_bounty').randomChance(0.01)
                                pool.addItem('kubejs:pillager_bounty').randomChance(0.01)
                                pool.addItem('kubejs:drowned_bounty').randomChance(0.01)
                                //pool.addItem('kubejs:mutant_bounty').randomChance(0.01)
                        })
                })
        })
})



const taming_flute_drops = [
	'mutantmore:mutant_blaze',
	'mutantmore:mutant_wither_skeleton',
	'mutantmonsters:mutant_creeper',
	'mutantmonsters:mutant_skeleton',
	'mutantmonsters:mutant_zombie',
	'mutantmonsters:mutant_enderman',
	'born_in_chaos_v1:nightmare_stalker',
	'born_in_chaos_v1:skeleton_thrasher',
	'dungeons_mobs:wraith',
	'dungeons_mobs:iceologer',
	'irons_spellbooks:necromancer'
]


taming_flute_drops.forEach((entity) => {
	ServerEvents.entityLootTables(event => {
			event.modifyEntity(`${entity}`, table => {
					table.addPool(pool => {
							pool.addItem('kubejs:taming_flute').randomChance(0.01)

					})
			})
	})
})



EntityEvents.hurt(event => {
    let { entity, source } = event
    if (!entity.player) return
    if (source.msgId != "mob") return
    let sourceEntity = source.actual
    if (sourceEntity.type != "cave_dweller:cave_dweller") return
    entity.potionEffects.add("blindness", 100)
})


let taming_flute = new Map()
ItemEvents.rightClicked('kubejs:taming_flute', event => {
    let player_username = event.entity.player.username
    if (taming_flute[player_username] = 0) {
        event.cancel()
    }
    if (taming_flute[player_username] == undefined) {
        taming_flute[player_username] = 1
    } else {
        taming_flute[player_username]--
        event.server.scheduleInTicks(6000, () => {
            taming_flute[player_username]--
        })
    }
})


ItemEvents.rightClicked('kubejs:time_turner', event => {
    let player_username = event.entity.player.username
    
    Utils.server.runCommandSilent(`/time set night`)
    event.item.count--
})

let blood_oath_trigger = new Map()
ItemEvents.rightClicked('kubejs:blood_oath', event => {
    let player_username = event.entity.username

    if (blood_oath_trigger[player_username] == false) {
        Utils.server.runCommandSilent(`/tell ${player_username} Cooldown still active`)
    }

    if (blood_oath_trigger[player_username] == undefined) {
        //Utils.server.tell('Undefined ')
        blood_oath_trigger[player_username] = false
        Utils.server.runCommandSilent(`/effect give ${player_username} dungeons_gear:soul_protection 99999`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:blood_oath 1`)
        event.server.scheduleInTicks(6000, () => {
            blood_oath_trigger[player_username] = true
        })
    }

    if (blood_oath_trigger[player_username] == true) {
        //Utils.server.tell('true ')
        blood_oath_trigger[player_username] = false
        Utils.server.runCommandSilent(`/effect give ${player_username} dungeons_gear:soul_protection 99999`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:blood_oath 1`)
        event.server.scheduleInTicks(6000, () => {
            blood_oath_trigger[player_username] = true
        })
    }

})



LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .or((or) => {
            or.timeCheck(12750,22999).weatherCheck({thundering: true})
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 2);
            return itemStack;
        })
});



ItemEvents.rightClicked('kubejs:torn_page', event => {
	if (event.item.count !== 10) return
    event.player.give('kubejs:subclass_skill_point')
    event.item.setCount(0)
})



PlayerEvents.loggedIn((event) => {
    const player = event.player.username
    if(event.player.stages.has('starting_items')) return
    event.server.scheduleInTicks(3, event => {
        Utils.server.runCommandSilent(`/clear ${player}`)
        Utils.server.runCommandSilent(`/give ${player} sophisticatedbackpacks:backpack{Enchantments:[{id:"soulbound:soulbound", lvl:1}]}`)
        Utils.server.runCommandSilent(`/give ${player} ftbquests:book{Enchantments:[{id:"soulbound:soulbound", lvl:1}]}`)
    })
    event.player.stages.add('starting_items')

})

var starting_counter = 0
PlayerEvents.loggedIn((event) => {
        if(event.player.stages.has('starting_counter')) return
        event.player.stages.add('starting_counter')
        if (starting_counter > 0) return
		event.server.scheduleInTicks(400, event => {
			Utils.server.tell('10 Minute Grace Period Begins Now, Use It Wisely.')
			Utils.server.tell('Open your Quest Book to get started.')})
			Utils.server.runCommandSilent('/mode Stage0 noreload')
			Utils.server.runCommandSilent('/difficulty peaceful')
        starting_counter++
        event.server.scheduleInTicks(12000, event => {
            Utils.server.runCommandSilent('/mode Stage1 noreload')
			Utils.server.runCommandSilent('/difficulty normal')
            })
    })



EntityEvents.hurt(event => {
    let dmgSource = event.source
    let target = event.entity
    let player = dmgSource.player

    if (player) {
    if (player.persistentData.contains(`kubejs_class:alchemist`)) return
    player.potionEffects.add('feathers:energized', 15, 35)
    }
  })



  ItemEvents.rightClicked(event => {
    if (event.item.id.toString().includes('kubejs:create_manual')) {
        event.server.runCommand(`/execute as ${event.entity.uuid} run create ponder`)
    }
})


let lev_counter = 0
EntityEvents.death('cataclysm:the_leviathan', event => {
    lev_counter++
    if (lev_counter > 1) {
        Utils.server.runCommandSilent('/dimension minecraft:the_end access grant')
        Utils.server.tell('Challenge: Complete \nEnd Dimension: Granted')
    }
    event.server.scheduleInTicks(600, () => {
        lev_counter--
    })

})


ServerEvents.loaded(event => {
    Utils.server.runCommandSilent('/gamerule moneyDropPercentage 0')
})


const trades = {

}

// All Create Items (Maybe make a lootbox that you can buy instead of items)
// Tetra Items
// most ores (use scroll of harvest for tiers)
// Foods (Get a food box that only gives you 1 food item to balance spice of life)
// Grapple Hook
// Backpacks
// Almost All Kubejs Items
// Hammers
// Blocky Siege items and ammo
// Some type of gambling item: Spend a moderate amount of money and then have small chances for a lot of money
// Enchanted books (Add the enchanted book to tags, add tag to the lootbox)





ServerEvents.tags('entity_type', event => {
    event.removeAll('numismaticoverhaul:the_bourgeoisie')
  })

  
  const entity_potion_effects = {
    'mutantmonsters:mutant_creeper': 'alexsmobs:knockback_resistance',
    'mutantmonsters:mutant_zombie': 'minecraft:strength',
    'mutantmonsters:mutant_skeleton': 'minecraft:speed',
    'mutantmonsters:mutant_enderman': 'cofh_core:enderference',
    'born_in_chaos_v1:skeleton_thrasher': 'minecraft:strength',

    //mutant skeleton soul steal


}


Object.entries(entity_potion_effects).forEach(([entity, effect]) => {
    EntityEvents.spawned(`${entity}`, event => {
        let living = event.entity;
        living.potionEffects.add(`${effect}`, 12000)
    })
})



const blacklisted_entities = [
    'mutagenesis:the_lurker',
    'kevin_trophy:kevmo',
    'kevin_trophy:kevmo_prime',
    'kevin_trophy:spitter_zombie',
    'kevin_trophy:zombie_brute',
    'alexsmobs:cachalot_whale',
    'mutagenesis:underground_creature',
    'epicsamurai:kitsune',
	'minecraft:silverfish'

]



blacklisted_entities.forEach((entity) => {
    EntityEvents.spawned(`${entity}`, event => {
        event.cancel()
    })
})


const golem_entities = [
    '{Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_minigun",Count:1}]}}', // minigun
    '{Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_flamer",Count:1}]}}' // flamer
]



EntityEvents.spawned(`minecraft:iron_golem`, event => {
    let randomIndex = Math.floor(Math.random() * golem_entities.length);
    let randomEntry = golem_entities[randomIndex];
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    Utils.server.runCommandSilent(`/summon lategamegolems:lgg_entity ${x} ${y} ${z} ${randomEntry}`)
    event.cancel()
})


EntityEvents.death('minecraft:elder_guardian', event => {
    const ent_x = event.entity.x
    const ent_y = event.entity.y
    const ent_z = event.entity.z

    Utils.server.runCommandSilent(`/summon dungeons_mobs:drowned_necromancer ${ent_x} ${ent_y} ${ent_z}`)

})


EntityEvents.death('minecraft:elder_guardian', event => {
    const ent_x = event.entity.x
    const ent_y = event.entity.y
    const ent_z = event.entity.z

    Utils.server.runCommandSilent(`/summon dungeons_mobs:drowned_necromancer ${ent_x} ${ent_y} ${ent_z}`)

})


EntityEvents.death('irons_spellbooks:dead_king', event => {
    const ent_x = event.entity.x
    const ent_y = event.entity.y
    const ent_z = event.entity.z
    Utils.server.runCommandSilent('/dimension minecraft:overworld access grant')
    Utils.server.runCommandSilent('/dimension minecraft:the_nether access grant')
    Utils.server.runCommandSilent(`/summon dungeons_mobs:redstone_golem ${ent_x} ${ent_y} ${ent_z}`)
})

EntityEvents.death('minecraft:warden', event => {
    Utils.server.runCommandSilent('/dimension deeperdarker:otherside access grant')
})




let redstone_golem_counter = 1
EntityEvents.death('dungeons_mobs:redstone_golem', event => {
    if (!redstone_golem_counter == 1) return
    redstone_golem_counter--
    if (redstone_golem_counter == 0) {
        Utils.server.runCommandSilent('/mode Stage2 noreload')
        //Utils.server.tell('Golem Killed')
    }

})

let summoner_counter = 1
EntityEvents.death('blue_skies:summoner', event => {
    if (!summoner_counter == 1) return
    summoner_counter--
    if (summoner_counter == 0) {
        Utils.server.runCommandSilent('/mode Stage3 noreload')
        //Utils.server.tell('Summoner Killed')
    }

})


const boss_list_health = {
    'dungeons_mobs:drowned_necromancer': 50,
    'minecraft:elder_guardian': 100,

    'aquamirae:maze_mother': 150,
    'aquamirae:captain_cornelia': 200,
    'dungeons_mobs:redstone_golem': 300,
    'irons_spellbooks:dead_king': 250,    
    'born_in_chaos_v1:sir_pumpkinhead': 400,
//////////////////////////////////////////////////
    'mutantmore:mutant_wither_skeleton': 500,
    'mutantmore:mutant_blaze': 500,
    
    'minecraft:warden': 500,
    'deeperdarker:stalker': 500,
    'dungeons_mobs:endersent': 450,
    
    'minecraft:wither': 650,
    'cataclysm:the_harbinger': 70,

    'cataclysm:netherite_monstrosity': 65,
    'cataclysm:ignis': 70,
/////////////////////////////////////////
    'blue_skies:alchemist': 800,
    'blue_skies:summoner': 800,

    'blue_skies:starlit_crusher': 900,
    'blue_skies:arachnarch': 900,

    'cataclysm:the_leviathan': 950,
    'minecraft:ender_dragon': 1200,


    //// extra entities
    'dungeons_mobs:wraith': 60,
    'irons_spellbooks:necromancer': 80,
    'undead_unleashed:frenzied_knight': 40,
    'born_in_chaos_v1:skeleton_thrasher':100,
    
    'minecraft:phantom': 10,
    'cataclysm:deepling': 100,
    'cataclysm:deepling_angler': 150,
    'cataclysm:deepling_brute': 250,
    'cataclysm:deepling_priest': 200,
    'cave_dweller:cave_dweller': 800,
    'minecraft:villager': 18,
    'dungeons_mobs:necromancer': 25,
    'dungeons_mobs:iceologer': 25,
    'alexsmobs:rocky_roller': 40,
	'born_in_chaos_v1:bonescaller': 70,
	'born_in_chaos_v1:supreme_bonescaller': 85,
	'dungeons_mobs:geomancer': 25,
	'minecraft:illusioner': 25,
	'minecraft:evoker': 25,
	'minecraft:vindicator': 25,
	'dungeons_mobs:mage': 25,
	'dungeons_mobs:mountaineer':25,
	'dungeons_mobs:royal_guard': 25,
	'dungeons_mobs:windcaller': 25,
	'irons_spellbooks:cryomancer': 25,
	'irons_spellbooks:pyromancer': 25,
	'irons_spellbooks:archevoker': 25,
	'takesapillage:archer': 25,
	'takesapillage:skirmisher': 25,
	'takesapillage:legioner': 25,
	'leosillagers:confuser': 25,
    'leosillagers:lightning_caller': 25,
    'leosillagers:meteorite_caller': 25,
    'leosillagers:necromancer': 25,
    'leosillagers:snowolager': 25,
    'leosillagers:summoner': 25,
    'leosillagers:troublemaker': 25,
}

Object.entries(boss_list_health).forEach(([boss_name, boss_health]) => {
    EntityEvents.spawned((event) => {
        if (event.entity.type == boss_name) {
            event.entity.maxHealth = boss_health;
            event.entity.health = boss_health;
        }
	})
})


EntityEvents.spawned('kevin_trophy:blister_zombie', event => {
	let dim = event.level.dimension
	if (dim == 'minecraft:the_end') {
		event.cancel()
	}
})

EntityEvents.spawned('kevin_trophy:crawler_zombie', event => {
	let dim = event.level.dimension
	if (dim == 'minecraft:the_end') {
		event.cancel()
	}
})


	ServerEvents.recipes(event => {
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:yamato')
			.input('minecraft:totem_of_undying')
			.input('minecraft:wither_rose')
			.input('minecraft:enchanted_golden_apple')
			.input('minecraft:music_disc_11')
			.input('minecraft:netherite_ingot')
			.blockBelow('minecraft:crying_obsidian')
			.dayTime('night')
			.weather('rain')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:excalibur')
			.input('minecraft:gunpowder')
			.input('minecraft:wither_skeleton_skull')
			.input('minecraft:blaze_rod')
			.input('minecraft:string')
			.input('minecraft:ghast_tear')
			.input('alexsmobs:bear_fur')
			.input('minecraft:iron_sword')
			.weather('thunder')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:groveblade')
			.input('alexsmobs:rattlesnake_rattle')
			.input('alexsmobs:bone_serpent_tooth')
			.input('alexsmobs:crocodile_scute')
			.input('minecraft:string')
			.input('minecraft:stick')
			.input('alexsmobs:straddlite')
			.input('minecraft:wooden_sword')
			.blockBelow('minecraft:moss_block')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:gaia')
			.input('alexsmobs:rattlesnake_rattle')
			.input('alexsmobs:bone_serpent_tooth')
			.input('alexsmobs:crocodile_scute')
			.input('minecraft:string')
			.input('minecraft:stick')
			.input('alexsmobs:straddlite')
			.input('minecraft:wooden_sword')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:gold_hoarder')
			.input('golden_sword')
			.input('gold_ingot')
			.input('heart_of_the_sea')
			.input('tetra:pristine_lapis')
			.input('tetra:pristine_diamond')
			.input('minecraft:experience_bottle')
			.input('numismaticoverhaul:silver_coin')
			.blockBelow('minecraft:block_of_gold')
	///////////////////////////////////////////////////////////////////
			//event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			//.itemOutput('celestisynth:breezebreaker')
			//.input('minecraft:iron_sword')
			//.input('minecraft:netherite_ingot')
			//.input('minecraft:netherite_ingot')
			//.input('minecraft:netherite_ingot')
			//.input('celestisynth:zephyr_deposit')
			//.input('celestisynth:zephyr_deposit')
			//.input('celestisynth:zephyr_deposit')
	
			//event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			//.itemOutput('celestisynth:crescentia')
			//.input('minecraft:netherite_ingot')
		//	.input('minecraft:netherite_ingot')
			//.input('celestisynth:lunar_stone')
			//.input('celestisynth:lunar_stone')
			//.input('celestisynth:lunar_stone')
			//.input('minecraft:iron_sword')
	
			//event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			//.itemOutput('celestisynth:solaris')
			//.input('minecraft:netherite_ingot')
			//.input('minecraft:netherite_ingot')
		//	.input('celestisynth:solar_crystal')
			//.input('celestisynth:solar_crystal')
			//.input('celestisynth:solar_crystal')
			//.input('celestisynth:solar_crystal')
			//.input('minecraft:iron_sword')
	
		//event.recipes.summoningrituals.altar('minecraft:ender_pearl') // Chapter 8: The Sentinels
			//.itemOutput('endrem:magical_eye')
			//.itemOutput('blue_skies:nature_key')
			//.input('blue_skies:alchemist_trophy')
			//.input('blue_skies:summoner_trophy')
			//.mobOutput('mutantmonsters:mutant_zombie')
			//.mobOutput('mutantmonsters:mutant_skeleton')
			//.mobOutput('mutantmonsters:mutant_creeper')
			//.mobOutput('mutantmonsters:mutant_enderman')
			//.weather('thunder')
	
	
		//event.recipes.summoningrituals.altar('minecraft:ender_pearl') // Chapter 9: The Overlords
			//.itemOutput('endrem:evil_eye')
			//.input('blue_skies:arachnarch_trophy')
			//.input('blue_skies:starlit_crusher_trophy')
			//  .blockBelow('minecraft:beacon')
		})