import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
