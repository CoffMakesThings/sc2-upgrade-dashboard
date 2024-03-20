import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsToKillComponent } from './hits-to-kill.component';
import { Unit } from "../unit";
import { unitConfigs } from "../units.config";

describe('HitsToKillComponent', () => {
  let component: HitsToKillComponent;
  let fixture: ComponentFixture<HitsToKillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HitsToKillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitsToKillComponent);
    component = fixture.componentInstance;
    component.units = unitConfigs.map(config => new Unit(config));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
