import {
  Component,
  type OnInit,
  computed,
  inject,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import type { SelectItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DataViewModule } from 'primeng/dataview';
import { type DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { BlogService } from '@app/services/blog/blog.service';
import type { Post_t } from '@app/models/Posts';
import { EchartComponent } from '@app/components/echart/echart.component';
@Component({
  selector: 'nn-list-articles',
  standalone: true,
  templateUrl: './list-articles.page.html',
  styleUrl: './list-articles.page.scss',
  imports: [
    CommonModule,
    ButtonModule,
    MultiSelectModule,
    RouterLink,
    CardModule,
    RippleModule,
    SkeletonModule,
    DataViewModule,
    DropdownModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    ChipModule,
    InputTextModule,
    FormsModule,
    EchartComponent
  ]
})
export class ListArticlesPage implements OnInit {
  private titleService = inject(Title);
  private blogService = inject(BlogService);

  listArticlesMatter_signal = signal<Post_t[]>([]);
  searchQuery = signal<string>('');

  items = computed<Post_t[]>(() => {
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: <explanation>
    const normalizeString = (str: string) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    const sq = normalizeString(this.searchQuery().toLowerCase());
    const articles = this.listArticlesMatter_signal();
    const filteredByTitle = articles.filter((article) => {
      return normalizeString(article.title.toLowerCase()).includes(sq);
    });
    const filteredByKeywords = articles.filter((article) => {
      return article.keywords.some((keyword) =>
        normalizeString(keyword.toLowerCase()).includes(sq)
      );
    });
    const combinedResults = [...filteredByTitle, ...filteredByKeywords];
    const uniqueSet = new Set(combinedResults.map((article) => article.postId));
    const uniqueResults = [...uniqueSet].map((postId) =>
      combinedResults.find((article) => article.postId === postId)
    ) as Post_t[];

    return uniqueResults;
  });

  sortOptions: SelectItem[] = [
    { label: 'Post ID ascending', value: 'postId' },
    { label: 'Post ID descending', value: '!postId' },
    { label: 'Title ascending', value: 'title' },
    { label: 'Title descending', value: '!title' }
  ];
  sortOrder = 0;
  sortField = '';
  layout: 'list' | 'grid' = 'list';
  search = '';

  ngOnInit(): void {
    this.titleService.setTitle('Artículos de programación');

    this.blogService.getAllPosts().subscribe(async (posts: Post_t[]) => {
      console.log('posts', posts);
      for (const { refId } of posts) {
        if (refId) {
          const t = await this.blogService.getPostsByRefId(refId);
          console.log(t);
        }
      }
    });

    this.blogService.getListPosts().then(async (info_blog) => {
      for (const { filename } of info_blog.data) {
        const postMatter =
          await this.blogService.getPostMatterByFilename(filename);

        this.listArticlesMatter_signal.update((values) => {
          return [...values, postMatter];
        });
      }
    });
  }

  onSortChange(event: DropdownChangeEvent) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
  }
}
