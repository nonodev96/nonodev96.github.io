import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutArticle } from './layout-article.component';

describe('ArticleComponent', () => {
  let component: LayoutArticle;
  let fixture: ComponentFixture<LayoutArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutArticle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
