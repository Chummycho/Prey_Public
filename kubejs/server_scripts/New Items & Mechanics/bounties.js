
let bounty_counter = new Map()

const creeper = [
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
]

creeper.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`creeper_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})

const skeleton = [
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
	'minecraft:wither_skeleton',
	'minecraft:stray'
]


skeleton.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
			if (!event.source.player.tags.contains(`skeleton_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})

const spider = [
	'born_in_chaos_v1:wither_scuttler',
	'minecraft:spider',
	'minecraft:cave_spider',
]

spider.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`spider_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})
const zombie = [
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
	'minecraft:husk'
]


zombie.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`zombie_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})

const enderman = [
	'born_in_chaos_v1:seared_spirit',
	'born_in_chaos_v1:pumpkin_spirit',
	'dungeons_mobs:blastling',
	'dungeons_mobs:snareling',
	'minecraft:enderman',
]
enderman.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`enderman_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})

const pillager = [
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
]

pillager.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`pillager_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})
const piglin = [
	'dungeons_mobs:zombified_fungus_thrower',
	'minecraft:piglin',
    'minecraft:piglin_brute',
	'minecraft:zombified_piglin',
	'minecraft:hoglin',
]
piglin.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`piglin_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
		}
    }
	})
})

const drowned = [
	'dungeons_mobs:wavewhisperer',
	'rottencreatures:immortal',
	'rottencreatures:zap'
]

drowned.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`drowned_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
            let player_username = event.source.player.username;
            if (bounty_counter[player_username] == undefined) {
                bounty_counter[player_username] = 0
                Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
            }
            if (bounty_counter[player_username] <= 5) {
                bounty_counter[player_username] = 0
                Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
            }
            if (bounty_counter[player_username] > 5) {
                bounty_counter[player_username]-5
                Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
            }
        }

	})
})

//const mutant = [
//	'mutantmore:mutant_blaze',
//	'mutantmore:mutant_wither_skeleton',
//	'mutantmonsters:mutant_creeper',
//	'mutantmonsters:mutant_skeleton',
  //  'mutantmonsters:mutant_zombie',
	//'mutantmonsters:mutant_enderman',
//]

//mutant.forEach((entity) => {
//	EntityEvents.death(`${entity}`,event => {
//		if (event.source.player) {
//			
  //          
	//		if (!event.source.player.tags.contains(`mutant_active_bounty`)) return;
      //      
//
//			let player_username = event.source.player.username;
//			if (bounty_counter[player_username] == undefined) {
//				bounty_counter[player_username] = 1
//				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
//				
//			} else {
//				bounty_counter[player_username]++;
//				Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
////			}
//		}
//		if (event.entity.player) {
////		let player_username = event.source.player.username;
//		if (bounty_counter[player_username] == undefined) {
//			bounty_counter[player_username] = 0
//			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
//		}
//		if (bounty_counter[player_username] <= 5) {
//			bounty_counter[player_username] = 0
//			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
//		}
//		if (bounty_counter[player_username] > 5) {
//			bounty_counter[player_username]-5
//			Utils.server.tell(`Kills: ${bounty_counter[player_username]}`)
//		}
  //  }
	//})
//})

const bounty_level_one = [
	
	'skeleton',
    'spider',
    'zombie',
	'drowned',
]

const bounty_level_two = [
    'enderman',
    'piglin',
    'creeper',
    'pillager',
]

//const bounty_level_three = [
    //'mutant'
//]


const head_hunter_trigger = false
bounty_level_one.forEach((bounty_entity) => {
    ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        event.player.tags.add(`${bounty_entity}_active_bounty`)
        if (event.player.persistentData.contains('kubejs_class:head_hunter')) {
            head_hunter_trigger = true
        }
        Utils.server.runCommandSilent(`/tell ${player_username} 5 minute timer begins now. Slaughter all ${bounty_entity}s in your path.`)
        event.server.scheduleInTicks(6000, event => {
            if (bounty_counter[player_username] < 25) {
                Utils.server.tell(`No Reward for Failure`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                bounty_counter[player_username] = 0
            }
            if (bounty_counter[player_username] >= 25 && bounty_counter[player_username] <= 49) {
                Utils.server.tell('25+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] > 50 && bounty_counter[player_username] < 74) {
                Utils.server.tell('50+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_head_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] >= 75) {
                Utils.server.tell('75+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
				Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)
				
                Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-75)*3}`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_head_hunter_reward`)
                }
            }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!head_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
            })
        })
    })

bounty_level_two.forEach((bounty_entity) => {
    ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        event.player.tags.add(`${bounty_entity}_active_bounty`)
        if (event.player.persistentData.contains('kubejs_class:head_hunter')) {
            head_hunter_trigger = true
        }
        Utils.server.runCommandSilent(`/tell ${player_username} 5 minute timer begins now. Slaughter all ${bounty_entity}s in your path.`)
        event.server.scheduleInTicks(6000, event => {
            if (bounty_counter[player_username] < 15) {
                Utils.server.tell(`No Reward for Failure`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                bounty_counter[player_username] = 0
            }
            if (bounty_counter[player_username] >= 15 && bounty_counter[player_username] <= 24) {
                Utils.server.tell('15+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] > 25 && bounty_counter[player_username] < 49) {
                Utils.server.tell('25+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_head_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] >= 50) {
                Utils.server.tell('50+ kills')
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
				Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)

                Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-50)*5}`)
                if (head_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_head_hunter_reward`)
                }
            }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!head_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
            })
        })
    })

