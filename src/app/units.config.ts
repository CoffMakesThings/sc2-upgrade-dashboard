import { Race, Tag, UnitConfig } from "./app.types";

export const unitConfigs: UnitConfig[] = [
  {
    name: 'Marine',
    race: Race.Terran,
    hp: 45,
    damage: 6,
    damagePerUpgrade: 1,
    tags: [
      Tag.Light,
      Tag.Biological
    ]
  },
  {
    name: 'SCV',
    race: Race.Terran,
    hp: 45,
    damage: 5,
    damagePerUpgrade: 0,
    tags: [
      Tag.Light, Tag.Biological
    ]
  },
  {
    name: 'Reaper',
    race: Race.Terran,
    hp: 60,
    damage: 4,
    damagePerUpgrade: 1,
    attacks: 2,
    tags: [
      Tag.Light, Tag.Biological
    ]
  },
  {
    name: 'Marauder',
    race: Race.Terran,
    hp: 125,
    armor: 1,
    damage: 10,
    damagePerUpgrade: 1,
    tags: [
      Tag.Armored, Tag.Biological
    ]
  },
  {
    name: 'Ghost',
    race: Race.Terran,
    hp: 100,
    damage: 10,
    damagePerUpgrade: 1,
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
    tags: [
      Tag.Biological,
      Tag.Light
    ],
    bonusTag: Tag.Light,
    bonusDamagePerUpgrade: 1,
    bonusDamage: 0
  },
  {
    name: 'Hellion',
    race: Race.Terran,
    hp: 90,
    damage: 8,
    damagePerUpgrade: 1,
    tags: [
      Tag.Light
    ],
    bonusTag: Tag.Light,
    bonusDamagePerUpgrade: 1,
    bonusDamage: 6
  },
  {
    name: 'Widow mine',
    race: Race.Terran,
    hp: 90,
    damage: 125,
    damagePerUpgrade: 0,
    tags: [
      Tag.Light
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
    tags: [
      Tag.Armored
    ]
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
    tags: [
      Tag.Light
    ]
  },
  {
    name: 'Stalker',
    race: Race.Protoss,
    hp: 80,
    armor: 1,
    shields: 80,
    damage: 13,
    damagePerUpgrade: 1,
    tags: [
      Tag.Armored
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
    tags: [
      Tag.Light, Tag.Biological
    ],
    bonusTag: Tag.Light,
    bonusDamage: 12,
    bonusDamagePerUpgrade: 1
  },
  {
    name: 'Dark Templar',
    race: Race.Protoss,
    hp: 40,
    shields: 80,
    damage: 45,
    damagePerUpgrade: 5,
    tags: [
      Tag.Light, Tag.Biological
    ]
  }
]
