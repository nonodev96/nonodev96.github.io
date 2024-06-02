import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { type KatexOptions, MarkdownComponent } from 'ngx-markdown';
import type {
  PostAuthor_t,
  PostAuthors_t,
  PostChips_t
} from '@app/models/Posts';

@Component({
  selector: 'nn-post',
  standalone: true,
  imports: [
    CommonModule,
    MarkdownComponent,
    ButtonModule,
    ChipModule,
    AvatarGroupModule,
    AvatarModule,
    TooltipModule,
    TagModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  date = new Date().toLocaleString();

  @Input({ required: true })
  title = 'How To Get Started Tutorial';

  @Input({ required: true })
  cover = 'assets/development/cover.png';

  @Input({ required: true })
  chips: PostChips_t = [
    { id: 0, label: '2023-12-04', icon: 'pi pi-calendar' },
    { id: 1, label: '15 min', icon: 'pi pi-clock' }
  ];

  @Input({ required: true })
  authors: PostAuthors_t = [
    {
      id: 0,
      name: 'nonodev96',
      image: '/assets/development/avatar.png'
    }
  ];

  @Input({ required: true })
  keywords: string[] = [];

  @Input({ required: true })
  categories: string[] = [];

  @Input({ required: true })
  summary = 'Sodales massa, morbi convallis';

  @Input({ required: true })
  content = '';

  components = {
    custom: class CustomComponent {}
  };

  @Input({ required: false })
  katexOptions: KatexOptions = {
    displayMode: true,
    strict: 'warn'
  };

  onCopyToClipboard() {}

  openTwitter(author: PostAuthor_t) {
    window.open(`https://twitter.com/${author.name}`, '_blank');
  }
}
