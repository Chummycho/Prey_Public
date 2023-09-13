

const bone_effigy = [
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

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:gorilla_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Stay'))
		  text.add(3, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 70 Health'))
			text.add(4, Text.red(' > Cannot be commanded to follow'))
			text.add(5, Text.green(' > Monke').bold(true))
		  }
	  })

	  event.addAdvanced('kubejs:grizzly_bear_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 70 Health'))
			text.add(4, Text.green(' > Can be ridden without a saddle'))
			text.add(5, Text.green(' > Attacks have powerful knockback'))
		  }
	  })

	  event.addAdvanced('kubejs:crow_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 15 Health'))
			text.add(4, Text.green(' > Gathers items and delivers to containers'))
			text.add(5, Text.green(' > Deals additional damage to the undead'))
		  }
	  })

	  event.addAdvanced('kubejs:crocodile_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Stay'))
		  text.add(3, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 70 Health'))
			text.add(4, Text.green(' > Will drag its target to water and deathroll'))
			text.add(5, Text.red(' > Cannot be commanded to follow'))
		  }
	  })

	  event.addAdvanced('kubejs:capuchin_monkey_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 25 Health'))
			text.add(4, Text.green(' > Give an Ancient Dart to increase attack damage and add piercing ability'))
			text.add(5, Text.green(' > Monke').bold(true))

		  }
	  })
	  event.addAdvanced('kubejs:elephant_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 85 Health'))
			text.add(4, Text.red(' > Cannot be commanded to stay or follow'))
			text.add(5, Text.green(' > Can be mounted with a chest'))
		  }
	  })


	  event.addAdvanced('kubejs:komodo_dragon_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 55 Health'))
			text.add(4, Text.green(' > Attacks inflict poison'))
			text.add(5, Text.green(' > Can be ridden with a saddle'))
		  }
	  })

	  event.addAdvanced('kubejs:tarantula_hawk_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 35 Health'))
			text.add(4, Text.green(' > Attacks paralyze Arthropods'))
		  }
	  })

	  event.addAdvanced('kubejs:kangaroo_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 45 Health'))
			text.add(4, Text.green(' > Has a storage space in its pouch'))
			text.add(4, Text.green(' > Can be given Melee Weapon, Chestplate, and Helmet to use in combat'))
		  }
	  })

	  event.addAdvanced('kubejs:bald_eagle_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 20 Health'))
			text.add(4, Text.green(' > Can be used for scouting areas if used with Falconry Glove and Hood'))
		  }
	  })

	  event.addAdvanced('kubejs:sugar_glider_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.red(' > Cannot attack or defend'))
			text.add(3, Text.blue(' > 15 Health'))
			text.add(4, Text.red(' > Basically worthless'))
		  }
	  })

	  event.addAdvanced('kubejs:flutter_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 30 Health'))
			text.add(4, Text.green(' > Can fly out of harms way'))
			text.add(4, Text.green(' > Attacks home in on target'))
		  }
	  })

	  event.addAdvanced('kubejs:mantis_shrimp_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		  text.add(5, Text.green(' > Break Blocks'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 25 Health'))
			text.add(4, Text.green(' > Inflicts a fire effect on target'))
			text.add(4, Text.darkGreen(' > To enter Break Blocks mode, give it the block you wish to break and set to wander mode'))
		  }
	  }) 

	  event.addAdvanced('kubejs:mimic_octopus_summoning_stone', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.ctrl) {
		  text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Modes').blue()])
		} else {
		  text.add(1, Text.yellow('Modes').underlined(true))
		  text.add(2, Text.white(' > Follow'))
		  text.add(3, Text.white(' > Stay'))
		  text.add(4, Text.white(' > Wander'))
		}
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Traits').blue()])
		  } else {
			text.add(1, Text.yellow('Traits').underlined(true))
			text.add(2, Text.white(' > Will defend its owner'))
			text.add(3, Text.blue(' > 35 Health'))
			text.add(4, Text.green(' > Can change its form'))
			text.add(5, Text.darkGreen(' > To enter Break Blocks mode, give it the block you wish to break and set to wander mode'))
		  }
		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to learn more about its Forms.').gold()])
		  } else {
			text.add(1, Text.yellow('Forms').underlined(true))
			text.add(2, Text.darkRed(' > Creeper Form: Give Gunpowder'))
			text.add(3, Text.darkRed(' > Guardian Form: Give Prismarine Shard or Crystal'))
			text.add(4, Text.darkRed(' > Pufferfish Form: Give Pufferfish'))
			text.add(5, Text.darkGreen(' > 5-8 Mimicream can also be applied to give it special attacks in each form'))
		  }
	  })

	event.add('blocky_siege:roaster_stand','Load with Fire Charges and power with a Redstone Signal')

	event.addAdvanced('kubejs:warlock', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Class Attributes').yellow()])
		  } else {
			text.add(1, Text.yellow('Class Attributes:').underlined(true))
			text.add(2, Text.gold('  '))
			text.add(3, [Text.of(' > Class Stat:').gray(), Text.of(' +100 Max Mana').blue()])
			text.add(4, [Text.of(' > Class Pet:').gray(), Text.of(' Tarantula Hawk').gold()])
			text.add(5, [Text.of(' > Class Passive:').gray(), Text.of(' Gain 45 Mana for killing ANY mob').lightPurple()])
		  }
		  text.add(1, Text.yellow('Subclasses:').underlined(true))
		  text.add(2, Text.green(' > Guardian'))
		  text.add(3, Text.green(' > Battlemage'))
		  text.add(4, Text.green(' > Summoner'))
		  text.add(5, Text.gold('  '))
	  })
	  event.addAdvanced('kubejs:rogue', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Class Attributes').yellow()])
		  } else {
			text.add(1, Text.yellow('Class Attributes:').underlined(true))
			text.add(2, Text.gold('  '))
			text.add(3, [Text.of(' > Class Stat:').gray(), Text.of(' +20% Crit Damage').blue()])
			text.add(4, [Text.of(' > Class Pet:').gray(), Text.of(' Kangaroo').gold()])
			text.add(5, [Text.of(' > Class Passive:').gray(), Text.of(' Upon killing an enemy you are concealed in shadow and gain a burst of speed for 5 seconds').lightPurple()])
		  }
		  text.add(1, Text.yellow('Subclasses:').underlined(true))
		  text.add(2, Text.green(' > Bounty Hunter'))
		  text.add(3, Text.green(' > Alchemist'))
		  text.add(4, Text.green(' > Duelist'))
		  text.add(5, Text.gold('  '))
	  })


	  event.addAdvanced('kubejs:scout', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Class Attributes').yellow()])
		  } else {
			text.add(1, Text.yellow('Class Attributes:').underlined(true))
			text.add(2, Text.gold('  '))
			text.add(3, [Text.of(' > Class Stat:').gray(), Text.of(' +20% Projectile Damage').blue()])
			text.add(4, [Text.of(' > Class Pet:').gray(), Text.of(' Bald Eagle').gold()])
			text.add(5, [Text.of(' > Class Passive:').gray(), Text.of(' Every 10th sucessful projectile hit will summon a lightning bolt and strike the target. Projectiles include thrown items.').lightPurple()])
		  }
		  text.add(1, Text.yellow('Subclasses:').underlined(true))
		  text.add(2, Text.green(' > Druid'))
		  text.add(3, Text.green(' > Arcane Ranger'))
		  text.add(4, Text.green(' > Explorer'))
		  text.add(5, Text.gold('  '))
	  })
	  event.addAdvanced('kubejs:warlord', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Class Attributes').yellow()])
		  } else {
			text.add(1, Text.yellow('Class Attributes:').underlined(true))
			text.add(2, Text.gold('  '))
			text.add(3, [Text.of(' > Class Stat:').gray(), Text.of(' +2 Base Armor').blue()])
			text.add(4, [Text.of(' > Class Pet:').gray(), Text.of(' Grizzly Bear').gold()])
			text.add(5, [Text.of(' > Class Passive:').gray(), Text.of(' Upon killing an enemy regenerate a small amount of health').lightPurple()])
		  }
		  text.add(1, Text.yellow('Subclasses:').underlined(true))
		  text.add(2, Text.green(' > Spellsword'))
		  text.add(3, Text.green(' > Kensei'))
		  text.add(4, Text.green(' > Berserker'))
		  text.add(5, Text.gold('  '))
	  })

	  event.addAdvanced('kubejs:engineer', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view ').gold(), Text.of('Crafted Tool Stats').aqua().underlined()])
		  } else {
			text.add(1, Text.darkAqua('Crafted Tool Stats').underlined())
			text.add(2, Text.gray(' > Crafted Melee Weapon Attack Speed'))
			text.add(3, Text.gray(' > Crafted Melee Weapon Attack Damage'))
			text.add(4, Text.gray(' > Crafted Ranged Weapon Attack Speed'))
			text.add(5, Text.gray(' > Crafted Ranged Weapon Gem Sockets'))
			text.add(6, Text.gray(' > Crafted Shields Armor Bonus'))
		  }
		if (!event.ctrl) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('CTRL ').yellow(), Text.of('to view ').gold(), Text.of('Crafted Armor Stats').darkGreen().underlined()])
		  } else {
			text.add(1, Text.darkGreen('Crafted Armor Stats').underlined())
			text.add(2, Text.gray(' > Crafted Armor Defence'))
			text.add(3, Text.gray(' > Crafted Boots Gem Sockets'))
			text.add(4, Text.gray(' > Crafted Helmets Gem Sockets'))
			text.add(5, Text.gray(' > Crafted Equipment Durability'))
		  }

		  if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Class Attributes').yellow().underlined()])
		  } else {
		  text.add(1, Text.yellow('Class Attributes:').underlined(true))
		  text.add(2, [Text.of(' > Every').white().italic(), Text.of(' 250 Tools').darkGreen(), Text.of(' you craft you are granted').white().italic(), Text.of(' +1').green().italic(), Text.of(' to all ').white().italic(), Text.of('Crafted Tool Stats').darkGreen(), Text.of('. Wooden and Stone tools are excluded.').white().italic()])
		  text.add(3, [Text.of(' > Every').white().italic(), Text.of(' 200 Armor Pieces').darkAqua(), Text.of(' you craft you are granted').white().italic(), Text.of(' +1').green().italic(), Text.of(' to all ').white().italic(), Text.of('Crafted Armor Stats').darkAqua()])
		  text.add(4, Text.gold(' ')) 
		  text.add(5, [Text.of(' > Class Pet:').gray(), Text.of(' Crocodile').gold()])
		  text.add(6, [Text.of(' > Class Passive:').gray(), Text.of(' Class Stats can be leveled.').lightPurple()])
		  text.add(7, Text.gold(' ')) 
		  }


	  })
	  event.addAdvanced('supplementaries:quiver', (item, advanced, text) => {
		
		text.add(1, [Text.of('Hover this item over Arrows and').gray(), Text.of(' Right-Click ').gold(), Text.of('to put the Arrows in the Quiver.').gray(), Text.of(' Hold').gray(), Text.of(' X ').gold(), Text.of('to view the Arrows and cycle between them').gray()])
	  })

	event.addAdvanced('kubejs:rune_of_the_guardian', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Holy Spell Power').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Max Mana'))
			text.add(3, Text.aqua(' > Spell Resistance'))
			text.add(4, Text.aqua(' > Holy Spell Power'))
			text.add(5, Text.aqua(' > Spell Cooldown'))
			text.add(6, Text.aqua(' '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > A versatile support class wielding the').white(), Text.of(' Guardians Grimoire').lightPurple().italic(), Text.of(' and the ').white(), Text.of('Thunderbolt Lancer').lightPurple().italic(), Text.of(', offering healing and protection.')])
		  text.add(3, Text.yellow('  '))
	  })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_battlemage', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Fire Spell Power').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Ender Spell Power'))
			text.add(3, Text.aqua(' > Lightning Spell Power'))
			text.add(4, Text.aqua(' > Ice Spell Power'))
			text.add(5, Text.aqua(' > Fire Spell Power'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > An offensive spell-casting class wielding the').white(), Text.of(' Battlemages Codex').lightPurple().italic(), Text.of(', offering access to powerful elemental spells.')])
		  text.add(3, Text.yellow('  '))


	  })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_summoner', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' PET').darkGreen(), Text.of(' summons have').white(), Text.of(' 35% more health').green()])
			text.add(3, [Text.of(' >').white(), Text.of(' UNDEAD').darkRed(), Text.of(' summons deal').white(), Text.of(' 10% more damage').red()])
			text.add(4, [Text.of(' > Gathering 10 identical').white(), Text.of(' Bone Totems').gold(), Text.of(' permanently captures an animals soul. Using the').white(), Text.of(' Summoners Gateway').gold(), Text.of(' grants you a').white(), Text.of(' Summoning Stone').gold(), Text.of(' for each captured animal soul')])
			text.add(5, [Text.of(' > ').white(), Text.of('Summoning').darkGreen(), Text.of(' enough creatures with').white(), Text.of(' Summoning Stones').gold(), Text.of(' will cause your').white(), Text.of(' SUMMONED PETS').gold(), Text.of(' to Level-Up. Each Level-Up grants each Summoned pet a massive').white(), Text.of(' Health Boost').green()])

		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Blood Spell Power'))
			text.add(3, Text.aqua(' > Evocation Spell Power'))
			text.add(4, Text.aqua(' > Spell Cooldown Reduction'))
			text.add(5, Text.aqua(' > Summoned Creature Damage'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Armed with the').white(), Text.of(' Tome of Death').lightPurple().italic(), Text.of(' and ').white(), Text.of('Rootweavers Fang').lightPurple().italic(), Text.of(', this class commands powerful allies and pets, overwhelming foes with a legion of formidable creatures.')])
		  text.add(3, Text.yellow('  '))
	  })

