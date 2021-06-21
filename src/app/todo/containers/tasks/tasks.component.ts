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
    this.todoService
      .getTasks()
      .subscribe((data: Task[]) => {
        console.log(data)
        this.tasks = data;
    });
  }

  handleRemove({ id }: any) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  handleRename({ id, name }: any) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task = Object.assign({}, task, { name });
      }
      return task;
    });
  }

  toggleStatus({ id }: any) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone;
      }
      return task;
    });
  }
}
