import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from "ngx-markdown";

@Component({
  selector: 'nn-post',
  standalone: true,
  imports: [CommonModule, MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  content: string = `

  # Hello world

\`\`\`js
console.log("hello world");
\`\`\`
  `;

}
