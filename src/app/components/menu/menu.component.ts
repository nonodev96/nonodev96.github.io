import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import type { MenuItem } from 'primeng/api';

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
      label: 'Navegación',
      items: [
        {
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: '/'
        },
        {
          label: 'Artículos',
          icon: 'pi pi-book',
          routerLink: '/article'
        },
        {
          label: 'Pomodoro',
          icon: 'pi pi-clock',
          routerLink: '/pomodoro'
        },
        {
          label: 'Dashboard',
          icon: 'pi pi-chart-bar',
          routerLink: '/dashboard'
        }
      ]
    },
    {
      label: 'Externos',
      items: [
        {
          label: 'GitHub',
          icon: 'pi pi-github',
          url: 'https://github.com/nonodev96',
          target: '_blank'
        }
      ]
    }
  ];
}
