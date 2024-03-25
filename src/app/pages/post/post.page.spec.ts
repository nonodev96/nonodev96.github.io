import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPage } from './post.page';

describe('PostComponent', () => {
  let component: PostPage;
  let fixture: ComponentFixture<PostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
