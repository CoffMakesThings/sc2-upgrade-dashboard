import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { Race, UnitComparison, Upgrades } from "../app.types";
import { Unit } from "../unit";
import { secondaryUnitConfigs } from "../units.config";

@Component({
  selector: 'app-hits-to-kill',
  standalone: true,
  imports: [
    MatTableModule,
    MatTooltipModule,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './hits-to-kill.component.html',
  styleUrl: './hits-to-kill.component.scss'
})
export class HitsToKillComponent implements OnInit {
  @Input() upgradesA!: Upgrades;
  @Input() upgradesB!: Upgrades;
  @Input() units!: Unit[];
  @Input() raceA!: Race;
  @Input() raceB!: Race;

  dataSource: UnitComparison[] = [];
  displayedColumns: string[] = [ "unit1Bar", "unit1Hits", "unit1Name", "unit2Name", "unit2Hits", "unit2Bar" ]
  secondaryUnits: Unit[] = secondaryUnitConfigs.map(config => new Unit(config));

  ngOnInit(): void {
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

  getUnitsOfRace(race: Race): Unit[] {
    return this.units.filter((u: Unit) => u.config.race === race)
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
}
