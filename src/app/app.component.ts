import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  title = 'nonodev96.github.io';

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en-GB');
    translate.use('en-GB');
  }

}
