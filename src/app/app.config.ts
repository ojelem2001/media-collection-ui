import { ApplicationConfig } from '@angular/core';
import {
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay
} from '@angular/platform-browser';
import { provideRouter, withRouterConfig } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      })
    )
  ]
};