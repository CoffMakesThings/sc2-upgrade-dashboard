import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { secondaryUnitConfigs, unitConfigs } from "./units.config";
import { Unit } from "./unit";
import { Upgrades } from "./app.types";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'sc2-upgrade-dashboard' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sc2-upgrade-dashboard');
  });

  it('should calculate', () => {
    const units: Unit[] = unitConfigs.map(u => new Unit(u));
    const secondaryUnits: Unit[] = secondaryUnitConfigs.map(u => new Unit(u));
    const hydralisk: Unit = units.find(u => u.config.name === 'Hydralisk')!;
    const marine: Unit = units.find(u => u.config.name === 'Marine')!;
    const marauder: Unit = units.find(u => u.config.name === 'Marauder')!;
    const roach: Unit = units.find(u => u.config.name === 'Roach')!;
    const vikingFighter: Unit = units.find(u => u.config.name === 'Viking Fighter')!;
    const hellion: Unit = units.find(u => u.config.name === 'Hellion')!;
    const scv: Unit = units.find(u => u.config.name === 'SCV')!;
    const drone: Unit = units.find(u => u.config.name === 'Drone')!;
    const baneling: Unit = units.find(u => u.config.name === 'Baneling')!;
    const zergling: Unit = units.find(u => u.config.name === 'Zergling')!;
    const zealot: Unit = units.find(u => u.config.name === 'Zealot')!;
    const ultralisk: Unit = units.find(u => u.config.name === 'Ultralisk')!;
    const probe: Unit = units.find(u => u.config.name === 'Probe')!;
    const hydra: Unit = units.find(u => u.config.name === 'Hydralisk')!;
    const archon: Unit = units.find(u => u.config.name === 'Archon')!;
    const banshee: Unit = units.find(u => u.config.name === 'Banshee')!;
    const stalker: Unit = units.find(u => u.config.name === 'Stalker')!;
    const tempestAA: Unit = secondaryUnits.find(u => u.config.name === 'Tempest')!;
    const battleCruiser: Unit = units.find(u => u.config.name === 'Battlecruiser')!;
    const corruptor: Unit = units.find(u => u.config.name === 'Corruptor')!;
    const queen: Unit = units.find(u => u.config.name === 'Queen')!;
    const hellbat: Unit = units.find(u => u.config.name === 'Hellbat')!;
    const queenAA: Unit = secondaryUnits.find(u => u.config.name === 'Queen')!;
    const colossus: Unit = units.find(u => u.config.name === 'Colossus')!;

    const upgradesA: Upgrades = {
      armor: 0,
      shields: 0,
      weapons: 0,
      combatShields: false,
      chitinousPlating: false,
      infernalPreigniter: false
    }

    const upgradesB: Upgrades = {
      armor: 0,
      shields: 0,
      weapons: 0,
      combatShields: false,
      chitinousPlating: false,
      infernalPreigniter: false
    }

    // Hydra on Marine
    expect(hydralisk.getRawHits(marine)).toEqual(4);
    upgradesA.weapons = 1;
    expect(hydralisk.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(4);
    upgradesA.weapons = 2;
    expect(hydralisk.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(4);
    upgradesA.weapons = 3;
    expect(hydralisk.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(3);
    upgradesB.combatShields = true;
    expect(hydralisk.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(4);
    upgradesA.weapons = 0;

    // Marauder on Roach
    expect(marauder.getRawHits(roach)).toEqual(8);
    upgradesA.weapons = 1;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(7)
    upgradesA.weapons = 2;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(7)
    upgradesA.weapons = 3;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(6)
    upgradesA.weapons = 0;

    // Viking vs Biking
    expect(vikingFighter.getRawHits(vikingFighter)).toEqual(5);
    upgradesA.weapons = 1;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(5);
    upgradesA.weapons = 2;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(5);
    upgradesA.weapons = 3;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(4);
    upgradesA.weapons = 0;

    // Hellion vs SCV
    expect(hellion.getRawHits(scv)).toEqual(4);
    upgradesA.weapons = 1;
    expect(hellion.getUpgradedHits(scv, upgradesA, upgradesB)).toEqual(3);
    upgradesA.weapons = 0;
    upgradesA.infernalPreigniter = true;
    expect(hellion.getUpgradedHits(scv, upgradesA, upgradesB)).toEqual(3);
    upgradesA.weapons = 2;
    expect(hellion.getUpgradedHits(scv, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 3;
    expect(hellion.getUpgradedHits(scv, upgradesA, upgradesB)).toEqual(2);
    upgradesA.infernalPreigniter = false;
    upgradesA.weapons = 3;
    expect(hellion.getUpgradedHits(scv, upgradesA, upgradesB)).toEqual(3);
    upgradesA.infernalPreigniter = false;
    upgradesA.weapons = 0;

    // Baneling vs Drone
    expect(baneling.getRawHits(drone)).toEqual(2);
    upgradesA.weapons = 1;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 2;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 3;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(1);
    upgradesA.weapons = 0;

    // Baneling vs Zergling
    expect(baneling.getRawHits(zergling)).toEqual(1);
    upgradesB.armor = 1;
    expect(baneling.getUpgradedHits(zergling, upgradesA, upgradesB)).toEqual(2);
    upgradesB.armor = 0;

    // Marine vs Zealot
    expect(marine.getRawHits(zealot)).toEqual(29);

    // Zealot vs Marine
    expect(zealot.getRawHits(marine)).toEqual(3);
    upgradesB.combatShields = true;
    expect(zealot.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(4);
    upgradesB.combatShields = false;

    // Marauder vs Ultralisk
    expect(marauder.getRawHits(ultralisk)).toEqual(28);
    upgradesB.chitinousPlating = true;
    expect(marauder.getUpgradedHits(ultralisk, upgradesA, upgradesB)).toEqual(32);
    upgradesB.chitinousPlating = false;

    // Roach vs Probe
    expect(roach.getRawHits(probe)).toEqual(3);
    upgradesA.weapons = 1;
    expect(roach.getUpgradedHits(probe, upgradesA, upgradesB)).toEqual(3);
    upgradesA.weapons = 2;
    expect(roach.getUpgradedHits(probe, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 0;

    // Hydra vs Archon
    expect(hydra.getRawHits(archon)).toEqual(30);
    upgradesA.weapons = 1;
    expect(hydra.getUpgradedHits(archon, upgradesA, upgradesB)).toEqual(28);
    upgradesA.weapons = 0;
    upgradesB.shields = 1;
    expect(hydra.getUpgradedHits(archon, upgradesA, upgradesB)).toEqual(33);
    upgradesB.shields = 0;

    // Banshee vs Stalker
    expect(banshee.getRawHits(stalker)).toEqual(7);
    upgradesA.weapons = 1;
    expect(banshee.getUpgradedHits(stalker, upgradesA, upgradesB)).toEqual(7);
    upgradesA.weapons = 2;
    expect(banshee.getUpgradedHits(stalker, upgradesA, upgradesB)).toEqual(6);
    upgradesA.weapons = 0;

    // Tempest vs Battlecruiser
    expect(tempestAA.getRawHits(battleCruiser)).toEqual(12);

    // Corruptor vs Battlecruiser
    expect(corruptor.getRawHits(battleCruiser)).toEqual(33);

    // Archon vs Queen
    expect(archon.getRawHits(queen)).toEqual(6);

    // Queen vs Marine
    expect(queen.getRawHits(marine)).toEqual(6);

    // Queen vs Banshee
    expect(queenAA.getRawHits(banshee)).toEqual(16);

    // Colossus vs marine
    expect(colossus.getRawHits(marine)).toEqual(2);
    upgradesB.combatShields = true;
    upgradesB.armor = 2;
    expect(colossus.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(3);
    upgradesB.combatShields = false;
    upgradesB.armor = 0;

    // 3/3 blue flame Hellbat vs 3/3 ling
    upgradesA.weapons = 3;
    upgradesA.armor = 3;
    upgradesB.weapons = 3;
    upgradesB.armor = 3;
    upgradesA.infernalPreigniter = true;
    expect(hellbat.getUpgradedHits(zergling, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 0;
    upgradesA.armor = 0;
    upgradesB.weapons = 0;
    upgradesB.armor = 0;
    upgradesA.infernalPreigniter = false;
  });
});
