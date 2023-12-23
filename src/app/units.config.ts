import { Race, Tag, UnitConfig } from "./app.types";

export const unitConfigs: UnitConfig[] = [
  {
    name: 'SCV',
    race: Race.Terran,
    hp: 45,
    damage: 5,
    damagePerUpgrade: 0,
    cooldown: 1.07,
    tags: [
      Tag.Light,
      Tag.Biological,
      Tag.Mechanical
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Marine',
    race: Race.Terran,
    hp: 45,
    damage: 6,
    damagePerUpgrade: 1,
    cooldown: 0.61,
    tags: [
      Tag.Light,
      Tag.Biological
    ]
  },
  {
    name: 'Reaper',
    race: Race.Terran,
    hp: 60,
    damage: 4,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 0.79,
    tags: [
      Tag.Light, Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Marauder',
    race: Race.Terran,
    hp: 125,
    armor: 1,
    damage: 10,
    damagePerUpgrade: 1,
    cooldown: 1.07,
    tags: [
      Tag.Armored, Tag.Biological
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 10,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Ghost',
    race: Race.Terran,
    hp: 100,
    damage: 10,
    damagePerUpgrade: 1,
    cooldown: 1.07,
    tags: [
      Tag.Biological
    ]
  },
  {
    name: 'Hellbat',
    race: Race.Terran,
    hp: 135,
    damage: 18,
    damagePerUpgrade: 2,
    cooldown: 1.43,
    tags: [
      Tag.Biological,
      Tag.Light,
      Tag.Mechanical
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Hellion',
    race: Race.Terran,
    hp: 90,
    damage: 8,
    damagePerUpgrade: 1,
    cooldown: 1.79,
    tags: [
      Tag.Light,
      Tag.Mechanical
    ],
    bonusTag: Tag.Light,
    bonusDamagePerUpgrade: 1,
    bonusDamage: 6,
    targetsGroundOnly: true
  },
  {
    name: 'Widow Mine',
    race: Race.Terran,
    hp: 90,
    damage: 125,
    damagePerUpgrade: 0,
    cooldown: 29,
    tags: [
      Tag.Light,
      Tag.Mechanical
    ],
    bonusTag: Tag.Light,
    bonusDamagePerUpgrade: 1,
    bonusDamage: 6
  },
  {
    name: 'Cyclone',
    race: Race.Terran,
    hp: 110,
    damage: 11,
    damagePerUpgrade: 1,
    cooldown: 0.481,
    tags: [
      Tag.Armored,
      Tag.Mechanical
    ]
  },
  {
    name: 'Tank',
    race: Race.Terran,
    hp: 175,
    armor: 1,
    damage: 15,
    damagePerUpgrade: 2,
    cooldown: 0.74,
    tags: [
      Tag.Armored,
      Tag.Mechanical
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 10,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Siege Tank',
    race: Race.Terran,
    hp: 175,
    armor: 1,
    damage: 40,
    damagePerUpgrade: 4,
    cooldown: 2.14,
    tags: [
      Tag.Armored,
      Tag.Mechanical
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 30,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Thor',
    race: Race.Terran,
    hp: 400,
    armor: 1,
    damage: 30,
    damagePerUpgrade: 3,
    attacks: 2,
    cooldown: 0.91,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Massive
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Banshee',
    race: Race.Terran,
    hp: 140,
    damage: 12,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 0.89,
    tags: [
      Tag.Light,
      Tag.Mechanical,
      Tag.Flying
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Liberator',
    race: Race.Terran,
    hp: 180,
    damage: 75,
    damagePerUpgrade: 5,
    cooldown: 1.14,
    tags: [
      Tag.Light,
      Tag.Mechanical,
      Tag.Flying
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Viking Fighter',
    race: Race.Terran,
    hp: 135,
    damage: 10,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 1.43,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Flying
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 4,
    bonusDamagePerUpgrade: 0,
    targetsAirOnly: true
  },
  {
    name: 'Viking Assault',
    race: Race.Terran,
    hp: 135,
    damage: 12,
    damagePerUpgrade: 1,
    cooldown: 0.71,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Flying
    ],
    bonusTag: Tag.Mechanical,
    bonusDamage: 8,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Battlecruiser',
    race: Race.Terran,
    hp: 550,
    armor: 3,
    damage: 8,
    damagePerUpgrade: 1,
    cooldown: 0.16,
    tags: [
      Tag.Massive,
      Tag.Mechanical,
      Tag.Armored,
      Tag.Flying
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Drone',
    race: Race.Zerg,
    hp: 40,
    damage: 5,
    damagePerUpgrade: 0,
    cooldown: 1.07,
    tags: [
      Tag.Light, Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Zergling',
    race: Race.Zerg,
    hp: 35,
    damage: 5,
    damagePerUpgrade: 1,
    cooldown: 0.497,
    tags: [
      Tag.Light, Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Roach',
    race: Race.Zerg,
    hp: 145,
    armor: 1,
    damage: 16,
    damagePerUpgrade: 2,
    cooldown: 1.43,
    tags: [
      Tag.Armored, Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Queen',
    race: Race.Zerg,
    hp: 175,
    armor: 1,
    damage: 4,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 0.71,
    tags: [
      Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Baneling',
    race: Race.Zerg,
    hp: 30,
    damage: 16,
    damagePerUpgrade: 2,
    cooldown: 0,
    tags: [
      Tag.Biological
    ],
    targetsGroundOnly: true,
    bonusTag: Tag.Light,
    bonusDamage: 19,
    bonusDamagePerUpgrade: 0
  },
  {
    name: 'Ravager',
    race: Race.Zerg,
    hp: 120,
    armor: 1,
    damage: 16,
    damagePerUpgrade: 2,
    cooldown: 1.14,
    tags: [
      Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Hydralisk',
    race: Race.Zerg,
    hp: 90,
    damage: 12,
    damagePerUpgrade: 1,
    cooldown: 0.59,
    tags: [
      Tag.Biological,
      Tag.Light
    ]
  },
  {
    name: 'Lurker',
    race: Race.Zerg,
    hp: 200,
    armor: 1,
    damage: 20,
    damagePerUpgrade: 2,
    cooldown: 1.43,
    tags: [
      Tag.Biological,
      Tag.Armored
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 10,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Mutalisk',
    race: Race.Zerg,
    hp: 120,
    damage: 9,
    damagePerUpgrade: 1,
    cooldown: 1.09,
    tags: [
      Tag.Biological,
      Tag.Light,
      Tag.Flying
    ]
  },
  {
    name: 'Corruptor',
    race: Race.Zerg,
    hp: 120,
    armor: 2,
    damage: 14,
    damagePerUpgrade: 1,
    cooldown: 1.36,
    tags: [
      Tag.Biological,
      Tag.Armored,
      Tag.Flying
    ],
    bonusTag: Tag.Massive,
    bonusDamage: 6,
    bonusDamagePerUpgrade: 1,
    targetsAirOnly: true
  },
  {
    name: 'Locust',
    race: Race.Zerg,
    hp: 50,
    damage: 10,
    damagePerUpgrade: 1,
    cooldown: 0.43,
    tags: [
      Tag.Light,
      Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Ultralisk',
    race: Race.Zerg,
    hp: 500,
    armor: 2,
    damage: 35,
    damagePerUpgrade: 3,
    cooldown: 0.61,
    tags: [
      Tag.Armored,
      Tag.Biological,
      Tag.Massive
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Probe',
    race: Race.Protoss,
    hp: 20,
    shields: 20,
    damage: 5,
    damagePerUpgrade: 0,
    cooldown: 1.07,
    tags: [
      Tag.Light, Tag.Mechanical
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Zealot',
    race: Race.Protoss,
    hp: 100,
    armor: 1,
    shields: 50,
    damage: 8,
    attacks: 2,
    damagePerUpgrade: 1,
    cooldown: 0.86,
    tags: [
      Tag.Light
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Stalker',
    race: Race.Protoss,
    hp: 80,
    armor: 1,
    shields: 80,
    damage: 13,
    damagePerUpgrade: 1,
    cooldown: 1.43,
    tags: [
      Tag.Armored,
      Tag.Mechanical
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 5,
    bonusDamagePerUpgrade: 1
  },
  {
    name: 'Adept',
    race: Race.Protoss,
    hp: 70,
    armor: 1,
    shields: 70,
    damage: 10,
    damagePerUpgrade: 1,
    cooldown: 1.61,
    tags: [
      Tag.Light, Tag.Biological
    ],
    bonusTag: Tag.Light,
    bonusDamage: 12,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Dark Templar',
    race: Race.Protoss,
    hp: 40,
    shields: 80,
    damage: 45,
    damagePerUpgrade: 5,
    cooldown: 1.21,
    tags: [
      Tag.Light, Tag.Biological
    ],
    targetsGroundOnly: true
  },
  {
    name: 'Archon',
    race: Race.Protoss,
    hp: 10,
    shields: 350,
    damage: 25,
    damagePerUpgrade: 3,
    cooldown: 1.25,
    tags: [
      Tag.Massive
    ],
    bonusTag: Tag.Biological,
    bonusDamage: 10,
    bonusDamagePerUpgrade: 1
  },
  {
    name: 'Immortal',
    race: Race.Protoss,
    hp: 200,
    armor: 1,
    shields: 100,
    damage: 20,
    damagePerUpgrade: 2,
    cooldown: 1.04,
    tags: [
      Tag.Armored,
      Tag.Mechanical
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 30,
    bonusDamagePerUpgrade: 3,
    targetsGroundOnly: true
  },
  {
    name: 'Colossus',
    race: Race.Protoss,
    hp: 200,
    shields: 150,
    armor: 1,
    damage: 10,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 1.07,
    tags: [
      Tag.Armored,
      Tag.Massive,
      Tag.Mechanical
    ],
    bonusTag: Tag.Light,
    bonusDamage: 5,
    bonusDamagePerUpgrade: 1,
    targetsGroundOnly: true
  },
  {
    name: 'Phoenix',
    race: Race.Protoss,
    hp: 120,
    shields: 60,
    damage: 5,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 0.79,
    tags: [
      Tag.Light,
      Tag.Mechanical,
      Tag.Flying
    ],
    bonusTag: Tag.Light,
    bonusDamage: 5,
    bonusDamagePerUpgrade: 1
  },
  {
    name: 'Void Ray',
    race: Race.Protoss,
    hp: 150,
    shields: 100,
    damage: 6,
    damagePerUpgrade: 1,
    cooldown: 0.36,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Flying
    ],
    bonusTag: Tag.Armored,
    bonusDamage: 4,
    bonusDamagePerUpgrade: 1
  },
  {
    name: 'Carrier',
    race: Race.Protoss,
    hp: 300,
    shields: 150,
    damage: 5,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 2.14 / 8,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Massive,
      Tag.Flying
    ]
  },
  {
    name: 'Tempest',
    race: Race.Protoss,
    hp: 200,
    shields: 100,
    damage: 40,
    damagePerUpgrade: 4,
    cooldown: 2.36,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Massive,
      Tag.Flying
    ],
    targetsGroundOnly: true
  }
]

export const secondaryUnitConfigs: UnitConfig[] = [
  {
    name: 'Queen',
    race: Race.Zerg,
    hp: 175,
    armor: 1,
    damage: 9,
    damagePerUpgrade: 1,
    cooldown: 0.71,
    tags: [
      Tag.Biological
    ],
    targetsAirOnly: true
  },
  {
    name: 'Battlecruiser',
    race: Race.Terran,
    hp: 550,
    armor: 3,
    damage: 5,
    damagePerUpgrade: 1,
    cooldown: 0.16,
    tags: [
      Tag.Massive,
      Tag.Mechanical,
      Tag.Armored,
      Tag.Flying
    ],
    targetsAirOnly: true
  },
  {
    name: 'Tempest',
    race: Race.Protoss,
    hp: 200,
    shields: 100,
    damage: 30,
    damagePerUpgrade: 3,
    cooldown: 2.36,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Massive,
      Tag.Flying
    ],
    bonusTag: Tag.Massive,
    bonusDamage: 22,
    bonusDamagePerUpgrade: 2,
    targetsAirOnly: true
  },
  {
    name: 'Thor',
    race: Race.Terran,
    hp: 400,
    armor: 1,
    damage: 25,
    damagePerUpgrade: 3,
    cooldown: 0.91,
    tags: [
      Tag.Armored,
      Tag.Mechanical,
      Tag.Massive
    ],
    bonusTag: Tag.Massive,
    bonusDamage: 10,
    bonusDamagePerUpgrade: 1,
    targetsAirOnly: true
  },
  {
    name: 'Liberator',
    race: Race.Terran,
    hp: 180,
    damage: 5,
    damagePerUpgrade: 1,
    attacks: 2,
    cooldown: 1.29,
    tags: [
      Tag.Light,
      Tag.Mechanical,
      Tag.Flying
    ],
    targetsAirOnly: true
  },
]
