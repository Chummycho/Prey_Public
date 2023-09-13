const runes = [
    'evasion', // Done
    'speed',
    'resistance', // Done 
    'regeneration', // Done
    'strength',// Done
    'endurance',// Done
]


runes.forEach(rune => {
    ItemEvents.rightClicked(`kubejs:${rune}_elixir`, event => {
        let player = event.player.username
        event.player.getPersistentData().putBoolean(`kubejs_hit:${rune}`, true)
        Utils.server.runCommandSilent(`/clear ${player} kubejs:${rune}_elixir 1`)
    })
})

const crystals = [
    'absorption',
    'charged',
    'angel_wings',
    'soul_steal',
    'fire',
    'shadow_form'
]

crystals.forEach(crystal => {
    ItemEvents.rightClicked(`kubejs:${crystal}_elixir`, event => {
        let player = event.player.username
        event.player.getPersistentData().putBoolean(`kubejs_hurt:${crystal}`, true)
        Utils.server.runCommandSilent(`/clear ${player} kubejs:${crystal}_elixir 1`)
    })
})


const relics = [
    'absorption',
    'charged',
    'angel_wings',
    'soul_steal',
    'fire',
    'shadow_form',
    'evasion', // Done
    'speed',
    'resistance', // Done 
    'regeneration', // Done
    'strength',// Done
    'endurance'// Done
]

relics.forEach(relic => {
    ItemEvents.rightClicked(`kubejs:${relic}_elixir_relic`, event => {
        event.player.tags.add(relic)
        Utils.server.runCommandSilent(`/clear ${event.player.username} kubejs:${relic}_elixir_relic 1`)

    })
})