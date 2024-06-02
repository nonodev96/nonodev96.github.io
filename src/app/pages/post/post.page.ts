import {
  Component,
  type OnDestroy,
  type OnInit,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MarkdownComponent } from 'ngx-markdown';

import matter from 'front-matter';
import { PostComponent } from '@app/components/post/post.component';
import { BlogService } from '@app/services/blog/blog.service';
import type { Matter_t } from '@app/types';
import { MessageService } from 'primeng/api';
import { toPost } from '@app/shared/utils';

import type { Post_t } from '@app/models/Posts';

@Component({
  selector: 'nn-posts-page',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, PostComponent],
  templateUrl: './post.page.html',
  styleUrl: './post.page.scss'
})
export class PostPage implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  public messageService = inject(MessageService);
  public blogService = inject(BlogService);

  post = signal<Post_t>({
    postId: 0,
    slug: '',
    filename: '',
    title: '',
    cover: '',
    chips: [],
    keywords: [],
    categories: [],
    authors: [],
    summary: '',
    content: ''
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.blogService.getPostBySlug(slug).then((post) => {
          const { attributes, body } = matter(post) as Matter_t;
          this.titleService.setTitle(attributes.title);
          this.metaService.addTag({
            name: 'author',
            content: attributes.authors.map((a) => a.name).join(', ')
          });
          this.post.set(toPost(attributes, body));
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.metaService.removeTag('name="author"');
  }
}
