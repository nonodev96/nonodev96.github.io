import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MessageService, SharedModule } from 'primeng/api';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language_t } from '@app/types';
import { HtmlService } from '@app/services/html/html.service';

@Component({
  selector: 'nn-debug-tests',
  standalone: true,
    imports: [CommonModule, ButtonModule, SharedModule, TimelineModule, ToastModule, TranslateModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  events = [
    {
      status: 'Ordered',
      date: '15/10/2020 10:30',
      icon: 'pi pi-shopping-cart',
      color: '#9C27B0',
      image: 'game-controller.jpg'
    },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  ];

  constructor(public translate: TranslateService,
              public messageService: MessageService,
              public htmlService: HtmlService) {
  }

  changeLanguage(selected: Language_t) {
    switch (selected) {
      case 'es-ES':
        this.translate.use('es-ES')
        break
      case 'en-GB':
        this.translate.use('en-GB')
        break
      default:
        this.translate.use('es-ES')
    }
  }

  parseYAML() {

  }

  message() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
