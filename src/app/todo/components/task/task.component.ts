import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() index!: number;
  @Output() remove = new EventEmitter<Task>();
  editMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  toggleStatusChange() {
    this.task.isDone = !this.task.isDone;
  }

  handleNameChange(event: any) {
    this.task.name = event.target.value;
    this.toggleEdit();
  }

  onRemove() {
    this.remove.emit(this.task);
  }
}
