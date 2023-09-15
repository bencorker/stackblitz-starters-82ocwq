import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './test-app/display/display.component';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import {
  VERSION as MAT_VERSION,
  MatNativeDateModule,
} from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, DisplayComponent],
  template: `
    <app-display></app-display>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ],
}).catch((err) => console.error(err));
