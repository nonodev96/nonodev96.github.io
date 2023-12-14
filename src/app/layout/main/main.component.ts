import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from "@app/components/config/config.component";
import { RouterOutlet } from "@angular/router";
import { TopbarComponent } from "@app/components/topbar/topbar.component";
import { BreadcrumbComponent } from "@app/components/breadcrumb/breadcrumb.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'layout-main',
  standalone: true,
  imports: [CommonModule, ConfigComponent, RouterOutlet, TopbarComponent, BreadcrumbComponent, FooterComponent, MessagesModule, ToastModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
