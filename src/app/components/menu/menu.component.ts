import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeModule } from "primeng/badge";
import { MenuModule } from "primeng/menu";
import { MenuItem } from "primeng/api";

@Component({
  selector: 'nn-menu',
  standalone: true,
  imports: [CommonModule, BadgeModule, MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {


  items: MenuItem[] | undefined = [
    {
      label: 'Options',
      items: [
        {
          label: '<span class="text-xl font-bold">Refresh</span>',
          escape: false,
          icon: 'pi pi-refresh',
          iconClass: 'text-xl'
        },
        {
          label: '<span class="text-xl font-bold">Delete</span>',
          escape: false,
          icon: 'pi pi-times',
          iconClass: 'text-xl'
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
