import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

const extendedConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    importProvidersFrom(BrowserAnimationsModule) // ✅ Add animations support
  ]
};

bootstrapApplication(AppComponent, extendedConfig)
  .catch((err) => console.error(err));
