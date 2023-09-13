ItemEvents.rightClicked('kubejs:strike', event => {
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    event.player.tags.add('strike');
    event.item.setCount(0)
})
ItemEvents.rightClicked('kubejs:bloodlust', event => {
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    event.player.tags.add('bloodlust')
    event.item.setCount(0)
})
ItemEvents.rightClicked('kubejs:surge', event => {
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    let player = event.player.username
    let dist = event.entity.stats.getValue(Stats.SPRINT_ONE_CM)/100
    let int_dist = parseInt(dist)
    if (dist < 10000) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player} Berserker 1`)
        Utils.server.runCommandSilent(`/tell ${player} Cannot complete this trial. You must SPRINT ${10000-int_dist} more blocks.`)
    }
    if (dist > 10000) {
        Utils.server.tell(`Trial Complete`)
        event.player.getPersistentData().putBoolean(`kubejs_trial_complete:surge`, true)
    }
})
ItemEvents.rightClicked('kubejs:restoration', event => {
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    event.player.getPersistentData().putBoolean(`kubejs_trial_complete:restoration`, true)
    event.item.setCount(0)
})
ItemEvents.rightClicked('kubejs:shadow_form', event => {
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    event.player.tags.add('sf')
    event.item.setCount(0)
})
ItemEvents.rightClicked('kubejs:trial_blood_oath', event => {
    let player = event.player.username
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    let taken = event.player.stats.getValue(Stats.DAMAGE_TAKEN)/10
    let dealt = event.player.stats.getValue(Stats.DAMAGE_DEALT)/10
    if (dealt < 5000 && taken < 1000) {
        event.player.tell(`Cannot finish Blood Oath Challenge. You need to deal ${5000-dealt} more damage and take ${1000-taken} more damage`)
    }
    if (dealt > 5000 && taken > 1000) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player} Berserker 1`)
        event.item.setCount(0)
        Utils.server.scheduleInTicks(18000, e => {
            event.player.give('kubejs:blood_oath')
            e.reschedule()
        })  
    }

})


let restoration_counter = new Map();
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    if (!event.entity.isMonster()) return
    if (player) {
    if (!event.source.player.tags.contains(`restoration`)) return;
    let scroll = event.source.weapon.get()
    if (scroll != '1 scroll' && scroll != '1 iron_spell_book' && scroll != '1 gold_spell_book' && scroll != '1 diamond_spell_book' && scroll != '1 copper_spell_book' && scroll != '1 villager_spell_book' && scroll != '1 dragonskin_spell_book' && scroll != '1 blaze_spell_book' && scroll != '1 rotten_spell_book' && scroll != '1 evoker_spell_book' && scroll != '1 netherite_spell_book') return
    let player_username = event.source.player.username
    if (restoration_counter[player_username] == undefined) {
		restoration_counter[player_username] = 1
		
	} else {
		restoration_counter[player_username]++;
	}
	if (restoration_counter[player_username] == 250) {
		Utils.server.tell('Restoration Trial: 50% Complete. 250 Kills Remaining')
	}

	if (restoration_counter[player_username] != 500) return;
		event.source.player.tags.remove(`restoration`)
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Berserker 1`)
		Utils.server.runCommandSilent(`/give ${player_username} kubejs:restoration`)
		Utils.server.tell('Complete')
		restoration_counter[player_username] = 0
    }
})



let bloodlust_counter = new Map();
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    let player_username = event.source.player.username
    if (!event.source.player.tags.contains(`bloodlust`)) return;
    if (!event.entity.isMonster()) return
    if (bloodlust_counter[player_username] == undefined) {
		bloodlust_counter[player_username] = 1
        Utils.server.runCommandSilent(`/tell ${player_username} 5 Minute Bloodlust Timer: Started`);
        event.server.scheduleInTicks(6000, () => {
            bloodlust_counter[player_username] = 0            
        })
	} else {
		bloodlust_counter[player_username]++;
	}
	if (bloodlust_counter[player_username] == 25) {
		Utils.server.tell('Bloodlust Trial: 50% Complete. 25 Kills Remaining')
	}

	if (bloodlust_counter[player_username] != 50) return;
		event.source.player.tags.remove(`bloodlust`)
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Berserker 1`)
		event.source.player.getPersistentData().putBoolean(`kubejs_trial_complete:bloodlust`, true)
		Utils.server.tell('Complete')
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:bloodlust`)
		bloodlust_counter[player_username] = 0
    }
})



let sf_counter = new Map();
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    let player_username = event.source.player.username 
    if (!event.source.player.tags.contains(`sf`)) return;
    if (!event.entity.isMonster()) return
    if (sf_counter[player_username] == undefined) {
		sf_counter[player_username] = 1

	} else {
		sf_counter[player_username]++;
	}
	if (sf_counter[player_username] == 75) {
		Utils.server.tell('Heart Stop Trial: 50% Complete. 75 Kills Remaining')
	}

	if (sf_counter[player_username] != 150) return;
		event.source.player.tags.remove(`sf`)
		event.source.player.getPersistentData().putBoolean(`kubejs_trial_complete:shadow_form`, true)
		Utils.server.tell('Complete')
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Berserker 1`)
		sf_counter[player_username] = 0
    }
})

PlayerEvents.respawned(event => {
    let player_username = event.entity.username
    if (!event.entity.tags.contains(`sf`)) return
    sf_counter[player_username] = 0
    Utils.server.runCommandSilent(`/tell ${player_username} Heart Stop Trial: Failed`)

})



let strike_counter = new Map();
EntityEvents.death(event => {
    let source = event.source
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    if (!event.entity.isMonster()) return
    let player_username = event.source.player.username 
    if (!event.source.player.tags.contains(`strike`)) return;
    if (source.type != 'arrow' && source.type != 'trident') return

    if (strike_counter[player_username] == undefined) {
		strike_counter[player_username] = 1

	} else {
		strike_counter[player_username]++;
        //Utils.server.tell(`${strike_counter[player_username]}`)
	}
	if (strike_counter[player_username] == 750) {
		Utils.server.tell('Strike Trial: 50% Complete. 750')
	}

	if (strike_counter[player_username] != 1500) return;
		event.source.player.tags.remove(`strike`)
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Berserker 1`)
		event.source.player.getPersistentData().putBoolean(`kubejs_trial_complete:strike`, true)
		Utils.server.tell('Complete')
		strike_counter[player_username] = 0
    }
})
