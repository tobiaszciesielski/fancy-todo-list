import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <style>
      .not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        gap: 10px;
      }
    </style>
    <div class="not-found">
      <h1>404: Not Found</h1>
      <p>Back to <a routerLink="/">homepage</a></p>
    </div>
  `,
})
export class NotFoundComponent {}