/// In guide book make sure to distinguish that certain bonuses only go to certain creature types. The 3 types are Summoned (from summoning stones), Tamed (from the taming flute), and Conjured (from spells)


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_spellsword', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Faster Spell Cooldown').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Attack Speed'))
			text.add(3, Text.aqua(' > Attack Knockback'))
			text.add(4, Text.aqua(' > Spell Resistance'))
			text.add(5, Text.aqua(' > Cooldown Reduction'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The savagery of').white(), Text.of(' Astral Shard').lightPurple().italic(), Text.of(' with').white(), Text.of(' Solaris\'').lightPurple().italic(), Text.of(' magical mastery makes this hybrid class excellent in both close combat and long range spellcasting.')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_kensei', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Attack Speed').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Ranged Damage'))
			text.add(3, Text.aqua(' > Movement Speed'))
			text.add(4, Text.aqua(' > Attack Speed'))
			text.add(5, Text.aqua(' > Feathers Regen Rate'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Harnessing both').white(), Text.of(' Chaos').darkRed().italic(), Text.of(' and').white(), Text.of(' Harmony').darkAqua().italic(), Text.of(', the Kensei cuts down any foe that dares threaten the balance.')])
		  text.add(3, Text.yellow('  '))
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_berserker', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' > Talent Tree consists of ').white(), Text.of('The 6 Forgotten Trials.').darkRed().italic(), Text.of(' For each Forgotten Trial completed you gain a').white(), Text.of(' Passive Ability').lightPurple()])
			text.add(3, [Text.of(' >').white(), Text.of(' +5%').green(), Text.of(' Attack Speed When Wounded').gold()])
		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, [Text.of(' > Trial: ').white(), Text.of(' Bloodlust').darkRed().italic()])
			text.add(3, [Text.of(' > Trial: ').white(), Text.of(' Surge').darkRed().italic()])
			text.add(4, [Text.of(' > Trial: ').white(), Text.of(' Shadow Form').darkRed().italic()])
			text.add(5, [Text.of(' > Trial: ').white(), Text.of(' Restoration').darkRed().italic()])
			text.add(6, [Text.of(' > Trial: ').white(), Text.of(' Strike').darkRed().italic()])
			text.add(7, [Text.of(' > Trial: ').white(), Text.of(' Blood Oath').darkRed().italic()])
			text.add(8, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of('Armed with').white(), Text.of(' Mighty').lightPurple().italic(), Text.of(' and').white(), Text.of(' Wrath').lightPurple().italic(), Text.of(', The Berserker must confront').white(), Text.of(' The 6 Forgotten Trials').darkRed(), Text.of(' to reclaim his lost skills')])
		  text.add(3, Text.yellow('  '))
	  })
	  

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_head_hunter', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +15%').green(), Text.of(' Projectile Damage').gold()])
			text.add(3, [Text.of(' > Completing a').white(), Text.of(' Bounty Contract').gold().italic(), Text.of(' earns you a').white(), Text.of(' Head Hunter Reward').darkRed(), Text.of(' with significantly better payouts than standard bounties.')])
			text.add(4, [Text.of(' > Completing a').white(), Text.of(' High Value Target Contract').gold().italic(), Text.of(' earns you').white(), Text.of(' 3x ').darkGreen(), Text.of('more coins ')])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Feathers Regen'))
			text.add(3, Text.aqua(' > Melee Damage'))
			text.add(4, Text.aqua(' > Incoming Healing'))
			text.add(5, Text.aqua(' > Projectile Damage'))
			text.add(6, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The Headhunter wields both').white(), Text.of(' Guillotine').lightPurple().italic(), Text.of(' and').white(), Text.of(' Deadshot').lightPurple().italic(), Text.of(' to decimate all bounty targets in their path.')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_explorer', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, Text.green(' > +100% Fishing Luck'))
			text.add(3, Text.green(' > +50% Experience from fishing'))
			text.add(4, Text.green(' > 10% chance to recieve double loot from fishing'))
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Max Health'))
			text.add(3, Text.aqua(' > Max Feathers'))
			text.add(4, Text.aqua(' > Feathers Regen Rate'))
			text.add(5, Text.aqua(' > Movement Speed'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Possessing an assortment of gadgets such as').white(), Text.of(' Anomoly').lightPurple().italic(), Text.of(', the').white(), Text.of(' Iron Paraglider').aqua(), Text.of(', and the').white(), Text.of(' Eternal Steak').gold(), Text.of(', the Explorer is an incredibly versatile class allowing for a variety of playstyles.')])
		  text.add(3, Text.yellow('  '))
	  })

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  event.addAdvanced('kubejs:rune_of_the_arcane_ranger', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Attack Knockback').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Bow Charge Speed'))
			text.add(3, Text.aqua(' > Spell Cooldown'))
			text.add(4, Text.aqua(' > Cast Time Reduction'))
			text.add(5, Text.aqua(' > Movement Speed'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The Arcane Ranger wields').white(), Text.of(' Fury').lightPurple().italic(), Text.of(' and an array of arrows for ranged annihilation, while').white(), Text.of(' Potentia').lightPurple().italic(), Text.of(' and').white(), Text.of(' Tempest').lightPurple().italic(), Text.of(' dominate close combat.')])
		  text.add(3, Text.yellow('  '))
		
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_druid', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +50%').green(), Text.of(' Artifact Summons').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Bow Charge Speed'))
			text.add(3, Text.aqua(' > Summon Cap'))
			text.add(4, Text.aqua(' > Artifact Cooldown'))
			text.add(5, Text.aqua(' > Soul Gathering'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Equipped with').white(), Text.of(' Torrent').lightPurple().italic(), Text.of(',').white(), Text.of(' Celestial Shiv').darkAqua().italic(), Text.of(', unique arrows, and a collection of powerful artifacts, this flexible class is useful for both solo and group play.')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_duelist', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +15%').green(), Text.of(' Crit Damage').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Damage With Shield Equipped'))///
			text.add(3, Text.aqua(' > Health Regen'))
			text.add(4, Text.aqua(' > Critical Hit Chance'))
			text.add(5, Text.aqua(' > Critical Hit Damage'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Equipped with a ').white(), Text.of('full set of armor').gold(), Text.of(', the exceptional ').white(), Text.of('Whisperwind Rapier').lightPurple().italic(), Text.of(', and ').white(), Text.of('Vanguards Boomerang').lightPurple().italic(), Text.of(', this class excels in 1-on-1 combat.')])
		  text.add(3, Text.yellow('  '))
		
	  })



	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_alchemist', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').red(), Text.of('ALT ').yellow(), Text.of('to view Negative Passives').red()])
		  } else {
			text.add(1, Text.darkRed('Negative Passives:').underlined(true))
			text.add(2, Text.red(' > No On-Hit Feathers Regen Effect'))
			text.add(3, Text.red(' > Attacks only do 25% of their normal damage'))
			text.add(4, Text.red(' > Max health is decreased by 50%'))
			
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').green(), Text.of('SHIFT ').yellow(), Text.of('to view Positive Passives.').green()])
		  } else {
			text.add(1, Text.darkGreen('Positive Passives').underlined(true))
			text.add(2, Text.green(' > Your max health is increased to normal while under a potion effect'))
			text.add(3, Text.green(' > +200% Max Feathers'))
			text.add(4, Text.green(' > +50% Feathers Regen Rate'))
			text.add(5, Text.green(' > +75% Duration and Strength for ALL brewed potions'))
			text.add(6, Text.green(' > +75% Attack Speed Under Potion Effect'))
			text.add(7, Text.green(' > +75% Damage UNDER Potion Effect'))
			text.add(8, Text.green(' > +25% Damage PER Potion Effect'))
			text.add(9, Text.green(' > +25% Crit Chance against poisoned enemy'))
			text.add(10, Text.green(' > +25% Crit Damage against poisoned enemy'))
			text.add(11, Text.green(' > +20% Incoming Healing'))
			text.add(12, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Even with the').white(), Text.of(' Acidic Bone').lightPurple().italic(), Text.of(', the Alchemist is initally quite weak. However, it gains extraordinary buffs from potions and overtime it can reach unimaginable heights of power.')])
		  text.add(3, Text.yellow('  '))
		})




	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:evasion_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Teleport away from any attack while under its effects, taking no damage'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 15x Hits to activate the EVASION effect for 15 seconds'))
		  text.add(3, Text.red(' > 5 minute cooldown'))

	  })

	  event.addAdvanced('kubejs:speed_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Grants +20% Movement Speed'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 10x Hits to activate the SPEED effect for 15 seconds'))
		  text.add(3, Text.red(' > 1 minute cooldown'))

	  })

	  event.addAdvanced('kubejs:resistance_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Grants 20% Damage Reduction'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 15x Hits to activate the RESISTANCE effect for 10 seconds'))
		  text.add(3, Text.red(' > 1 minute cooldown'))

	  })

	  event.addAdvanced('kubejs:regeneration_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Regenerate lost health'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 15x Hits to activate the REGENERATION effect for 10 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))

	  })

	  event.addAdvanced('kubejs:shadow_form_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, [Text.of('Summary:').yellow().underlined(), Text.of(' Upon reaching 30% health you will be given the'), Text.of(' Heartstop').darkPurple(), Text.of(' effect for ').white(), Text.of('15 Seconds').darkGreen().underlined()])
			text.add(2, Text.white('  '))
			text.add(3, [Text.of('Effect:').yellow().underlined(), Text.of(' Under this effect you are temporarily '), Text.of('invulnerable').gold().underlined(), Text.of(' but will take'), Text.of(' 50%').darkRed(), Text.of(' of accumulated damage once it wears off. ').white()])
			text.add(4, Text.white('  '))
			text.add(5, [Text.of('Cooldown:').yellow().underlined(), Text.of(' 3 Minutes').darkGreen()])
  
		}

	  })

	  event.addAdvanced('kubejs:strength_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Your attacks deal 3 extra damage'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 15x Hits to activate the STRENGTH effect for 10 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))

	  })

	  event.addAdvanced('kubejs:endurance_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Gain 8 Feathers for 20 seconds'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > Get 15x Hits to activate the ENDURANCE effect for 20 seconds'))
		  text.add(3, Text.red(' > 1 minute cooldown'))
	  })

	  event.addAdvanced('kubejs:fire_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Momentarily breathe fire to deal heavy damage to your attacker'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > When you reach 30% health the FIRE BREATHER effect is activated'))
		  text.add(3, Text.red(' > 3 minute cooldown'))
	  })

	  event.addAdvanced('kubejs:absorption_elixir', (item, advanced, text) => {
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Gain 4 additional hearts of health'))
  
		  }
		// shift, alt and ctrl are all keys you can check!
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > When you reach 50% health the ABSORPTION effect is activated for 15 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))
	  })
	  event.addAdvanced('kubejs:charged_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > +20% Speed'))
			text.add(3, Text.aqua(' > +5% Spell Power'))
			text.add(4, Text.aqua(' > +10% Attack Damage'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > When you reach 50% health the CHARGED effect is activated for 10 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))
		  text.add(4, Text.gold(' > Most effective with Warlock classes'))
		  text.add(5, Text.gold(' '))

	  })
	  event.addAdvanced('kubejs:soul_steal_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > You consume health from your target, gaining hearts for every landed blow'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > When you reach 50% health the SOUL STEAL effect is activated for 10 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))
	  })
	  event.addAdvanced('kubejs:angel_wings_elixir', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gray(), Text.of('SHIFT ').blue(), Text.of('for details.').gray()])
		  } else {
			text.add(1, Text.yellow('Effects:').underlined(true))
			text.add(2, Text.aqua(' > Grants an ethereal Elytra, allowing temporary flight'))
  
		  }
		  text.add(1, Text.yellow('Passive Effect:').underlined(true))
		  text.add(2, Text.green(' > When you reach 50% health the ANGEL WINGS effect is activated for 20 seconds'))
		  text.add(3, Text.red(' > 3 minute cooldown'))
	  })

	  event.addAdvanced('kubejs:creeper_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Creepers').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Creepers').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Creepers').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:skeleton_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Skeletons').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Skeletons').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Skeletons').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})
		  event.addAdvanced('kubejs:spider_bounty', (item, advanced, text) => {
			// shift, alt and ctrl are all keys you can check!
			if (!event.shift) {
				text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
			  } else {
				text.add(1, Text.gold('Bounty Details:'))
				text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Spiders').italic().darkRed()])
				text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Spiders').italic().darkRed()]) 
				text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Spiders').italic().darkRed()])
				text.add(5, Text.yellow(' '))
				text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
			  }
			  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
			  text.add(2, Text.yellow(' '))
			  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
			  text.add(4, Text.yellow(' '))
			})

	  event.addAdvanced('kubejs:zombie_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Zombies').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Zombies').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Zombies').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})
	
	  event.addAdvanced('kubejs:enderman_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Endermen').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Endermen').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Endermen').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:pillager_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Pillagers').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Pillagers').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Pillagers').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:piglin_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Piglins').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Piglins').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Piglins').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	
	  
	  event.addAdvanced('kubejs:drowned_bounty', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Drowned').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Drowned').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Drowned').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})

