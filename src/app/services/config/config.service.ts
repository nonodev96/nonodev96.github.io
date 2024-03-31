import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarConfigVisible: boolean = false;
  theme = 'bootstrap4-light-blue';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(theme: any) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement
    themeLink.href = theme + '.css'
  }
}
