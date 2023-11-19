import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clipboard-button',
  templateUrl: './clipboard-button.component.html',
  styleUrl: './clipboard-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ClipboardButtonComponent {

  constructor() { }

  onCopyToClipboard() {
    console.log("copy");
  }
}
