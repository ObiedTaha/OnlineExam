import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { httpResponseInterceptor } from './core/interceptors/http-response/http-response-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(),  withInterceptors([httpResponseInterceptor])),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    MessageService,
    ConfirmationService,
    ToastModule,
  ],
};
