import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { Race, UnitComparison, Upgrades } from "../app.types";
import { secondaryUnitConfigs, unitConfigs } from "../units.config";
import { Unit } from "../unit";
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    NgClass,
    NgIf,
    NgForOf,
    MatTooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @Input() darkMode: boolean = false;
  @Output() darkModeEmitter: EventEmitter<void> = new EventEmitter<void>();

  dataSource: UnitComparison[] = [];
  displayedColumns: string[] = [ "unit1Bar", "unit1Hits", "unit1Name", "unit2Name", "unit2Hits", "unit2Bar" ]
  units: Unit[] = unitConfigs.map(config => new Unit(config));
  secondaryUnits: Unit[] = secondaryUnitConfigs.map(config => new Unit(config));
  defaultUnits: string[] = ['Marine', 'Marauder', 'Zealot', 'Stalker', 'Zergling', 'Roach']

  raceA: Race = Race.Terran;
  raceB: Race = Race.Zerg;
  upgradesA: Upgrades = {
    armor: 0,
    shields: 0,
    weapons: 0,
    combatShields: false,
    chitinousPlating: false,
    infernalPreigniter: false
  };

  upgradesB: Upgrades = {
    armor: 0,
    shields: 0,
    weapons: 0,
    combatShields: false,
    chitinousPlating: false,
    infernalPreigniter: false
  };

  protected readonly Race = Race;

  ngOnInit(): void {
    this.units.forEach(u => {
      u.enabledForA = false;
      u.enabledForB = false;
    });

    this.units.filter(u => this.defaultUnits.includes(u.config.name)).forEach(u => {
      u.enabledForA = true;
      u.enabledForB = true;
    })

    this.refresh();
  }

  refresh(): void {
    this.dataSource = [];

    for (let unit1 of this.getUnitsOfRace(this.raceA).filter(u => u.enabledForA)) {
      for (let unit2 of this.getUnitsOfRace(this.raceB).filter(u => u.enabledForB)) {
        if (!unit1.canAttack(unit2) && this.secondaryUnits.find(u => u.config.name === unit1.config.name)) {
          unit1 = this.secondaryUnits.find(u => u.config.name === unit1.config.name)!;
        }

        if (!unit2.canAttack(unit1) && this.secondaryUnits.find(u => u.config.name === unit2.config.name)) {
          unit2 = this.secondaryUnits.find(u => u.config.name === unit2.config.name)!;
        }

        if (!unit1.canAttack(unit2) && !unit2.canAttack(unit1)) continue;

        const unitComparison: UnitComparison = {
          unit1: unit1,
          unit1UpgradedHits: unit1.getUpgradedHits(unit2, this.upgradesA, this.upgradesB),
          unit1RawHits: unit1.getRawHits(unit2),
          unit1RemainingHp: 0,
          unit1Time: 0,
          unit2: unit2,
          unit2UpgradedHits: unit2.getUpgradedHits(unit1, this.upgradesB, this.upgradesA),
          unit2RawHits: unit2.getRawHits(unit1),
          unit2RemainingHp: 0,
          unit2Time: 0
        }

        this.dataSource.push(unitComparison);
      }
    }
  }

  onRaceAClick(race: Race): void {
    this.raceA = race;

    this.refresh();
  }

  onRaceBClick(race: Race): void {
    this.raceB = race;

    this.refresh();
  }

  onWeaponClick(level: number, upgrades: Upgrades): void {
    if (upgrades.weapons == level) {
      upgrades.weapons = 0;
    } else {
      upgrades.weapons = level;
    }

    this.refresh();
  }

  onArmorClick(level: number, upgrades: Upgrades): void {
    if (upgrades.armor == level) {
      upgrades.armor = 0;
    } else {
      upgrades.armor = level;
    }

    this.refresh();
  }

  onShieldsClick(level: number, upgrades: Upgrades): void {
    if (upgrades.shields == level) {
      upgrades.shields = 0;
    } else {
      upgrades.shields = level;
    }

    this.refresh();
  }

  onCombatShieldsAClick(): void {
    this.upgradesA.combatShields = !this.upgradesA.combatShields;

    this.refresh();
  }

  onCombatShieldsBClick(): void {
    this.upgradesB.combatShields = !this.upgradesB.combatShields;

    this.refresh();
  }

  onChitinousPlatingAClick(): void {
    this.upgradesA.chitinousPlating = !this.upgradesA.chitinousPlating;

    this.refresh();
  }

  onChitinousPlatingBClick(): void {
    this.upgradesB.chitinousPlating = !this.upgradesB.chitinousPlating;

    this.refresh();
  }

  onInfernalPreigniterAClick(): void {
    this.upgradesA.infernalPreigniter = !this.upgradesA.infernalPreigniter;

    this.refresh();
  }

  onInfernalPreigniterBClick(): void {
    this.upgradesB.infernalPreigniter = !this.upgradesB.infernalPreigniter;

    this.refresh();
  }

  getBarCount(unitComparison: UnitComparison): number {
    return Math.max(unitComparison.unit1RawHits, unitComparison.unit1UpgradedHits);
  }

  getRatio(unitComparison: UnitComparison): number {
    if (unitComparison.unit1RawHits < unitComparison.unit1UpgradedHits) {
      return unitComparison.unit1RawHits / unitComparison.unit1UpgradedHits * 100;
    }
    return unitComparison.unit1UpgradedHits / unitComparison.unit1RawHits * 100;
  }

  getRatio2(unitComparison: UnitComparison): number {
    if (unitComparison.unit2RawHits < unitComparison.unit2UpgradedHits) {
      return unitComparison.unit2RawHits / unitComparison.unit2UpgradedHits * 100;
    }
    return unitComparison.unit2UpgradedHits / unitComparison.unit2RawHits * 100;
  }

  getBarCount2(unitComparison: UnitComparison): number {
    return Math.max(unitComparison.unit2RawHits, unitComparison.unit2UpgradedHits);
  }

  onToggleUnitA(unit: Unit): void {
    unit.enabledForA = !unit.enabledForA;
    this.refresh();
  }

  onToggleUnitB(unit: Unit): void {
    unit.enabledForB = !unit.enabledForB;
    this.refresh();
  }

  getUnitsOfRace(race: Race): Unit[] {
    return this.units.filter((u: Unit) => u.config.race === race)
  }
}
