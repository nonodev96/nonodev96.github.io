import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutArticleComponent } from './layout-article.component';

describe('ArticleComponent', () => {
  let component: LayoutArticleComponent;
  let fixture: ComponentFixture<LayoutArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
