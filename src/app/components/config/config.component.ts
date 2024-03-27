import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from '@app/components/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { NavigationError, Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfigService } from '@app/services/config/config.service';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'nn-config',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuComponent, SidebarModule, RouterLink, MessagesModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {

  constructor(private router: Router,
    private messageService: MessageService,
    public configService: ConfigService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationError),
      tap(_event => {
        console.log('error', { _event })
      })
    );
  }

  goTo(link: string | string[]) {
    this.router.navigate(link as any)
      .then(() => {
        this.configService.sidebarConfigVisible = false
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Page not found',
          detail: `Error, page ${link} not found`
        });
        this.router.navigate(['/error404']);
      })
      .finally(() => {
      });
  }

  close() {
    this.configService.sidebarConfigVisible = false
  }
}
