import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.tasks = this.todoService.getTasks();
  }

  handleRemove(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
