import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    
    provideAuth0({
      domain: 'dev-b00ut8ddynfrxms2.eu.auth0.com',
      clientId: 'WtXOG8mwUbSjr2FJJVZasz3o5iEH0oRA',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200/login/callback'
      }
    })
  ]
};
