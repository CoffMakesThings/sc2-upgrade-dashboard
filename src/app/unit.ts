import { Tag, UnitConfig, Upgrades } from "./app.types";

export class Unit {
  enabledForA: boolean = true;
  enabledForB: boolean = true;
  readonly minimumDamage: number = 0.5;

  constructor(public config: UnitConfig) {
  }

  getUpgradedHits(target: Unit, ownUpgrades: Upgrades, opposingUpgrades: Upgrades): number {
    let hp: number = target.getHp(opposingUpgrades);
    let shields: number = target.getShields();
    let hits: number = 0;

    while (shields > 0) {
      const damage: number = Math.max(this.minimumDamage, this.getUpgradedDamage(ownUpgrades, target) - opposingUpgrades.shields * this.getAttacks());
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(this.minimumDamage, Math.abs(shields) - target.getUpgradedArmor(opposingUpgrades) * this.getAttacks());
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(this.minimumDamage, this.getUpgradedDamage(ownUpgrades, target) - target.getUpgradedArmor(opposingUpgrades) * this.getAttacks());
      hp -= damage;
      hits += 1;
    }

    return hits;
  }

  getRawCooldown(): number {
    return this.config.cooldown;
  }

  getUpgradedCooldown(upgrades: Upgrades): number {
    if (upgrades.resonatingGlaives && this.config.name === 'Adept') {
      return this.config.cooldown - this.config.cooldown * 0.45;
    }
    if (upgrades.adrenalGlands && this.config.name === 'Zergling') {
      return this.config.cooldown - 0.15;
    }
    return this.config.cooldown;
  }

  getRawTime(target: Unit): number {
    return this.getRawHits(target) * this.getRawCooldown();
  }

  getUpgradedTime(target: Unit, ownUpgrades: Upgrades, targetUpgrades: Upgrades): number {
    return this.getUpgradedHits(target, ownUpgrades, targetUpgrades) * this.getUpgradedCooldown(ownUpgrades);
  }

  getRawHits(target: Unit): number {
    let hp: number = target.config.hp;
    let shields: number = target.getShields();
    let hits: number = 0;

    while (shields > 0) {
      const damage: number = Math.max(this.minimumDamage, this.getRawDamage(target));
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(this.minimumDamage, Math.abs(shields));
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(this.minimumDamage, this.getRawDamage(target) - target.getRawArmor() * this.getAttacks());
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
