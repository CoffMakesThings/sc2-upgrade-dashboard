import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { Race, UnitComparison, Upgrades } from "../app.types";
import { unitConfigs } from "../units.config";
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
  displayedColumns: string[] = [ "unit1Bar", "unit1Name", "unit1Hits", "unit2Hits", "unit2Name", "unit2Bar" ]
  units: Unit[] = unitConfigs.map(config => new Unit(config));

  raceA: Race = Race.Terran;
  raceB: Race = Race.Protoss;
  unitAUpgrades: Upgrades = {
    armor: 0,
    shields: 0,
    weapons: 0,
    combatShields: false,
    chitinousPlating: false
  };

  unitBUpgrades: Upgrades = {
    armor: 0,
    shields: 0,
    weapons: 0,
    combatShields: false,
    chitinousPlating: false
  };

  protected readonly Race = Race;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.dataSource = [];

    for (let unit1 of this.getUnitsOfRace(this.raceA).filter(u => u.enabledForA)) {
      for (let unit2 of this.getUnitsOfRace(this.raceB).filter(u => u.enabledForB)) {
        const unitComparison: UnitComparison = {
          unit1: unit1,
          unit1UpgradedHits: unit1.getUpgradedHits(unit2, this.unitAUpgrades, this.unitBUpgrades),
          unit1RawHits: unit1.getRawHits(unit2),
          unit1RemainingHp: 0,
          unit1Time: 0,
          unit2: unit2,
          unit2UpgradedHits: unit2.getUpgradedHits(unit1, this.unitBUpgrades, this.unitAUpgrades),
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
    this.unitAUpgrades.combatShields = !this.unitAUpgrades.combatShields;

    this.refresh();
  }

  onChitinousPlatingAClick(): void {
    this.unitAUpgrades.chitinousPlating = !this.unitAUpgrades.chitinousPlating;

    this.refresh();
  }

  getBarCount(unitComparison: UnitComparison): number {
    return Math.max(unitComparison.unit1RawHits, unitComparison.unit1UpgradedHits);
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
