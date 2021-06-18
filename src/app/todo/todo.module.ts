import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Services
import { TodoService } from './todo.service';

// Containers
import { TodoComponent } from './todo.component';

// Components
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TasksComponent } from './containers/tasks/tasks.component';
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
  providers: [TodoService],
})
export class TodoModule {}
