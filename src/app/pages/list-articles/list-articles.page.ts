import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

import { BlogService } from '@app/services/blog/blog.service';
import { FileBlog_t, Post_t } from '@app/types';

@Component({
  selector: 'nn-list-articles',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink, CardModule, SkeletonModule],
  templateUrl: './list-articles.page.html',
  styleUrl: './list-articles.page.scss'
})
export class ListArticlesPage implements OnInit {
  listArticles_signal = signal<FileBlog_t[]>([])
  listArticlesMatter_signal = signal<Post_t[]>([])


  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getListPosts().then(
      async (info_blog) => {
        this.listArticles_signal.set(info_blog.data)

        for (const { filename } of info_blog.data) {
          const postMatter = await this.blogService.getPostMatterByFilename(filename)

          this.listArticlesMatter_signal.update((values) => {
            return [...values, postMatter];
          });
        }

      });


  }
}
