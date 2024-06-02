import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  sidebarConfigVisible = false;
  theme = 'bootstrap4-light-blue';

  setTheme(theme: string) {
    const themeLink = window.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    themeLink.href = `${theme}.css`;
  }
}
