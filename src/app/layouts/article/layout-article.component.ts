import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfigComponent } from '@app/components/config/config.component';
import { FooterComponent } from '@app/components/footer/footer.component';
import { TopbarComponent } from '@app/components/topbar/topbar.component';
import { HeaderComponent } from '@app/components/header/header.component';

@Component({
  selector: 'nn-article',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastModule, ConfigComponent, FooterComponent, TopbarComponent, HeaderComponent],
  templateUrl: './layout-article.component.html',
  styleUrl: './layout-article.component.scss'
})
export class LayoutArticleComponent {

}