//	  event.addAdvanced('kubejs:mutant_bounty', (item, advanced, text) => {
//		// shift, alt and ctrl are all keys you can check!
//		if (!event.shift) {
//			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
//		  } else {
//			text.add(1, Text.gold('Bounty Details:'))
//			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 10x Mutants').italic().darkRed()])
//			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 15x Mutants').italic().darkRed()]) 
//			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 25x Mutants').italic().darkRed()])
//			text.add(5, Text.yellow(' '))
//			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 10 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 25').darkGreen().italic()]) 
//		  }
//		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
//		  text.add(2, Text.yellow(' '))
//		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
//		  text.add(4, Text.yellow(' '))
//	  })

	event.addAdvanced('musketmod:pistol', (item, advanced, text) => {
		// shift, alt and ctrl are all keys you can check!
		  text.add(1, [Text.of('Press ').gold(), Text.of('F').yellow().italic(), Text.of(' to put in your offhand and use with a melee weapon simultaneously.').gold()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Uses ').gold().italic(), Text.of('Paper Cartriges ').yellow(), Text.of('as ammo.').gold().italic()])


	  })

	event.addAdvanced('kubejs:subclass_skill_point', (item, advanced, text) => {
		text.add(1, [Text.of('Grants a ').gray(), Text.of('Subclass Skill Point ').gold()])
	})
//.tooltip('Right click with this item in your hand to add a skill point to your subclass skill tree.')
	event.addAdvanced('kubejs:torn_page', (item, advanced, text) => {
		text.add(1, [Text.of('Collect and use ').gray(), Text.of('10 ').yellow(), Text.of('to gain a ').gray(), Text.of('Subclass Skill Point').gold()])
	})

	event.addAdvanced('kubejs:bloodlust', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('50').red().underlined(), Text.of(' Enemies in ').white(), Text.of('5 Minutes').gold()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Each successful hit grants a stacking ').white(), Text.of('Haste').gold(), Text.of(' effect for ').white(), Text.of('4 seconds. Stacks to').white(), Text.of(' 90% Attack Speed').gold(), Text.of('. If you are hit').white(), Text.of(' 3 times').darkRed(), Text.of(' then the effect clears.').white()])
	})

	event.addAdvanced('kubejs:restoration', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('500').red().underlined(), Text.of(' Enemies with ').white(), Text.of('Spells').blue()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Regenerate ').white(), Text.of('60 Mana').blue(), Text.of(' on kill').white()])
	})

	event.addAdvanced('kubejs:strike', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('1500').red().underlined(), Text.of(' Enemies with ').white(), Text.of('Projectiles').darkPurple()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' On the ').white(), Text.of('15th').yellow(), Text.of(' successful projectile hit, two ').white(), Text.of('Lightning Bolts').yellow(), Text.of(' will strike the current target.')])
	})
	event.addAdvanced('kubejs:surge', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Sprint ').white(), Text.of('10,000').darkGreen().underlined(), Text.of(' total blocks ').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' On killing an enemy gain a ').white(), Text.of('6 Second Speed Boost').green()])
	})
	event.addAdvanced('kubejs:trial_blood_oath', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Deal ').white(), Text.of('5,000').darkRed(), Text.of(' total damage and recieve ').white(), Text.of('1,000').darkRed(), Text.of(' total damage.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Every').white(), Text.of(' 15 minutes').blue(), Text.of(' you will recieve a ').white(), Text.of('Blood Oath').darkRed(), Text.of('. If used, you will be granted a one time effect that'), Text.of(' revives you upon death').gold()])
	})// Not Finished

	event.addAdvanced('kubejs:shadow_form', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('150').red().underlined(), Text.of(' enemies without dying.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Upon reaching 30% health you will be given the').white(), Text.of(' Heartstop').darkPurple(), Text.of(' effect for ').white(), Text.of('20 Seconds').gold().underlined(), Text.of('. Under this effect you are temporarily invulnerable but take 50% of accumulated damage once it wears off. ').white()])
		text.add(4, Text.white(' ')),
		text.add(5, [Text.of('Effect Cooldown: ').yellow(), Text.of('3 Minutes').darkGreen()])
	})
	event.addAdvanced('kubejs:time_turner', (item, advanced, text) => {
		text.add(1, [Text.of('Warp time and bring the darkness...').gray().italic()])
	})
	event.addAdvanced('kubejs:blood_oath', (item, advanced, text) => {
		text.add(1, [Text.of('Effect: ').yellow(), Text.of('Using this item will grant an infinite effect that').white(), Text.of(' resurrects').gold().italic(), Text.of(' you upon death.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Cooldown: ').gray(), Text.of('5 Minutes').darkGreen()])
	})

	event.addAdvanced('kubejs:summoners_gateway', (item, advanced, text) => {
		text.add(1, [Text.of('Grants a ').white(), Text.of('Summoning Stone').gold(), Text.of(' for all permanently captured animal souls ')])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Cooldown: ').yellow(), Text.of('5 Minutes').darkGreen()])
	})
	event.addAdvanced('kubejs:taming_flute', (item, advanced, text) => {
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view').yellow(), Text.of(' Tameable Animals').gold()])
		  } else {
			text.add(1, [Text.of('Tameable Animals').gold().underlined()])
			text.add(2, [Text.of(' > Moose').yellow()])
			text.add(3, [Text.of(' > Snow Leapord').yellow()])
			text.add(4, [Text.of(' > Bison').yellow()])
			text.add(5, [Text.of(' > Anaconda').yellow()])
			text.add(6, [Text.of(' > Dropbear').yellow()])
			text.add(7, [Text.of(' > Rhino').yellow()])
			text.add(8, [Text.of(' > Tiger').yellow()])
			text.add(9, [Text.of(' > Tusklin').yellow()])
		  }
		text.add(1, [Text.of('Allows the player to tame a variety of animals ').gray()])
		text.add(2, Text.white(' '))
	});

	event.addAdvanced('kubejs:evasion_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Hunt down and slaughter a').white(), Text.of(' Cave Dweller').darkRed()])

	})

	event.addAdvanced('kubejs:speed_elixir_relic', (item, advanced, text) => {
		
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Feed').white(), Text.of(' 5').gold(), Text.of(' Baby Villagers').darkGreen(), Text.of(' to each of the ').white(), Text.of('Creatures').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  The Villagers MUST be baby Villagers').gray()])
		text.add(6, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(7, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view').yellow(), Text.of(' Creatures').darkRed(), Text.of(' that need to be fed.')])
		  } else {
			text.add(7, [Text.of('Creatures requiring sustinance:').gold().underlined().italic()])
			text.add(8, [Text.of('> Anacondas:').yellow(), Text.of(' Found in ').gray(), Text.of('Swamps').darkGreen(), Text.of(' and').gray(), Text.of(' Mangrove Swamps').darkGreen()])
			text.add(9, [Text.of('> Murmurs:').yellow(), Text.of(' Found in ').gray(), Text.of('Caves').gold(), Text.of(' beneath').gray(), Text.of(' Y: -30').blue()])
			text.add(10, [Text.of('> Rocky Rollers:').yellow(), Text.of(' Found rarely in').gray(), Text.of(' Dripstone Caves').gold()])
			text.add(11, [Text.of('> Soul Vultures:').yellow(), Text.of(' Found in').gray(), Text.of(' Soul Sand Valleys').red(), Text.of(' in').gray(), Text.of(' The Nether').darkRed()])
			text.add(12, [Text.of('> Crocodiles:').yellow(), Text.of(' Found in').gray(), Text.of(' Swamps, Mangrove Swamps, and Rivers').darkGreen()])
		  }

	})

	event.addAdvanced('kubejs:resistance_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Reach the 3rd tier for each of the').white(), Text.of(' Bounties').yellow()])

	})

	event.addAdvanced('kubejs:regeneration_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 300 Monsters').darkRed(), Text.of(' with your').white(), Text.of(' Class Pet').darkGreen()])
	})

	event.addAdvanced('kubejs:shadow_form_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire ').white(), Text.of('Yamato').lightPurple().italic(), Text.of(' and kill ').white(), Text.of('50 Monsters').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Warning:').red(), Text.of(' Recieving 5 hits from ANY source will result in failure')])
	})

	event.addAdvanced('kubejs:strength_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 100 Piglin Brutes').darkRed(), Text.of(' while dual wielding ').white(), Text.of('Golden Axes').lightPurple().italic()])
	})

	event.addAdvanced('kubejs:endurance_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 150 Monsters').darkRed(), Text.of(' without dying').white()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' > It must be Nighttime').gray()])
		
	})

	event.addAdvanced('kubejs:fire_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of('> Kill').white(), Text.of(' 100 Flying Creatures').darkRed(), Text.of(' with the ').white(), Text.of('Firebolt Spell').aqua().underlined().italic(), Text.of(' (any tier)').yellow()])
	})

	event.addAdvanced('kubejs:absorption_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire any ').white(), Text.of('Jetpack').aqua().underlined().italic(), Text.of(' and the ').white(), Text.of('Bazooka').aqua().underlined().italic(), Text.of('. While airborne with the Jetpack, rain down hellfire on Fish, Squids, and other Sealife.').white(), Text.of(' 100 Sealife Souls required.').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  Be 10+ blocks above the targets for the kills to count').gray()])
		text.add(6, [Text.of(' >  Stay airborne with a Jetpack for the entire challenge').gray()])
	})

	event.addAdvanced('kubejs:charged_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 500 Enemies').red(), Text.of(' with ').white(), Text.of('Spells').aqua(), Text.of(' (any tier)').yellow()])
	})

	event.addAdvanced('kubejs:soul_steal_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Enter a Village under the cover of darkness. Using the ').white(), Text.of('Shotgun').aqua(), Text.of(', steal the souls of').white(), Text.of(' 50 sleeping Villagers').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  Villagers MUST be in bed for the kills to count').gray()])
		text.add(6, [Text.of(' >  You may only get kills during the Night').gray()])
	})

	event.addAdvanced('kubejs:angel_wings_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire any').white(), Text.of(' Paraglider').lightPurple(), Text.of(' and the').white(), Text.of(' Grenade Launcher').lightPurple(), Text.of('. While Paragliding, kill ').white(), Text.of('150 enemies').darkRed(), Text.of(' with the Grenade Launcher').white()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  You MUST be 10+ blocks above the targets for the kills to count').gray()])
		text.add(6, [Text.of(' >  You MUST be Paragliding for the kills to count').gray()])
	})