//bounty_level_three.forEach((bounty_entity) => {
  //  ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
    //    const player_username = event.player.username
      //  Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        //event.player.tags.add(`${bounty_entity}_active_bounty`)
        //if (event.player.persistentData.contains('kubejs_class:head_hunter')) {
//            head_hunter_trigger = true
  //      }
//        Utils.server.runCommandSilent(`/tell ${player_username} 5 minute timer begins now. Slaughter all ${bounty_entity}s in your path.`)
//        event.server.scheduleInTicks(6000, event => {
 //           if (bounty_counter[player_username] < 10) {
  //              Utils.server.tell(`No Reward for Failure`)
   //             Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
    //            bounty_counter[player_username] = 0
     //       }
      //      if (bounty_counter[player_username] >= 10 && bounty_counter[player_username] <= 14) {
       //         Utils.server.tell('10+ kills')
        //////        bounty_counter[player_username] = 0
      //          Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
        //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
          //      if (head_hunter_trigger = true) {
            //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
              //  }
            //}
//            if (bounty_counter[player_username] > 15 && bounty_counter[player_username] < 24) {
  //              Utils.server.tell('15+ kills')
    //            bounty_counter[player_username] = 0
      //          Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
        //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
          //      if (head_hunter_trigger = true) {
            //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_head_hunter_reward`)
//                }
 //           }
  //          if (bounty_counter[player_username] >= 25) {
   //             Utils.server.tell('25+ kills')
    //            bounty_counter[player_username] = 0
     ////           Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
       //         Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
	//			Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)
     //           Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-25)*10}`)
      //          if (head_hunter_trigger = true) {
       //             Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_head_hunter_reward`)
         //       }
          //  }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!head_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_head_hunter_reward`)
            //})
        //})
    //})





const hvt = [
	'mutantmonsters:mutant_creeper',
	'mutantmonsters:mutant_skeleton',
    'mutantmonsters:mutant_zombie',
	'mutantmonsters:mutant_enderman',
	'born_in_chaos_v1:nightmare_stalker',
	'born_in_chaos_v1:skeleton_thrasher',
	'dungeons_mobs:wraith',
	'dungeons_mobs:iceologer',
	'irons_spellbooks:necromancer',
	'born_in_chaos_v1:bonescaller',
	'born_in_chaos_v1:supreme_bonescaller',
	'cataclysm:deepling_angler',
	'cataclysm:deepling_brute',
]
let hvt_active = new Map()
let hvt_counter = new Map()
let hvt_completed = new Map()
ItemEvents.rightClicked('kubejs:high_value_target', event => {
	let player_username = event.player.username;
		let randomIndex = Math.floor(Math.random() * hvt.length);
		let randomEntry = hvt[randomIndex];
		

		let entryParts = randomEntry.split(":")[1];

		let formattedEntry = entryParts
		.replace(/_/g, ' ')
		.replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
		
		
		if (hvt_completed[`${player_username}_${formattedEntry}`] == undefined) {
			hvt_completed[`${player_username}_${formattedEntry}`] = 1
		}
		event.entity.tags.add(`${randomEntry}_bounty`)
		Utils.server.runCommandSilent(`/tell ${player_username} You must kill ${hvt_completed[`${player_username}_${formattedEntry}`]} ${formattedEntry}`)
		event.item.count--
})
	

EntityEvents.death(event => {
	if (!event.source.player) return
	//Utils.server.tell('player check')
	let player_username = event.source.player.username
	let entity_id = event.entity.type
	let entity_name = event.entity.displayName.getString()
	//Utils.server.tell(entity_name)
	if (!event.level.isNight()) return
	if (!event.source.player.tags.contains(`${entity_id}_bounty`)) return
	
	if (hvt_completed[`${player_username}_${entity_name}`] == undefined) {
		hvt_completed[`${player_username}_${entity_name}`] = 1
	}


	if (hvt_counter[`${player_username}_${entity_name}`] == undefined) {
		hvt_counter[`${player_username}_${entity_name}`] = 1
		Utils.server.tell(`${entity_name} Kills: ${hvt_counter[`${player_username}_${entity_name}`]}`)
	} else {
		hvt_counter[`${player_username}_${entity_name}`]++
		Utils.server.tell(`${entity_name} Kills: ${hvt_counter[`${player_username}_${entity_name}`]}`)
	}

	if (hvt_counter[`${player_username}_${entity_name}`] != hvt_completed[`${player_username}_${entity_name}`]) return
	hvt_completed[`${player_username}_${entity_name}`]++
	hvt_counter[`${player_username}_${entity_name}`] = 0
	event.server.tell(event.entity.displayName.getString() + " Bounty Complete")
	event.source.player.tags.remove(`${entity_id}_bounty`)
	if (!event.source.player.persistentData.contains(`kubejs_class:head_hunter`)) {
		Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(hvt_completed[`${player_username}_${entity_name}`]*2)*3}`)
		event.source.player.tell(`High Value Target Reward: ${(hvt_completed[`${player_username}_${entity_name}`]*2)*3} Bronze Coins`)
	} else {
		Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(hvt_completed[`${player_username}_${entity_name}`]*2)*9}`)
		event.source.player.tell(`Head Hunter Reward: ${(hvt_completed[`${player_username}_${entity_name}`]*2)*9} Bronze Coins`)
	}
})