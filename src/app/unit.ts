import { UnitConfig, Upgrades } from "./app.types";

export class Unit {
  enabledForA: boolean = true;
  enabledForB: boolean = true;

  constructor(public config: UnitConfig) {
  }

  getTooltip(ownUpgrades: Upgrades): string {
    return `${ this.config.name }\nHP: ${ this.getHp(ownUpgrades) }\nDamage: ${ this.getUpgradedDamage(ownUpgrades) }\nClick to focus`;
  }

  getUpgradedHits(target: Unit, ownUpgrades: Upgrades, opposingUpgrades: Upgrades): number {
    let hp: number = target.getHp(opposingUpgrades);
    let shields: number = target.getShields();
    let hits: number = 0;

    while (shields > 0) {
      const damage: number = Math.max(1, this.getUpgradedDamage(ownUpgrades) - opposingUpgrades.shields);
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(1, Math.abs(shields) - target.getUpgradedArmor(opposingUpgrades));
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(1, this.getUpgradedDamage(ownUpgrades) - target.getUpgradedArmor(opposingUpgrades));
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
      const damage: number = Math.max(1, this.getRawDamage());
      shields -= damage;
      hits += 1;
    }

    if (shields < 0) {
      const damage: number = Math.max(1, Math.abs(shields) - target.getRawArmor());
      hp -= damage;
    }

    while (hp > 0) {
      const damage: number = Math.max(1, this.getRawDamage() - target.getRawArmor());
      hp -= damage;
      hits += 1;
    }

    return hits;
  }

  getUpgradedArmor(ownUpgrades: Upgrades): number {
    return this.getRawArmor() + ownUpgrades.armor;
  }

  getRawArmor(): number {
    return this.config.armor ? this.config.armor : 0;
  }

  getShields(): number {
    return this.config.shields ? this.config.shields : 0;
  }

  getUpgradedDamage(upgrades: Upgrades): number {
    return (this.config.damage * this.getAttacks()) + (this.getAttacks() * this.config.damagePerUpgrade * upgrades.weapons);
  }

  getRawDamage(): number {
    return this.config.damage * this.getAttacks();
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
}
