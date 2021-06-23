import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

// Services
import { TodoService } from './todo.service';
import { InMemoryDataService } from './services/inMemoryData/in-memory-data.service';

// Containers
import { TodoComponent } from './todo.component';
import { TaskViewerComponent } from './containers/task-viewer/task-viewer.component';

// Components
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@NgModule({
  declarations: [
    // Conteiners
    TasksComponent,
    TaskViewerComponent,

    // Compon
    ButtonComponent,
    HeaderComponent,
    SummaryComponent,
    TodoComponent,
    TaskComponent,
    TaskFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000,
    }),
  ],
  exports: [TodoComponent],
  providers: [TodoService],
})
export class TodoModule {}
