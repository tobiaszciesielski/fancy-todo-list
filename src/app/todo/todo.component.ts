import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <app-header></app-header>
    <app-tasks></app-tasks>
    <app-task-viewer></app-task-viewer>
  `,
})
export class TodoComponent {}
