import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

import matter from 'front-matter';
import { PostComponent } from '@app/components/post/post.component';
import { BlogService } from '@app/services/blog/blog.service';
import { Matter_t } from '@app/types';
import { MessageService } from 'primeng/api';
import { Meta, Title } from '@angular/platform-browser';
import { Post_t } from '@app/models/Posts';
import { toPost } from '@app/shared/utils';

@Component({
  selector: 'nn-posts-page',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, PostComponent],
  templateUrl: './post.page.html',
  styleUrl: './post.page.scss'
})
export class PostPage implements OnInit, OnDestroy {

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

  // urlTree: UrlTree = new UrlTree();

  constructor(public blogService: BlogService,
    public messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const slug: string = params.get('slug')!
      console.log({ params });

      this.blogService
        .getPostBySlug(slug)
        .then((post) => {
          const { attributes, body } = matter(post) as Matter_t
          this.titleService.setTitle(attributes.title);
          this.metaService.addTag({ name: 'author', content: attributes.authors.map((a) => a.name).join(', ') })

          this.post.set(toPost(attributes, body))
        })

    });
  }

  ngOnDestroy(): void {
    this.metaService.removeTag('name="author"')
  }

}
