import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../todo.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
})
export class TaskViewerComponent implements OnInit {
  task!: Task;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService,
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(switchMap((data) => this.todoService.getTask(data.id)))
      .subscribe((data: Task) => (this.task = data));
  }

  handleUpdate(event: Task) {
    this.todoService.updateTask(event).subscribe((_) => {
      this.task = Object.assign({}, this.task, event);
    });
  }
}
