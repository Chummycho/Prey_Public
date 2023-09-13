//EntityEvents.hurt(event => {
// let source = event.source;
   // let target = event.entity
  ///  let source_player = source.player;
    
  //  if (source_player) {
  //  if (!source_player.persistentData.contains(`kubejs_trial_complete:strike`)) return;    
  //  if (!source == 'arrow') return
    
   // let sp_user = source.player.username; 
    //let ent_x = event.entity.x;
    //let ent_y = event.entity.y;
   // let ent_z = event.entity.z;
   // event.level.spawnLightning(ent_x, ent_y, ent_z, false)
  //  }
//})


let scout_hitcounter_map = new Map();
EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let source_player = source.player;
    let ent_x = event.entity.x;
    let ent_y = event.entity.y;
    let ent_z = event.entity.z;
    
    if (source_player) {
        if (!source_player.persistentData.contains(`kubejs_class:scout`)) return;
        if (source.type != 'arrow' && source.type != 'trident') return
        let sp_user = source.player.username; 
        if (scout_hitcounter_map[sp_user] == undefined) {
            scout_hitcounter_map[sp_user] = 1;
        } else {
            scout_hitcounter_map[sp_user]++;
        }
        if (scout_hitcounter_map[sp_user] > 9) {
            scout_hitcounter_map[sp_user] = 0;
            event.level.spawnLightning(ent_x, ent_y, ent_z, false)
            
        }
    }
})    

let strike_hitcounter_map = new Map();
EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let source_player = source.player;
    let ent_x = event.entity.x;
    let ent_y = event.entity.y;
    let ent_z = event.entity.z;
    
    if (source_player) {
        if (!source_player.persistentData.contains(`kubejs_trial_complete:strike`)) return;
        if (source.type != 'arrow' && source.type != 'trident') return
        let sp_user = source.player.username; 
        if (strike_hitcounter_map[sp_user] == undefined) {
            strike_hitcounter_map[sp_user] = 1;
        } else {
            strike_hitcounter_map[sp_user]++;
        }
        if (strike_hitcounter_map[sp_user] > 14) {
            strike_hitcounter_map[sp_user] = 0;
            event.level.spawnLightning(ent_x, ent_y, ent_z, false)
            event.level.spawnLightning(ent_x, ent_y, ent_z, false)
            
        }
    }
})  
 
////////////////////////////////////////////////////////////////
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    let player_username = event.source.player.username
    if (!player.persistentData.contains(`kubejs_class:warlord`)) return
    Utils.server.runCommandSilent(`/effect give ${player_username} minecraft:regeneration 2 2`)    }
  })

  EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    let player_username = event.source.player.username
    if (!player.persistentData.contains(`kubejs_trial_complete:surge`)) return
    Utils.server.runCommandSilent(`/effect give ${player_username} minecraft:speed 6`)    }
  })

/////////////////////////////////////////////////////////////////////
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    if (!player) return
    let player_username = event.source.player.username
    if (!player.persistentData.contains(`kubejs_class:rogue`)) return
    Utils.server.runCommandSilent(`/effect give ${player_username} minecraft:invisibility 5 2`)
    Utils.server.runCommandSilent(`/effect give ${player_username} minecraft:speed 5`)
  })

let hurtcounter_map = new Map();
let trigger = false;

EntityEvents.hurt(event => {
    let entity = event.entity;
    let sp_user = entity.username

    // If the player was the one attacking
    if (!entity.isPlayer()) return
    if (hurtcounter_map[trigger]) return;
    const healthPercent = entity.health / entity.maxHealth * 100
    if (healthPercent > 30) return
    if (entity.persistentData.contains(`kubejs_trial_complete:shadow_form`)) {
        Utils.server.runCommandSilent(`/effect give ${sp_user} irons_spellbooks:heartstop 20`)
        hurtcounter_map[trigger] = true;
        event.server.scheduleInTicks(3600, () => {
            hurtcounter_map[trigger] = false
            Utils.server.runCommandSilent(`/tell ${sp_user} HEARTSTOP: Ready`)
        })
    }
})
///////////////////////////////////////////////////////////////
EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player

    if (player) {
    let player_username = event.source.player.username
    if (!player.persistentData.contains(`kubejs_class:warlock`)) return
    Utils.server.runCommandSilent(`/mana add ${player_username} 45`)
    }
})


EntityEvents.death(event => {
    let dmgSource = event.source
    let player = dmgSource.player
    
    if (player) {
    let player_username = event.source.player.username
    if (!player.persistentData.contains(`kubejs_trial_complete:restoration`)) return
    Utils.server.runCommandSilent(`/mana add ${player_username} 60`)
    }
})

