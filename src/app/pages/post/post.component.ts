import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from 'ngx-markdown';

import matter from 'front-matter';
import { CardComponent } from '@app/components/card/card.component';
import { BlogService } from '@app/services/blog/blog.service';
import { Matter_t, Post_t } from '@app/types';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'nn-post',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, CardComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {

  post = signal<Post_t>({
    title: '',
    cover: '',
    chips: [],
    authors: [],
    summary: '',
    content: ''
  });

  // urlTree: UrlTree = new UrlTree();

  constructor(public blogService: BlogService,
    public messageService: MessageService,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const postId: number = parseInt(params.get('id')!)
      this.blogService
        .getPostById(postId)
        .then((post) => {
          const { attributes, body } = matter(post) as Matter_t
          this.post.set({
            title: attributes.title,
            authors: attributes.authors,
            cover: attributes.cover,
            chips: attributes.chips,
            summary: attributes.summary,
            content: body
          })
        })
        .catch(error => {
          console.log(error)
          if (error.status === 404) {
            this.messageService.add({
              severity: 'error',
              summary: 'Page not found',
              detail: `Error, page ${postId} not found`
            });
          }
          this.default()
        });
    });
  }


  private default() {
    this.blogService
      .getPostByFilename('template.md')
      .then((post) => {
        const { attributes, body } = matter(post) as Matter_t
        this.post.set({
          title: attributes.title,
          authors: attributes.authors,
          cover: attributes.cover,
          chips: attributes.chips,
          summary: attributes.summary,
          content: body
        })
      })
  }
}
