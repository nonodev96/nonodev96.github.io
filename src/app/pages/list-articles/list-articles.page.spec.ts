import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArticlesPage } from './list-articles.page';

describe('ListArticlesComponent', () => {
  let component: ListArticlesPage;
  let fixture: ComponentFixture<ListArticlesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArticlesPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
