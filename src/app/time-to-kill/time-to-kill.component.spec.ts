import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeToKillComponent } from './time-to-kill.component';
import { unitConfigs } from "../units.config";
import { Unit } from "../unit";

describe('TimeToKillComponent', () => {
  let component: TimeToKillComponent;
  let fixture: ComponentFixture<TimeToKillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeToKillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeToKillComponent);
    component = fixture.componentInstance;
    component.units = unitConfigs.map(config => new Unit(config));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
