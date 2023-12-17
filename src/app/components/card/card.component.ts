import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "ngx-markdown";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {PostAuthors_t, PostChips_t} from "@app/types";

@Component({
  selector: 'nn-card',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, ButtonModule, ChipModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {


  date = new Date().toLocaleString()

  @Input({ required: true })
  title: string = 'How To Get Started Tutorial'

  @Input({ required: true })
  cover: string = 'assets/development/test.png'

  @Input({ required: true })
  chips: PostChips_t = [
    {id: 0, label: '2023-12-04', icon: 'pi pi-calendar'},
    {id: 1, label: '15 min', icon: 'pi pi-clock'},
  ]

  @Input({ required: true })
  authors: PostAuthors_t = [{
    id: 0,
    name: 'nonodev96',
    image: 'assets/development/avatar.png'
  }]

  @Input({ required: true })
  summary: string = 'Sodales massa, morbi convallis'

  @Input({ required: true })
  content: string = "";

  content2: string = `
# Título 1

## Título 2

### Título 3


Texto normal con *énfasis* y **negrita**.

Lista no ordenada:
- Elemento 1
- Elemento 2
- Elemento 3

Lista ordenada:
1. Primer elemento
2. Segundo elemento
3. Tercer elemento

Enlaces:
[Enlace a Google](https://www.google.com)

Imágenes:

Inline-style:
![alt text](/favicon.ico "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: /favicon.ico "Logo Title Text 2"

Bloque de código:
\`\`\`python
print("Hola, mundo!")

\`\`\`

Citas:
> Esto es una cita.

Línea horizontal:
---

Tablas:
| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Celda 1,1    | Celda 1,2    |
| Celda 2,1    | Celda 2,2    |

Checkbox:
- [x] Tarea completada
- [ ] Tarea pendiente

Emoji:

Esto es un emoji :heart:

Latex:
\`\`\`latex
f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi
\`\`\`

$f(x) = \\int_{-\\infty}^\\infty \\hat f(\\xi) e^{2 \\pi i \\xi x} d\\xi$

Mermaid:
\`\`\`mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
\`\`\`

\`\`\`mermaid
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
\`\`\`


\`\`\`mermaid
mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid
\`\`\`
  `;

}
