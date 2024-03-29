import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KatexOptions, MarkdownComponent } from 'ngx-markdown';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { PostAuthors_t, PostChips_t } from '@app/types';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'nn-post',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, ButtonModule, ChipModule, AvatarGroupModule, AvatarModule, TooltipModule, TagModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {


  date = new Date().toLocaleString()

  @Input({ required: true })
  title: string = 'How To Get Started Tutorial'

  @Input({ required: true })
  cover: string = 'assets/development/cover.png'

  @Input({ required: true })
  chips: PostChips_t = [
    { id: 0, label: '2023-12-04', icon: 'pi pi-calendar' },
    { id: 1, label: '15 min', icon: 'pi pi-clock' },
  ]

  @Input({ required: true })
  authors: PostAuthors_t = [{
    id: 0,
    name: 'nonodev96',
    image: '/assets/development/avatar.png'
  }]

  @Input({ required: true })
  keywords: string[] = []

  @Input({ required: true })
  categories: string[] = []

  @Input({ required: true })
  summary: string = 'Sodales massa, morbi convallis'


  @Input({ required: true })
  content: string = '';



  @Input({ required: false })
  katexOptions: KatexOptions = {
    displayMode: true,
    strict: 'warn'
  };

  onCopyToClipboard() {

  }
}
