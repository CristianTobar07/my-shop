import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { ROOT_REDUCER } from './store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(ROOT_REDUCER),
    provideClientHydration(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
