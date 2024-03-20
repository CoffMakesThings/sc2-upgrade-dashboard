import { Unit } from "./unit";

export interface UnitConfig {
  name: string;
  race: Race;
  hp: number;
  shields?: number;
  attacks?: number;
  damage: number;
  damagePerUpgrade: number;
  armor?: number;
  cooldown: number;
  tags: Tag[];
  bonusTag?: Tag;
  bonusDamage?: number;
  bonusDamagePerUpgrade?: number;
  targetsGroundOnly?: boolean;
  targetsAirOnly?: boolean;
}

export interface HitsToKillComparison {
  unit1: Unit;
  unit1UpgradedHits: number;
  unit1RawHits: number;
  unit1RemainingHp: number;
  unit2: Unit;
  unit2UpgradedHits: number;
  unit2RawHits: number;
  unit2RemainingHp: number;
}

export interface TimeToKillComparison {
  unit1: Unit;
  unit1RemainingHp: number;
  unit1RawTime: number;
  unit1UpgradedTime: number;
  unit2: Unit;
  unit2RemainingHp: number;
  unit2RawTime: number;
  unit2UpgradedTime: number;
}

export interface Upgrades {
  armor: number;
  shields: number;
  weapons: number;
  combatShields: boolean;
  chitinousPlating: boolean;
  infernalPreigniter: boolean;
  resonatingGlaives: boolean;
  adrenalGlands: boolean;
  stim: boolean;
  antiArmorMissile: boolean;
  guardianShield: boolean;
  microbialShroud: boolean;
}

export enum Race {
  // All,
  Terran,
  Zerg,
  Protoss
}

export enum Tag {
  Placeholder, // To avoid tags being evaluated as false
  Armored,
  Mechanical,
  Light,
  Biological,
  Flying,
  Massive
}

export interface AssetsConfig {
  attack1: string;
  attack2: string;
  attack3: string;
  armor1: string;
  armor2: string;
  armor3: string;
}
