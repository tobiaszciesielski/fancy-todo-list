import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <app-header></app-header>
    <app-tasks></app-tasks>
  `,
})
export class TodoComponent {}
