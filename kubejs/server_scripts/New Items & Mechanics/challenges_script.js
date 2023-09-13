

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let knock_knock_counter = new Map();
let golem_counter = new Map();
let knock_knock_trigger = true
EntityEvents.hurt(event => {
    let source = event.source
    let dmgSource = event.source
    let player = dmgSource.player
    if (!event.level.isNight()) return
    if (player) {
    let player_username = event.source.player.username
    if (!knock_knock_trigger == true) return
    //Utils.server.tell(`Step 1 done`)
    if (event.entity.type != 'minecraft:villager') return
    //Utils.server.tell(`Step 2 done`)
    if (!event.source.player.tags.contains(`soul_steal`)) return;
    //Utils.server.tell(`Step 3 done`)
    if (source.type != 'bullet') return
    //Utils.server.tell(`Step 4 done`)
    if (!event.entity.isSleeping()) return
    //Utils.server.tell(`Step 5 done`)
    if (knock_knock_counter[player_username] == undefined) {
        knock_knock_counter[player_username] = 1
        event.source.player.tell(`Villager Kills: ${knock_knock_counter[player_username]}`)
        knock_knock_trigger = false
        event.entity.kill()
        event.server.scheduleInTicks(20, () => {
            knock_knock_trigger = true
        })
	} else {
		knock_knock_counter[player_username]++;
        event.source.player.tell(`Villager Kills: ${knock_knock_counter[player_username]}`)
        knock_knock_trigger = false
        event.entity.kill()
        event.server.scheduleInTicks(20, () => {
          knock_knock_trigger = true
        })
	}

	if (knock_knock_counter[player_username] != 30) return;
    if (golem_counter[player_username] != 3)
        event.source.player.tell('Soul Steal Elixir Challenge: Complete')
        Utils.server.runCommandSilent(`/give ${player_username} kubejs:soul_steal_elixir`)
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
        event.source.player.tags.remove(`soul_steal`)
        knock_knock_counter[player_username] = 0
    }
})

