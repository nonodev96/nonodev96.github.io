import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {MenuComponent} from "@app/components/menu/menu.component";
import {SidebarModule} from "primeng/sidebar";
import {Router, RouterLink} from "@angular/router";
import {MessageService} from "primeng/api";
import {MessagesModule} from "primeng/messages";

@Component({
  selector: 'nn-config',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuComponent, SidebarModule, RouterLink, MessagesModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  sidebarConfigVisible: boolean = false;

  constructor(private router: Router,
              private messageService: MessageService) {
  }

  async goToHome() {
    await this.router.navigate(['/home']);
  }

  async goTo(link: any | string | string[]) {
    this.router.navigate(link)
      .catch(() => {
        console.log('inside catch block');
        this.messageService.add({severity: 'error', summary: 'Page not found', detail: `Error, page ${link} not found`});
        this.router.navigate(['/404']);
      }).finally(() => {
    });
  }
}
