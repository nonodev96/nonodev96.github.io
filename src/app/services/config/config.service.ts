import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarConfigVisible = false;
  theme = 'bootstrap4-light-blue';
  @Inject(DOCUMENT)
  private document = inject(Document)


  setTheme(theme: string) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement
    themeLink.href = `${theme}.css`
  }
}
