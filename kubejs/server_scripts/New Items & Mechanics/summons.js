let common_summoned_pet_counter = new Map();
let rare_summoned_pet_counter = new Map();
let epic_summoned_pet_counter = new Map();
const common_summoner_counter = new Map();
const rare_summoner_counter = new Map();
const epic_summoner_counter = new Map();



const common_summoned_pets = {
    'crow':15,
    'sugar_glider':15,
    'bald_eagle': 20,
    'mantis_shrimp':25
}

Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:summoner')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})

const rare_summoned_pets = {
    'capuchin_monkey':25,
    'flutter':30,
    'mimic_octopus': 35,
    'tarantula_hawk':35,
    'elephant':85,
    'komodo_dragon':55,
    'kangaroo': 45,
}

Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:summoner')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})

const epic_summoned_pets = {
    'gorilla':70,
    'crocodile':70,
    'grizzly_bear':70,
}
Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:summoner')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})



Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
        event.level.spawnLightning(x, y, z, true)
        if (!event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
        if (event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(common_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(common_summoner_counter[name]*0.75)}f}]}`)

    })

    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:summoner')) return
        let name = event.player.username
        let username = event.player.username
        if (common_summoner_counter[name] == undefined) {
            common_summoner_counter[name] = 1}
    
        if (common_summoned_pet_counter[name] == undefined) {
            common_summoned_pet_counter[name] = 1
            
        } else {
            common_summoned_pet_counter[name]++
            
        }
        
        if (common_summoned_pet_counter[name] != 15*common_summoner_counter[name]) return
        common_summoner_counter[name]++
        Utils.server.tell(`Common Summoned Pets: Health Level Up`)
        common_summoned_pet_counter[name] = 0
    })

})
Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        event.level.spawnLightning(x, y, z, true)
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
        if (!event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
        if (event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(rare_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(rare_summoner_counter[name]*0.75)}f}]}`)
    })
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:summoner')) return
        let name = event.player.username
        let username = event.player.username
        if (rare_summoner_counter[name] == undefined) {
            rare_summoner_counter[name] = 1}
    
        if (rare_summoned_pet_counter[name] == undefined) {
            rare_summoned_pet_counter[name] = 1
            
        } else {
            rare_summoned_pet_counter[name]++
            
        }
        
        if (rare_summoned_pet_counter[name] != 15*rare_summoner_counter[name]) return
        rare_summoner_counter[name]++
        Utils.server.tell(`Rare Summoned Pets: Health Level Up`)
        rare_summoned_pet_counter[name] = 0
    })
})

Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        event.level.spawnLightning(x, y, z, true)
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
        if (!event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
        if (event.player.persistentData.contains('kubejs_class:summoner'))
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(epic_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(epic_summoner_counter[name]*0.75)}f}]}`)
    })
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:summoner')) return
        let name = event.player.username
        let username = event.player.username
        if (epic_summoner_counter[name] == undefined) {
            epic_summoner_counter[name] = 1}
    
        if (epic_summoned_pet_counter[name] == undefined) {
            epic_summoned_pet_counter[name] = 1
            
        } else {
            epic_summoned_pet_counter[name]++
            
        }
        
        if (epic_summoned_pet_counter[name] != 15*epic_summoner_counter[name]) return
        epic_summoner_counter[name]++
        Utils.server.tell(`Epic Summoned Pets: Health Level Up`)
        epic_summoned_pet_counter[name] = 0
    })
})

const all_summoned_pets = [
    'crow',
    'sugar_glider',
    'bald_eagle',
    'mantis_shrimp',
    'capuchin_monkey',
    'flutter',
    'mimic_octopus',
    'tarantula_hawk',
    'elephant',
    'komodo_dragon',
    'kangaroo',
    'gorilla',
    'crocodile',
    'grizzly_bear',
]

all_summoned_pets.forEach(pet => {
    ItemEvents.rightClicked('kubejs:summoners_gateway', event => {
        if (!event.player.persistentData.contains('kubejs_class:summoner')) return
        let name = event.player.username
        if (!event.player.persistentData.contains(`kubejs_summoner:${pet}`)) return
        event.player.give(`kubejs:${pet}_summoning_stone`)
        Utils.server.runCommandSilent(`/clear ${name} kubejs:summoners_gateway 1`)
    })
})


//Late game golem summon with AI chip and flamer
///summon lategamegolems:lgg_entity ~ ~ ~ {Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_flamer",Count:1}, {Slot:1,id:"lategamegolems:lgg_ai_chip_follower",Count:1}]}}

Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (randomNumber < 0.50) {

        } else {
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.tags.contains('beastmaster_one')) return
            let player_username = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${player_username},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            event.cancel()
        }
    })
})

Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (randomNumber < 0.50) {

        } else {
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.tags.contains('beastmaster_two')) return
            let player_username = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${player_username},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            event.cancel()
        }
    })
})

Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (randomNumber < 0.50) {

        } else {
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.tags.contains('beastmaster_three')) return
            let player_username = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${player_username},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            event.cancel()
        }
    })
})

//Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
   // EntityEvents.spawned(`alexsmobs:${pet}`, event => {
   //     let player = event.level.getNearestPlayer(event.entity, 60)
   //     let player_username = player.username
  //      if (!player.tags.contains('beastmaster_two')) return
  //      const randomNumber = Math.random();
  //      if (randomNumber < 0.50) {
//
//        } else {
 //           let x = event.entity.x
  //          let y = event.entity.y
    //        let z = event.entity.z
      //      if (!player.persistentData.contains('kubejs_class:summoner')) {
        //        Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
//
  //          } else {
    //            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(common_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(common_summoner_counter[player_username]*0.75)}f}]}`)
      //      }
        //    event.cancel()
        //}
    //})
//})
//Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
  //  EntityEvents.spawned(`alexsmobs:${pet}`, event => {
    //    let player = event.level.getNearestPlayer(event.entity, 60)
      //  let player_username = player.username
        //if (!player.tags.contains('beastmaster_three')) return
        //const randomNumber = Math.random();
        //if (randomNumber < 0.50) {

        //} else {
          //  let x = event.entity.x
            //let y = event.entity.y
//            let z = event.entity.z
  //          if (!player.persistentData.contains('kubejs_class:summoner')) {
    ////            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
//
  //          } else {
    //            Utils.server.runCommandSilent(`/summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(common_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(common_summoner_counter[player_username]*0.75)}f}]}`)
      //      }
//            event.cancel()
  //      }
    //})
//})

//Late game golem summon with AI chip and flamer
///summon lategamegolems:lgg_entity ~ ~ ~ {Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_flamer",Count:1}, {Slot:1,id:"lategamegolems:lgg_ai_chip_follower",Count:1}]}}



// Make the bow item
EntityEvents.hurt(event => {

})