import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MarkdownComponent, CLIPBOARD_OPTIONS } from 'ngx-markdown';
import { ClipboardButtonComponent } from '@shared/clipboard-button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MarkdownComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: CLIPBOARD_OPTIONS, useValue: {} },
  ]
})
export class AppComponent {
  title = 'nonodev96.github.io';

  readonly clipboardButtonComponent = ClipboardButtonComponent;
  constructor() { }

  onLoad(): void {
    console.log("load");
  }

  katexMarkdown =
    `#### \`katex\` directive example
  
  \`\`\`latex
  f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi
  \`\`\`
  
  $f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$`;
}
