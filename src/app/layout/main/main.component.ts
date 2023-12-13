import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from "@app/components/config/config.component";
import { RouterOutlet } from "@angular/router";
import { TopbarComponent } from "@app/components/topbar/topbar.component";
import { BreadcrumbComponent } from "@app/components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [CommonModule, ConfigComponent, RouterOutlet, TopbarComponent, BreadcrumbComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
