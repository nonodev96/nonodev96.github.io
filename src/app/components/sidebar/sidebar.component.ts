import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@app/components/menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'nn-sidebar',
  standalone: true,
  imports: [CommonModule, MenuComponent, SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible = false;
}
