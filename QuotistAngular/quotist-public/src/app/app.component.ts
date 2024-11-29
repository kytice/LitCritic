import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main class="flex-shrink-0 container mt-5">
      <app-home-list></app-home-list>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
