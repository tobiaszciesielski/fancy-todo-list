import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <style>
      .greetings {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        gap: 10px 
      }
    </style>
    <div class="greetings">
      <h1>Wlecome to Fancy TODO Application!</h1>
      <p>Click here to try it</p>
    </div>
  `,
})
export class HomeComponent {}
