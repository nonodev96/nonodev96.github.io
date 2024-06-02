import {
  type ApplicationConfig,
  importProvidersFrom,
  SecurityContext
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import {
  CLIPBOARD_OPTIONS,
  MARKED_OPTIONS,
  provideMarkdown
} from 'ngx-markdown';
import { gfmHeadingId } from 'marked-gfm-heading-id';

import { markedOptionsFactory } from '@app/marked-options-factory';
import { AnchorService } from '@shared/anchor/anchor.service';
import { ClipboardButtonComponent } from '@shared/clipboard-button/clipboard-button.component';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en-GB',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),
    provideAnimations(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideHttpClient(),
    provideMarkdown({
      loader: HttpClient,
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: markedOptionsFactory,
        deps: [AnchorService]
      },
      markedExtensions: [gfmHeadingId()],
      clipboardOptions: {
        provide: CLIPBOARD_OPTIONS,
        useValue: { buttonComponent: ClipboardButtonComponent }
      },
      sanitize: SecurityContext.NONE
    }),
    //    'locationId': 'europe-west',

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'nonodev96-c612b',
        appId: '1:174307120114:web:c62516012c612a127ed16b',
        databaseURL: 'https://nonodev96-c612b.firebaseio.com',
        storageBucket: 'nonodev96-c612b.appspot.com',
        apiKey: 'AIzaSyCyD3tdXxx7QF-avPSb5Hil_-BuYjCmDlY',
        authDomain: 'nonodev96-c612b.firebaseapp.com',
        messagingSenderId: '174307120114',
        measurementId: 'G-G1EKEHJB4S'
      })
    ),
    provideFirestore(() => getFirestore())
  ]
};
