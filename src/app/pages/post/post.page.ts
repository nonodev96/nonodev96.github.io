import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

import matter from 'front-matter';
import { PostComponent } from '@app/components/post/post.component';
import { BlogService } from '@app/services/blog/blog.service';
import { Matter_t, Post_t } from '@app/types';
import { MessageService } from 'primeng/api';
import { Meta, Title } from '@angular/platform-browser';

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
      const postId: number = parseInt(params.get('id')!)
      this.blogService
        .getPostById(postId)
        .then((post) => {
          const { attributes, body } = matter(post) as Matter_t
          this.titleService.setTitle(attributes.title);
          this.metaService.addTag({ name: 'author', content: attributes.authors.map((a) => a.name).join(', ') })

          this.post.set({
            postId: attributes.postId,
            filename: attributes.filename,
            title: attributes.title,
            authors: attributes.authors,
            cover: attributes.cover,
            categories: attributes.categories,
            keywords: attributes.keywords,
            chips: attributes.chips,
            summary: attributes.summary,
            content: body
          })
        })

    });
  }

  ngOnDestroy(): void {
    this.metaService.removeTag('name="author"')
  }

}
