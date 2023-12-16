import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMainComponent } from './layout-main.component';

describe('MainLayoutComponent', () => {
  let component: LayoutMainComponent;
  let fixture: ComponentFixture<LayoutMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
