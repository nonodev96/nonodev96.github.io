import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent, CLIPBOARD_OPTIONS } from 'ngx-markdown';
import { ButtonModule } from 'primeng/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfigComponent } from '@app/components/config/config.component';
import { ConfigService } from './services/config/config.service';

@Component({
  selector: 'nn-root',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterOutlet, MarkdownComponent, ButtonModule, TimelineModule, CardModule, ToastModule, ConfigComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    MessageService,
    {
      provide: CLIPBOARD_OPTIONS,
      useValue: {}
    },
  ]
})
export class AppComponent {

  private translate = inject(TranslateService)
  title = 'nonodev96.github.io';
  configService = inject(ConfigService)

  constructor() {
    this.translate.setDefaultLang('en-GB');
    this.translate.use('en-GB');
  }

}
