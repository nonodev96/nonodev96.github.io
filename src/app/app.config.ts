import { ApplicationConfig, SecurityContext } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { CLIPBOARD_OPTIONS, MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { gfmHeadingId } from 'marked-gfm-heading-id';

import { markedOptionsFactory } from '@app/marked-options-factory';
import { AnchorService } from '@shared/anchor/anchor.service';
import { ClipboardButtonComponent } from '@shared/clipboard-button/clipboard-button.component';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ),
    provideHttpClient(),
    provideMarkdown({
      loader: HttpClient,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
        deps: [AnchorService],
      },
      markedExtensions: [gfmHeadingId()],
      clipboardOptions: {
        provide: CLIPBOARD_OPTIONS,
        useValue: { buttonComponent: ClipboardButtonComponent },
      },
      sanitize: SecurityContext.NONE,
    }),
  ]
};
