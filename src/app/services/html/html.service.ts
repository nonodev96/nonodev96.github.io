import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

const DEFAULT_TAG = {
  name: 'description',
  content: 'Descripción de la página'
};
@Injectable({
  providedIn: 'root'
})
export class HtmlService {
  private metaService = inject(Meta);
  private titleService = inject(Title);

  updateTitle(newTitle = 'Nuevo Título de la Página') {
    this.titleService.setTitle(newTitle);
  }

  updateMeta(tag = DEFAULT_TAG) {
    this.metaService.addTag({ name: tag.name, content: tag.content });
  }
}
