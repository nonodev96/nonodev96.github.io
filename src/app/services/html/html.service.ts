import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor(private titleService: Title,
              private metaService: Meta) {
  }

  updateTitle(newTitle = 'Nuevo Título de la Página') {
    this.titleService.setTitle(newTitle);
  }

  updateMeta(tag = { name: 'description', content: 'Descripción de la página' }) {
    this.metaService.addTag({ name: tag.name, content: tag.content });
  }
}
