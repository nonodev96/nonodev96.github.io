import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { filter, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { DropdownModule, type DropdownFilterOptions } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { NavigationError, Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { ConfigService } from '@app/services/config/config.service';
import { MenuComponent } from '@app/components/menu/menu.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'nn-config',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    MenuComponent,
    SidebarModule,
    RouterLink,
    MessagesModule,
    FormsModule,
    DropdownModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  private router = inject(Router);
  private messageService = inject(MessageService);
  public configService = inject(ConfigService);

  themes: { theme: string }[] = [
    { theme: 'bootstrap4-light-blue' },
    { theme: 'bootstrap4-light-purple' },
    { theme: 'bootstrap4-dark-blue' },
    { theme: 'bootstrap4-dark-purple' },
    { theme: 'md-light-indigo' },
    { theme: 'md-light-deeppurple' },
    { theme: 'md-dark-indigo' },
    { theme: 'md-dark-deeppurple' },
    { theme: 'mdc-light-indigo' },
    { theme: 'mdc-light-deeppurple' },
    { theme: 'mdc-dark-indigo' },
    { theme: 'mdc-dark-deeppurple' },
    { theme: 'fluent-light' },
    { theme: 'lara-light-blue' },
    { theme: 'lara-light-indigo' },
    { theme: 'lara-light-purple' },
    { theme: 'lara-light-teal' },
    { theme: 'lara-dark-blue' },
    { theme: 'lara-dark-indigo' },
    { theme: 'lara-dark-purple' },
    { theme: 'lara-dark-teal' },
    { theme: 'soho-light' },
    { theme: 'soho-dark' },
    { theme: 'viva-light' },
    { theme: 'viva-dark' },
    { theme: 'mira' },
    { theme: 'nano' },
    { theme: 'saga-blue' },
    { theme: 'saga-green' },
    { theme: 'saga-orange' },
    { theme: 'saga-purple' },
    { theme: 'vela-blue' },
    { theme: 'vela-green' },
    { theme: 'vela-orange' },
    { theme: 'vela-purple' },
    { theme: 'arya-blue' },
    { theme: 'arya-green' },
    { theme: 'arya-orange' },
    { theme: 'arya-purple' },
    { theme: 'nova' },
    { theme: 'nova-alt' },
    { theme: 'nova-accent' },
    { theme: 'luna-amber' },
    { theme: 'luna-blue' },
    { theme: 'luna-green' },
    { theme: 'luna-pink' },
    { theme: 'rhea' }
  ];
  filterValue = '';
  selectedCountry = '';

  constructor() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationError),
      tap((_event) => {
        console.log('error', { _event });
      })
    );
  }

  goTo(link: string | string[]) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    this.router
      .navigate(link as any[])
      .then(() => {
        this.configService.sidebarConfigVisible = false;
      })
      .catch(() => {
        if (link)
          this.messageService.add({
            severity: 'error',
            summary: 'Page not found',
            detail: `Error, page ${link} not found`
          });
        this.router.navigate(['/error404']);
      })
      .finally(() => { });
  }

  close() {
    this.configService.sidebarConfigVisible = false;
  }

  resetFunction(options: DropdownFilterOptions) {
    if (options.reset) {
      options.reset();
    }
    this.filterValue = '';
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    if (options.filter) {
      options.filter(event);
    }
  }

  onChangeSelectedTheme($event: { theme: string }) {
    const { theme } = $event;
    this.configService.setTheme(theme);
  }
}
