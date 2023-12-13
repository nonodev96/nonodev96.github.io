import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent, CLIPBOARD_OPTIONS } from 'ngx-markdown';
import { ButtonModule } from "primeng/button";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { TimelineModule } from "primeng/timeline";
import { CardModule } from "primeng/card";
import { MessageService } from 'primeng/api';
import { ToastModule } from "primeng/toast";
import { HtmlService } from "@app/services/html/html.service";
import { loadFront } from 'yaml-front-matter'
import { DEFAULT_SCHEMA, } from 'js-yaml'
import { Language_t } from "../type";
import { MainComponent } from "@app/layout/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterOutlet, MarkdownComponent, ButtonModule, TimelineModule, CardModule, ToastModule, MainComponent],
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
