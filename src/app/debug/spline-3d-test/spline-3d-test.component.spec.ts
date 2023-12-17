import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spline3dTestComponent } from './spline-3d-test.component';

describe('Spline3DTestComponent', () => {
  let component: Spline3dTestComponent;
  let fixture: ComponentFixture<Spline3dTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spline3dTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spline3dTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
