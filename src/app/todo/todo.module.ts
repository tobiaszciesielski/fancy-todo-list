import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    TasksComponent,
    TodoComponent,
  ],
  imports: [CommonModule],
  exports: [TodoComponent],
})
export class TodoModule {}
