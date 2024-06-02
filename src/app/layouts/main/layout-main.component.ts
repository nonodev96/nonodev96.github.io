import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from '@app/components/config/config.component';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from '@app/components/topbar/topbar.component';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from '@app/components/header/header.component';

@Component({
  selector: 'nn-layout-main',
  standalone: true,
  imports: [
    CommonModule,
    ConfigComponent,
    RouterOutlet,
    TopbarComponent,
    BreadcrumbComponent,
    FooterComponent,
    MessagesModule,
    ToastModule,
    HeaderComponent,
    HeaderComponent
  ],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export class LayoutMainComponent {}
