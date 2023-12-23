import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEffectivenessComponent } from './cost-effectiveness.component';

describe('CostEffectivenessComponent', () => {
  let component: CostEffectivenessComponent;
  let fixture: ComponentFixture<CostEffectivenessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostEffectivenessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
