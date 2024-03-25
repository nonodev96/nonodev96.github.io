import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileBlog_t } from '@app/types';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { BlogService } from '@app/services/blog/blog.service';


@Component({
  selector: 'nn-list-articles',
  standalone: true,
  imports: [CommonModule, ButtonModule, RouterLink],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent implements OnInit {
  filesList_signal = signal<FileBlog_t[]>([])

  constructor(public blogService: BlogService) {
  }

  ngOnInit(): void {
    this.blogService.getListPosts().then((info_blog) => {
      this.filesList_signal.set(info_blog.data)
    });
  }
}
