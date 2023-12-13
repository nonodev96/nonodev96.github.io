import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { MenuComponent } from "@app/components/menu/menu.component";
import { SidebarModule } from "primeng/sidebar";

@Component({
  selector: 'nn-config',
  standalone: true,
  imports: [CommonModule, ButtonModule, MenuComponent, SidebarModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent {
  sidebarConfigVisible: boolean = false;

}
