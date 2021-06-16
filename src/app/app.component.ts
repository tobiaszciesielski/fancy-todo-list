import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <div class="container">
        <app-header></app-header>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
