import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Services
import { TodoService } from './todo.service';
import { InMemoryDataService } from './services/inMemoryData/in-memory-data.service';

// Containers
import { TodoComponent } from './todo.component';

// Components
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { TaskViewerComponent } from './containers/task-viewer/task-viewer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    SummaryComponent,
    TasksComponent,
    TaskViewerComponent,
    TodoComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
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
