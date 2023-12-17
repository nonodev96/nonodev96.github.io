import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nn-spline-3d-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spline-3d-test.component.html',
  styleUrl: './spline-3d-test.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class Spline3dTestComponent {

}
