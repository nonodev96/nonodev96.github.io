import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';

import { SelectItem } from 'primeng/api';

import { BlogService } from '@app/services/blog/blog.service';
import { FileBlog_t, Post_t } from '@app/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'nn-list-articles',
  standalone: true,
  imports: [CommonModule, ButtonModule, MultiSelectModule, RouterLink, CardModule, RippleModule, SkeletonModule, DataViewModule, DropdownModule, TagModule, ChipModule, InputTextModule, FormsModule],
  templateUrl: './list-articles.page.html',
  styleUrl: './list-articles.page.scss',
  // encapsulation: ViewEncapsulation.None
})
export class ListArticlesPage implements OnInit {
  listArticles_signal = signal<FileBlog_t[]>([])
  listArticlesMatter_signal = signal<Post_t[]>([])
  colors: string[] = ['#56ccf2', '#11998e', '#ec008c', '#eab308', '#f97316', '#d1d5db']


  sortOptions: SelectItem[] = [
    { label: 'Title descending', value: '!title' },
    { label: 'Title ascending', value: 'title' }
  ];

  sortOrder!: number;
  sortField!: string;
  layout: 'list' | 'grid' = 'list';
  search: string = ''

  allKeywords: WritableSignal<{ name: string }[]> = signal([]);
  selectedKeywords: WritableSignal<{ name: string }[]> = signal([])


  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    const allKeywordsMap = new Map<string, { name: string }>()
    this.blogService.getListPosts().then(
      async (info_blog) => {
        this.listArticles_signal.set(info_blog.data)


        for (const { filename } of info_blog.data) {
          const postMatter = await this.blogService.getPostMatterByFilename(filename)
          postMatter.keywords.forEach((keyword) => allKeywordsMap.set(keyword, { name: keyword }))

          this.listArticlesMatter_signal.update((values) => {
            return [...values, postMatter];
          });
        }

        this.allKeywords.set(Array.from(allKeywordsMap.values()))
        this.selectedKeywords.set(Array.from(allKeywordsMap.values()))

      });
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
