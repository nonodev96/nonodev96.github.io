import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nn-menu',
  standalone: true,
  imports: [CommonModule, BadgeModule, MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Refresh',
          escape: false,
          icon: 'pi pi-refresh',
          iconClass: 'text-xl',
        },
        {
          label: 'Delete',
          escape: false,
          icon: 'pi pi-times',
          iconClass: 'text-xl',
          styleClass: 'red',
          badge: '5'
        }
      ]
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'Angular',
          icon: 'pi pi-external-link',
          url: 'https://angular.io'
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
        }
      ]
    }
  ];

}