EntityEvents.death('lategamegolems:lgg_entity', event => {
    let source = event.source
    let dmgSource = event.source
    let player = dmgSource.player
    if (!event.level.isNight()) return
    if (player) {
        let player_username = event.source.player.username
        //Utils.server.tell(`Step 1 done`)
        //Utils.server.tell(`Step 2 done`)
        if (!event.source.player.tags.contains(`soul_steal`)) return;
        //Utils.server.tell(`Step 3 done`)
        if (source.type != 'bullet') return
        if (golem_counter[player_username] == undefined) {
            golem_counter[player_username] = 1
            event.source.player.tell(`Golem Kills: ${golem_counter[player_username]}`)
        } else {
            golem_counter[player_username]++
            event.source.player.tell(`Golem Kills: ${golem_counter[player_username]}`)
        }

    }
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let strength_elixir = new Map()
EntityEvents.death('minecraft:piglin_brute', event => {
    if (!event.source.player) return
    if (!event.source.player.tags.contains('strength')) return
    let player_username = event.source.player.username

    if (event.source.player.mainHandItem != '1 golden_axe') return
    if (event.source.player.offHandItem != '1 golden_axe') return

    if (strength_elixir[player_username] == undefined) {
        strength_elixir[player_username] = 1
        Utils.server.tell(`Dual Golden Axe Kills: ${strength_elixir[player_username]}`)
	} else {
		strength_elixir[player_username]++;
        Utils.server.tell(`Dual Golden Axe Kills: ${strength_elixir[player_username]}`)
	}
    if (strength_elixir[player_username] != 100) return
    Utils.server.runCommandSilent(`/give ${player_username} kubejs:strength_elixir`)
    event.player.tell('Strength Elixir Challenge: Complete')
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
    Utils.server.runCommandSilent(`/tag ${player_username} remove strength`)
    strength_elixir[event.source.player.username] = 0

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let grenade_launcher = new Map ();
EntityEvents.death(event => {
    let source = event.source
    let target = event.entity
    let player = source.player

    if (!event.entity.isMonster()) return
    if (!event.level.isNight()) return
    if (player) {
        let weapon = event.source.weapon
        let target_y = event.entity.y
        let source_y = event.source.player.y
        let player_username = event.source.player.username
        let chestArmorItem = event.source.player.chestArmorItem
        let feet = event.source.player.getFeetBlockState()
        if (weapon != '1 grenade_launcher') return
        if (feet != 'Block{minecraft:air}') return
        //if (target.type != 'minecraft:cod' && target.type != 'minecraft:salmon' && target.type != 'minecraft:tropical_fish' && target.type != 'alexsmobs:terrapin' && target.type != 'alexsmobs:catfish' && target.type != 'minecraft:squid') return
        if (!event.source.player.tags.contains('angel_wings')) return
        if (source_y >= target_y+10) {
            if (chestArmorItem != '1 paraglider_wood' && chestArmorItem != '1 paraglider_iron' && chestArmorItem != '1 paraglider_gold' && chestArmorItem != '1 paraglider_diamond' && chestArmorItem != '1 paraglider_netherite') return
            if (grenade_launcher[player_username] == undefined) {
                grenade_launcher[player_username] = 1
                event.source.player.tell(`Angel Wings Challenge Kills: ${grenade_launcher[player_username]}`)
                
            } else {
                grenade_launcher[player_username]++;
                event.source.player.tell(`Angel Wings Challenge Kills: ${grenade_launcher[player_username]}`)
            }
            if (grenade_launcher[player_username] == 150) {
                Utils.server.runCommandSilent(`/tell ${player_username} Angel Wings Elixir Challenge: Complete`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:angel_wings_elixir`)
                Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove angel_wings`)
            }
        }

    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let bazooka_counter = new Map ();
EntityEvents.death(event => {
    let source = event.source
    let target = event.entity
    let player = source.player


    if (player) {
        let weapon = event.source.weapon
        let target_y = event.entity.y
        let source_y = event.source.player.y
        let player_username = event.source.player.username
        let chestArmorItem = event.source.player.chestArmorItem
        if (weapon != '1 bazooka') return
        if (target.type != 'minecraft:cod' && target.type != 'minecraft:salmon' && target.type != 'minecraft:tropical_fish' && target.type != 'alexsmobs:terrapin' && target.type != 'alexsmobs:catfish' && target.type != 'minecraft:squid') return
        if (!event.source.player.tags.contains('absorption')) return
        if (source_y >= target_y+10) {
            if (chestArmorItem != '1 copper_jetpack_chestplate' && chestArmorItem != '1 brass_jetpack_chestplate' && chestArmorItem != '1 andesite_jetpack_chestplate') return
            if (bazooka_counter[player_username] == undefined) {
                bazooka_counter[player_username] = 1
                event.source.player.tell(`Absorption Challenge Kills: ${bazooka_counter[player_username]}`)
                
            } else {
                bazooka_counter[player_username]++;
                event.source.player.tell(`Absorption Challenge Kills: ${bazooka_counter[player_username]}`)
            }
            if (bazooka_counter[player_username] == 100) {
                Utils.server.runCommandSilent(`/tell ${player_username} Absorption Elixir Challenge: Complete`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:absorption_elixir`)
                Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove absorption`)
            }
        }

    }
})

PlayerEvents.tick(event => {
    if (!event.player.tags.contains('absorption')) return
    let f = event.player.getFeetBlockState()
    let player_username = event.player.username
    if (f != 'Block{minecraft:air}') {
        bazooka_counter[player_username] = 0
    }
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let charged_counter = new Map();
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (!event.entity.isMonster()) return
    if (player) {
    if (!event.source.player.tags.contains(`charged`)) return;
    let scroll = event.source.weapon.get()
    if (scroll != '1 scroll' && scroll != '1 iron_spell_book' && scroll != '1 gold_spell_book' && scroll != '1 diamond_spell_book' && scroll != '1 copper_spell_book' && scroll != '1 villager_spell_book' && scroll != '1 dragonskin_spell_book' && scroll != '1 blaze_spell_book' && scroll != '1 rotten_spell_book' && scroll != '1 evoker_spell_book' && scroll != '1 netherite_spell_book') return
    let player_username = event.source.player.username
    if (charged_counter[player_username] == undefined) {
		charged_counter[player_username] = 1
		
	} else {
		charged_counter[player_username]++;
	}
	if (charged_counter[player_username] == 250) {
		Utils.server.tell('Charged Elixir Challenge: 50% Complete. 125 Kills Remaining')
	}

	if (charged_counter[player_username] != 500) return;
		event.source.player.tags.remove(`charged`)
		Utils.server.runCommandSilent(`/give ${player_username} kubejs:charged_elixir`)
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
		Utils.server.tell('Charged Elixir Challenge: Complete')
		charged_counter[player_username] = 0
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const crocodile_counter = new Map();
const anaconda_counter = new Map();
const murmur_counter = new Map();
const rocky_roller_counter = new Map();
const soul_vulture_counter = new Map();

EntityEvents.death('minecraft:villager', event => {
    if (!event.entity.baby) return
    
    let player = event.level.getNearestPlayer(event.entity, 60)
    let player_username = player.username
    if (!player.tags.contains('speed')) return
    
    if (event.source.actual.type == 'alexsmobs:crocodile') {
        if (crocodile_counter[player_username] == undefined) {
            crocodile_counter[player_username] = 1
            
        } else {
            crocodile_counter[player_username]++;
            }
        }
        /////
    if (event.source.actual.type == 'alexsmobs:anaconda') {
        if (anaconda_counter[player_username] == undefined) {
            anaconda_counter[player_username] = 1
            
        } else {
            anaconda_counter[player_username]++;
            }
        }
        /////
    if (event.source.actual.type == 'alexsmobs:murmur_head') {
        if (murmur_counter[player_username] == undefined) {
            murmur_counter[player_username] = 1
            
        } else {
            murmur_counter[player_username]++;
            }
        }
        ////
    if (event.source.actual.type == 'alexsmobs:rocky_roller') {
        if (rocky_roller_counter[player_username] == undefined) {
            rocky_roller_counter[player_username] = 1
            
        } else {
            rocky_roller_counter[player_username]++;
            }
        }
    if (event.source.actual.type == 'alexsmobs:soul_vulture') {
        if (soul_vulture_counter[player_username] == undefined) {
            soul_vulture_counter[player_username] = 1
            
            
        } else {
            soul_vulture_counter[player_username]++;
            
            }
        }
        Utils.server.tell(`Soul Vulture Kills: ${soul_vulture_counter[player_username]}`)
        Utils.server.tell(`Rocky Roller Kills: ${rocky_roller_counter[player_username]}`)
        Utils.server.tell(`Murmur Kills: ${murmur_counter[player_username]}`)
        Utils.server.tell(`Anaconda Kills: ${anaconda_counter[player_username]}`)
        Utils.server.tell(`Crocodile Kills: ${crocodile_counter[player_username]}`)
        if (soul_vulture_counter[player_username] > 4) {
            soul_vulture_counter[player_username] = 5
            Utils.server.runCommandSilent(`/tell ${player_username} Speed Elixir: Soul Vulture Kills Completed`)
        }

        if (rocky_roller_counter[player_username] > 4) {
            rocky_roller_counter[player_username] = 5
            Utils.server.runCommandSilent(`/tell ${player_username} Speed Elixir: Rocky Roller Kills Completed`)
        }
        
        if (murmur_counter[player_username] > 4) {
            murmur_counter[player_username] = 5
            Utils.server.runCommandSilent(`/tell ${player_username} Speed Elixir: Murmur Kills Completed`)
        }

        if (anaconda_counter[player_username] > 4) {
            anaconda_counter[player_username] = 5
            Utils.server.runCommandSilent(`/tell ${player_username} Speed Elixir: Anaconda Kills Completed`)
        }

        if (crocodile_counter[player_username] > 4) {
            crocodile_counter[player_username] = 5
            Utils.server.runCommandSilent(`/tell ${player_username} Speed Elixir: Crocodile Kills Completed`)
        }
    


	if (crocodile_counter[player_username] != 5) return
    if (anaconda_counter[player_username] != 5) return
    if (murmur_counter[player_username] != 5) return
    if (rocky_roller_counter[player_username] != 5) return
    if (soul_vulture_counter[player_username] != 5) return
    player.tags.remove(`speed`)
    Utils.server.runCommandSilent(`/give ${player_username} kubejs:speed_elixir`)
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
    Utils.server.tell('Speed Elixir Challenge: Complete')
    crocodile_counter[player_username] = 0
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const flying_creatures = [
    'alexsmobs:crow',
    'alexsmobs:bald_eagle',
    'alexsmobs:fly',
    'minecraft:bee',
    'alexsmobs:blue_jay',
    'alexsmobs:crimson_mosquito',
    'minecraft:phantom',
    'alexsmobs:hummingbird',
    'alexsmobs:seagull',
    'alexsmobs:shoebill',
    'alexsmobs:sugar_glider',
    'alexsmobs:sunbird',
    'alexsmobs:tarantula_hawk',
    'alexsmobs:toucan'

]

let firebolt_counter = new Map();

flying_creatures.forEach((entity) => {

    EntityEvents.death(`${entity}`, event => {
        if (!event.source.player) return
        let player_username = event.source.player.username;
        if (event.source.player.tags.contains('fire')) return;
        if (event.source.type != 'firebolt_spell') return;
        if (firebolt_counter[player_username] == undefined) {
            firebolt_counter[player_username] = 1
            
        } else {
            firebolt_counter[player_username]++
        }

        if (firebolt_counter[player_username] != 150) return;
        Utils.server.runCommandSilent(`/give ${player_username} kubejs:fire_elixir`)
        event.source.player.tags.remove('fire')
        event.source.player.tell('Fire Elixir Challenge: Complete')
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
        firebolt_counter[player_username] = 0

    })
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
PlayerEvents.respawned(event => {
    let tags = event.player.tags
    if (tags.contains('all_bounties_completed')) return
    if (!tags.contains('resistance')) return
    if (!tags.contains('skeleton_bounty_completed')) return
    if (!tags.contains('spider_bounty_completed')) return
    if (!tags.contains('zombie_bounty_completed')) return
    if (!tags.contains('drowned_bounty_completed')) return
    if (!tags.contains('enderman_bounty_completed')) return
    if (!tags.contains('piglin_bounty_completed')) return
    if (!tags.contains('creeper_bounty_completed')) return
    if (!tags.contains('pillager_bounty_completed')) return
    //if (!tags.contains('mutant_bounty_completed')) return
    tags.add('all_bounties_completed')
    tags.remove('resistance')
    Utils.server.runCommandSilent(`/give ${event.player.username} kubejs:resistance_elixir`)
    Utils.server.runCommandSilent(`/puffish_skills points add ${event.player.username} Elixirs 1`)
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let endurance_counter = new Map();
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    let time = event.level.getTime()
    if (!event.level.isNight()) return
    if (!event.entity.isMonster()) return
    if (player) {
       let player_username = event.source.player.username 
        if (!event.source.player.tags.contains(`endurance`)) return;

        if (endurance_counter[player_username] == undefined) {
            endurance_counter[player_username] = 1

        } else {
            endurance_counter[player_username]++;
        }
        if (endurance_counter[player_username] == 75) {
            Utils.server.tell('Endurance Trial: 50% Complete. 75 Kills Remaining')
        }

        if (endurance_counter[player_username] != 150) return;
            event.source.player.tags.remove(`endurance`)
            Utils.server.runCommandSilent(`/give ${player_username} kubejs:endurance_elixir`)
            Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
            Utils.server.tell('Complete')
            endurance_counter[player_username] = 0
    }
})

PlayerEvents.respawned(event => {
    let player_username = event.entity.username
    if (!event.entity.tags.contains(`endurance`)) return
    endurance_counter[player_username] = 0
    Utils.server.runCommandSilent(`/tell ${player_username} Endurance Trial: Failed`)

})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
EntityEvents.death('cave_dweller:cave_dweller', event => {
    if (!event.source.player) return;
    //Utils.server.tell('player_check')
    if (!event.source.player.tags.contains('evasion')) return;
    //Utils.server.tell('tag check')
    let player_username = event.source.player.username
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    event.source.player.tags.remove(`evasion`)
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
    Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${x} ${y} ${z} loot minecraft:loot_boxes/cave_dweller`)

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const pet_kills = {
    'warlock': 'tarantula_hawk',
    'rogue': 'kangaroo',
    'scout': 'bald_eagle',
    'warlord': 'grizzly_bear',
    'engineer': 'crocodile'
}

const regeneration_counter = new Map();
const $UUIDUtil = Java.loadClass("net.minecraft.core.UUIDUtil")
Object.entries(pet_kills).forEach(([class_name, pet]) => {
    EntityEvents.death(event => {
        if (!event.entity.isMonster()) return
        if (event.source.type != `alexsmobs:${pet}`) return
        //Utils.server.tell('Entity Check')
        let player = event.level.getNearestPlayer(event.entity, 60)
        let player_username = player.username
        if (!player.tags.contains('regeneration')) return
        //Utils.server.tell('tag Check')
        if (!player.persistentData.contains(`kubejs_class:${class_name}`)) return
        //Utils.server.tell('class Check')
        let playerUUID = player.uuid
        let intArrays = $UUIDUtil.uuidToIntArray(playerUUID)
        let intarray0 = parseFloat(intArrays[0]).toString()

        let intarray1 = parseFloat(intArrays[1]).toString()

        let intarray2 = parseFloat(intArrays[2]).toString()

        let intarray3 = parseFloat(intArrays[3]).toString()

        //console.log(event.source.actual.nbt.tags.get('Owner').toString())
        let owner =  event.source.actual.nbt.tags.get('Owner').toString()

        if (owner != `[I;${intarray0},${intarray1},${intarray2},${intarray3}]`) return
        
        if (regeneration_counter[player_username] == undefined) {
            regeneration_counter[player_username] = 1
            //Utils.server.tell(regeneration_counter[player_username])

        } else {
            regeneration_counter[player_username]++;
            //Utils.server.tell(regeneration_counter[player_username])
        }
        if (regeneration_counter[player_username] == 75) {
            Utils.server.tell('Regeneration Trial: 50% Complete. 75 Kills Remaining')
            //Utils.server.tell(regeneration_counter[player_username])
        }

        if (regeneration_counter[player_username] != 150) return;
            player.tags.remove('regeneration')
            Utils.server.runCommandSilent(`/give ${player_username} kubejs:regeneration_elixir`)
            Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
            regeneration_counter[player_username] = 0
            Utils.server.tell('Regeneration Trial: Complete')
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const shadow_form_hit_counter = new Map();
const shadow_form_hurt_counter = new Map();
EntityEvents.death(event => {
    if (!event.source.player) return
    if (!event.entity.isMonster()) return
    if (!event.source.player.tags.contains('shadow_form')) return
    let weapon = event.source.weapon.get()
    let player_username = event.source.player.username
    if (weapon != '1 yamato') return
    if (shadow_form_hit_counter[player_username] == undefined) {
        shadow_form_hit_counter[player_username] = 1
        event.source.player.tell(`Heartstop Kills: ${shadow_form_hit_counter[player_username]}`)
    } else {
        shadow_form_hit_counter[player_username]++
        event.source.player.tell(`Heartstop Kills: ${shadow_form_hit_counter[player_username]}`)
    }

    if (shadow_form_hit_counter[player_username] != 30) return;
    Utils.server.runCommandSilent(`/give ${player_username} kubejs:shadow_form_elixir`)
    event.source.player.tags.remove('shadow_form')
    event.source.player.tell('Heartstop Challenge: Complete')
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Elixirs 1`)
    shadow_form_hit_counter[player_username] = 0
})

EntityEvents.hurt(event => {
    if (!event.entity.player) return
    if (!event.entity.tags.contains('shadow_form')) return
    let player_username = event.entity.player.username
    if (shadow_form_hurt_counter[player_username] == undefined) {
        shadow_form_hurt_counter[player_username] = 1
        Utils.server.tell(shadow_form_hurt_counter[player_username])
        Utils.server.tell(`Heartstop Strikes: ${shadow_form_hurt_counter[player_username]}`)
    } else {
        shadow_form_hurt_counter[player_username]++
        Utils.server.tell(`Heartstop Strikes: ${shadow_form_hurt_counter[player_username]}`)
    }

    if (shadow_form_hurt_counter[player_username] != 5) return;
    event.entity.tell('Heartstop Challenge: Failed')
    shadow_form_hurt_counter[player_username] = 0
    shadow_form_hit_counter[player_username] = 0
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////