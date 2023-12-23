import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { AssetsConfig, Race, HitsToKillComparison, Upgrades } from "../app.types";
import { secondaryUnitConfigs, unitConfigs } from "../units.config";
import { Unit } from "../unit";
import { NgClass, NgForOf, NgIf, NgTemplateOutlet } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { protossAssetsConfig, terranAssetsConfig, zergAssetsConfig } from "../asset.config";
import { MatTabsModule } from "@angular/material/tabs";
import { HitsToKillComponent } from "../hits-to-kill/hits-to-kill.component";
import { TimeToKillComponent } from "../time-to-kill/time-to-kill.component";
import { CostEffectivenessComponent } from "../cost-effectiveness/cost-effectiveness.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    NgClass,
    NgIf,
    NgForOf,
    MatTooltipModule,
    MatTabsModule,
    NgTemplateOutlet,
    HitsToKillComponent,
    TimeToKillComponent,
    CostEffectivenessComponent,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @ViewChild('hitsToKill', { static: false }) hitsToKillComponent!: HitsToKillComponent;
  @ViewChild('timeToKill', { static: false }) timeToKillComponent!: TimeToKillComponent;

  @Input() darkMode: boolean = false;
  @Output() darkModeEmitter: EventEmitter<void> = new EventEmitter<void>();

  mode: 'HitsToKill' | 'TimeToKill' | 'CostEffectiveness' = 'HitsToKill';
  units: Unit[] = unitConfigs.map(config => new Unit(config));
  defaultUnits: string[] = ['Marine', 'Marauder', 'Zealot', 'Stalker', 'Zergling', 'Roach']

  raceA: Race = Race.Terran;
  raceB: Race = Race.Zerg;

  assetsConfigA: AssetsConfig = terranAssetsConfig;
  assetsConfigB: AssetsConfig = zergAssetsConfig;

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
  }

  refresh(): void {
    if (this.hitsToKillComponent) this.hitsToKillComponent.refresh();
    if (this.timeToKillComponent) this.timeToKillComponent.refresh();
  }

  onRaceAClick(race: Race): void {
    this.raceA = race;

    switch(race) {
      case Race.Terran:
        this.assetsConfigA = terranAssetsConfig;
        break;
      case Race.Zerg:
        this.assetsConfigA = zergAssetsConfig;
        break;
      case Race.Protoss:
        this.assetsConfigA = protossAssetsConfig;
    }

    this.refresh();
  }

  onRaceBClick(race: Race): void {
    this.raceB = race;

    switch(race) {
      case Race.Terran:
        this.assetsConfigB = terranAssetsConfig;
        break;
      case Race.Zerg:
        this.assetsConfigB = zergAssetsConfig;
        break;
      case Race.Protoss:
        this.assetsConfigB = protossAssetsConfig;
    }

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

  onCombatShieldsClick(upgrades: Upgrades): void {
    upgrades.combatShields = !upgrades.combatShields;

    this.refresh();
  }

  onChitinousPlatingClick(upgrades: Upgrades): void {
    upgrades.chitinousPlating = !upgrades.chitinousPlating;

    this.refresh();
  }

  onInfernalPreigniterClick(upgrades: Upgrades): void {
    upgrades.infernalPreigniter = !upgrades.infernalPreigniter;

    this.refresh();
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

  onTabChange(index: number): void {
    switch (index) {
      case 0:
        this.mode = 'HitsToKill';
        break;
      case 1:
        this.mode = 'TimeToKill';
        break;
      case 2:
        this.mode = 'CostEffectiveness';
    }
  }
}
