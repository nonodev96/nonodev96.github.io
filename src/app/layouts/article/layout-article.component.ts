import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout-article.component.html',
  styleUrl: './layout-article.component.scss'
})
export class LayoutArticle {

}
