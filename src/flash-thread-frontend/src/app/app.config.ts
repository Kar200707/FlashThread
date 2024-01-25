import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { firebaseConfig } from '../environment/fireBaseConfig';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig },
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp(firebaseConfig),
        provideMessaging(() => getMessaging())
      ),
    ),
    importProvidersFrom(provideMessaging(() => getMessaging())),
  ],
};
