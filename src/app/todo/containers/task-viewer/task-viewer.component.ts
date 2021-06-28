import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../todo.service';

import { Task } from "../../models/Task";

@Component({
  selector: 'app-task-viewer',
  templateUrl: './task-viewer.component.html',
  styleUrls: ['./task-viewer.component.scss'],
})
export class TaskViewerComponent implements OnInit {
  task!: Task;
  
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService
      .getTask(1)
      .subscribe((task: Task) => this.task = task)
  }

  handleUpdate(event: Task) {
    this.todoService
      .updateTask(event)
      .subscribe((_) => {
        this.task = Object.assign({}, this.task, event)
      })
  }
}
