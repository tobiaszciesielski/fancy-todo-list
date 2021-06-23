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
    this.todoService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  handleRemove(task: Task) {
    this.todoService
      .deleteTask(task)
      .subscribe((_) => {
        this.tasks = this.tasks
          .filter((t) => t.id !== task.id);
        this.todoService.getTasks()
      })
  }

  handleRename({ task, name }: any) {
    task.name = name;
    this.todoService
      .updateTask(task)
      .subscribe((_) => {
        this.tasks = this.tasks.map((t) => {
          if (task.id === t.id) {
            task = Object.assign({}, task, { name });
          }
          return t;
        });
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
