import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartComponent } from './echart.component';

describe('EchartComponent', () => {
  let component: EchartComponent;
  let fixture: ComponentFixture<EchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
