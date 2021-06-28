import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() detail!: Task;
  @Output() update = new EventEmitter<Task>();

  constructor() {}

  ngOnInit() {}

  toggleChange(event: boolean) {
    this.detail.isDone = event;
  }

  handleSubmit(task: Task, isValid: boolean) {
    if (isValid) {
      this.update.emit(task);
    }
  }
}
