import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DecimalPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { Race, HitsToKillComparison, Upgrades, TimeToKillComparison } from "../app.types";
import { Unit } from "../unit";
import { secondaryUnitConfigs } from "../units.config";

@Component({
  selector: 'app-time-to-kill',
  standalone: true,
  imports: [
    MatTableModule,
    MatTooltipModule,
    NgForOf,
    NgIf,
    NgClass,
    DecimalPipe
  ],
  templateUrl: './time-to-kill.component.html',
  styleUrl: './time-to-kill.component.scss'
})
export class TimeToKillComponent implements OnInit {
  @Input() upgradesA!: Upgrades;
  @Input() upgradesB!: Upgrades;
  @Input() units!: Unit[];
  @Input() raceA!: Race;
  @Input() raceB!: Race;

  dataSource: TimeToKillComparison[] = [];
  displayedColumns: string[] = [ "unit1Bar", "unit1Time", "unit1Name", "unit2Name", "unit2Time", "unit2Bar" ]
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

        const unitComparison: TimeToKillComparison = {
          unit1: unit1,
          unit1RemainingHp: 0,
          unit1RawTime: unit1.getRawTime(unit2),
          unit1UpgradedTime: unit1.getUpgradedTime(unit2, this.upgradesA, this.upgradesB),
          unit2: unit2,
          unit2RemainingHp: 0,
          unit2RawTime: unit2.getRawTime(unit1),
          unit2UpgradedTime: unit2.getUpgradedTime(unit1, this.upgradesB, this.upgradesA)
        }

        this.dataSource.push(unitComparison);
      }
    }
  }

  getUnitsOfRace(race: Race): Unit[] {
    return this.units.filter((u: Unit) => u.config.race === race)
  }

  getPercentDiff(a: number, b: number): number {
    return (Math.abs(a - b) / a) * 100;
  }
}
