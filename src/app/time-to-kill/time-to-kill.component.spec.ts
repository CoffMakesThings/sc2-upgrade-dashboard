import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeToKillComponent } from './time-to-kill.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
