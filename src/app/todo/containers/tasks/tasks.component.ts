import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/Task';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private todoService: TodoService, 
    private router: Router
  ) {}

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

  replaceWithUpdatedTask(newTask: Task) {
    this.tasks = this.tasks.map((t) => {
      if (newTask.id === t.id) {
        t = newTask
      }
      return t;
    });
  }

  handleRename({ task, name }: any) {
    const newTask = Object.assign({}, task, {name});
    this.todoService
      .updateTask(newTask)
      .subscribe((_) => this.replaceWithUpdatedTask(newTask));
  }

  toggleStatus(task: Task) {
    const newTask = Object.assign({}, task, { isDone: !task.isDone });
    this.todoService
      .updateTask(newTask)
      .subscribe((_) => this.replaceWithUpdatedTask(newTask));
  }

  handeView(task: Task) {
    this.router.navigate([`/todo/${task.id}`])
  }
}
