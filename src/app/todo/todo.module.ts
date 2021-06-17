import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { TodoComponent } from './todo.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    SummaryComponent,
    TasksComponent,
    TodoComponent,
    TaskComponent,
  ],
  imports: [CommonModule],
  exports: [TodoComponent],
})
export class TodoModule {}
