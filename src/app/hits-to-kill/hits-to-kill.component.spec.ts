import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitsToKillComponent } from './hits-to-kill.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
