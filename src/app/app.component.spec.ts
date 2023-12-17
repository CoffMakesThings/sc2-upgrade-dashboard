import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { unitConfigs } from "./units.config";
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

    // Hydra on marine
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

    // Marauder on roach
    expect(marauder.getRawHits(roach)).toEqual(8);
    upgradesA.weapons = 1;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(7)
    upgradesA.weapons = 2;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(7)
    upgradesA.weapons = 3;
    expect(marauder.getUpgradedHits(roach, upgradesA, upgradesB)).toEqual(6)
    upgradesA.weapons = 0;

    // Viking vs viking
    expect(vikingFighter.getRawHits(vikingFighter)).toEqual(5);
    upgradesA.weapons = 1;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(5);
    upgradesA.weapons = 2;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(5);
    upgradesA.weapons = 3;
    expect(vikingFighter.getUpgradedHits(vikingFighter, upgradesA, upgradesB)).toEqual(4);
    upgradesA.weapons = 0;

    // Hellion vs scv
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

    // Baneling vs drone
    expect(baneling.getRawHits(drone)).toEqual(2);
    upgradesA.weapons = 1;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 2;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 3;
    expect(baneling.getUpgradedHits(drone, upgradesA, upgradesB)).toEqual(1);
    upgradesA.weapons = 0;

    // Baneling vs zergling
    expect(baneling.getRawHits(zergling)).toEqual(1);
    upgradesB.armor = 1;
    expect(baneling.getUpgradedHits(zergling, upgradesA, upgradesB)).toEqual(2);
    upgradesB.armor = 0;

    // Marine vs zealot
    expect(marine.getRawHits(zealot)).toEqual(29);

    // Zealot vs marine
    expect(zealot.getRawHits(marine)).toEqual(3);
    upgradesB.combatShields = true;
    expect(zealot.getUpgradedHits(marine, upgradesA, upgradesB)).toEqual(4);
    upgradesB.combatShields = false;

    // Marauder vs ultralisk
    expect(marauder.getRawHits(ultralisk)).toEqual(28);
    upgradesB.chitinousPlating = true;
    expect(marauder.getUpgradedHits(ultralisk, upgradesA, upgradesB)).toEqual(32);
    upgradesB.chitinousPlating = false;

    // Roach vs probe
    expect(roach.getRawHits(probe)).toEqual(3);
    upgradesA.weapons = 1;
    expect(roach.getUpgradedHits(probe, upgradesA, upgradesB)).toEqual(3);
    upgradesA.weapons = 2;
    expect(roach.getUpgradedHits(probe, upgradesA, upgradesB)).toEqual(2);
    upgradesA.weapons = 0;

    // Hydra vs archon
    expect(hydra.getRawHits(archon)).toEqual(30);
    upgradesA.weapons = 1;
    expect(hydra.getUpgradedHits(archon, upgradesA, upgradesB)).toEqual(28);
    upgradesA.weapons = 0;
    upgradesB.shields = 1;
    expect(hydra.getUpgradedHits(archon, upgradesA, upgradesB)).toEqual(33);
    // expect(roach.getUpgradedHits(probe, upgradesA, upgradesB)).toEqual(2);
    // upgradesA.weapons = 0;
  });
});
