import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';
import { MenuComponent } from '@app/components/menu/menu.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';

@Component({
  selector: 'nn-topbar',
  standalone: true,
  imports: [CommonModule, ButtonModule, BreadcrumbComponent, MenuComponent, SidebarComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

}
