import { Tag, UnitConfig, Upgrades } from "./app.types";

export class Unit {
  enabledForA: boolean = true;
  enabledForB: boolean = true;

  constructor(public config: UnitConfig) {
  }

  getUpgradedHits(target: Unit, ownUpgrades: Upgrades, opposingUpgrades: Upgrades): number {
    let hp: number = target.getHp(opposingUpgrades);
    let shields: number = target.getShields();
    let hits: number = 0;

    while (shields > 0) {
      const damage: number = Math.max(1, this.getUpgradedDamage(ownUpgrades, target) - opposingUpgrades.shields);
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(1, Math.abs(shields) - target.getUpgradedArmor(opposingUpgrades));
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(1, this.getUpgradedDamage(ownUpgrades, target) - target.getUpgradedArmor(opposingUpgrades));
      hp -= damage;
      hits += 1;
    }

    return hits;
  }

  getRawHits(target: Unit): number {
    let hp: number = target.config.hp;
    let shields: number = target.getShields();
    let hits: number = 0;

    while (shields > 0) {
      const damage: number = Math.max(1, this.getRawDamage(target));
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(1, Math.abs(shields) - target.getRawArmor());
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(1, this.getRawDamage(target) - target.getRawArmor());
      hp -= damage;
      hits += 1;
    }

    return hits;
  }

  getUpgradedArmor(ownUpgrades: Upgrades): number {
    if (this.config.name === 'Ultralisk') {
      if (ownUpgrades.chitinousPlating) {
        return this.getRawArmor() + ownUpgrades.armor + 2;
      }
    }
    return this.getRawArmor() + ownUpgrades.armor;
  }

  getRawArmor(): number {
    return this.config.armor ? this.config.armor : 0;
  }

  getShields(): number {
    return this.config.shields ? this.config.shields : 0;
  }

  getUpgradedDamage(upgrades: Upgrades, target: Unit): number {
    let damage: number = this.config.damage + this.config.damagePerUpgrade * upgrades.weapons;
    if (this.config.bonusTag) {
      if (target.config.tags.includes(this.config.bonusTag)) {
        damage += this.config.bonusDamage! + this.config.bonusDamagePerUpgrade! * upgrades.weapons;
      }
    }
    if (this.config.name === 'Hellion') {
      if (upgrades.infernalPreigniter && target.config.tags.includes(Tag.Light)) {
        damage += 5;
      }
    }
    if (this.config.name === 'Hellbat') {
      if (upgrades.infernalPreigniter && target.config.tags.includes(Tag.Light)) {
        damage += 12;
      }
    }

    return damage * this.getAttacks();
  }

  getRawDamage(target: Unit): number {
    let damage: number = this.config.damage;
    if (this.config.bonusTag) {
      if (target.config.tags.includes(this.config.bonusTag)) {
        damage += this.config.bonusDamage!;
      }
    }

    return damage * this.getAttacks();
  }

  getAttacks(): number {
    return this.config.attacks ? this.config.attacks : 1;
  }

  getHp(upgrades: Upgrades): number {
    if (this.config.name === 'Marine') {
      return this.config.hp + (upgrades.combatShields ? 10 : 0);
    }

    return this.config.hp;
  }

  canAttack(target: Unit): boolean {
    if (this.config.targetsGroundOnly && target.config.tags.includes(Tag.Flying)) {
      return false;
    }

    if (this.config.targetsAirOnly && !target.config.tags.includes(Tag.Flying)) {
      return false;
    }

    return true;
  }
}
