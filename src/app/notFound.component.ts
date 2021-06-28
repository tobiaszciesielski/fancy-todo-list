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
        gap: 10px 
      }
    </style>
    <div class="not-found">
      <h1>404: Not Found</h1>
      <p>Back to homepage</p>
    </div>
  `,
})
export class NotFoundComponent {}