bone_effigy.forEach((effigy) => {
	event.addAdvanced(`kubejs:${effigy}_bone_effigy`, (item, advanced, text) => {
		text.add(1, [Text.of('Collect and use').gray(), Text.of(' 10 ').yellow(), Text.of('to acquire a').gray(), Text.of(` Summoning Stone`).gold()])
	})
})

event.addAdvanced('kubejs:high_value_target', (item, advanced, text) => {
	text.add(1, [Text.of('Description:').gold().underlined()])
	text.add(2, [Text.of(' ').red()])
	text.add(3, [Text.of(' > High Value Targets').yellow(), Text.of(' are Bounty Contracts but chosen at random from a list of tougher foes. Upon Completion, their').white(), Text.of(' Bounty Counter').red(), Text.of(' increases by').white(), Text.of(' 1').darkGreen(), Text.of(' so you will need to defeat the same entity more times when it is randomly selected again. But, the ').white(), Text.of('Coin rewards').gold().italic(), Text.of(' grow substantially with each entity elimination.').white()])
	text.add(4, [Text.of(' ').red()])
	text.add(5, [Text.of(' ').red()])

	if (!event.shift) {
		text.add(6, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view all potential').yellow(), Text.of(' Targets').darkRed()])
		} else {
		text.add(6, [Text.of('Targets:').darkRed().underlined()])
		text.add(7, [Text.of(' > Mutant Creatures').gold().italic()])
		text.add(7, [Text.of(' > Nightmare Stalker').gold().italic()])
		text.add(7, [Text.of(' > Skeleton Thrasher').gold().italic()])
		text.add(7, [Text.of(' > Wraith').gold().italic()])
		text.add(7, [Text.of(' > Iceologer').gold().italic()])
		text.add(7, [Text.of(' > Necromancer').gold().italic()])
		text.add(7, [Text.of(' > Bonescaller').gold().italic()])
		text.add(7, [Text.of(' > Supreme Bonescaller').gold().italic()])
		text.add(7, [Text.of(' > Deepling Angler').gold().italic()])
		text.add(7, [Text.of(' > Deepling Brute').gold().italic()])
		}
	})
})










