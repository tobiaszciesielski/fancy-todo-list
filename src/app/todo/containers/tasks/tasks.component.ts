import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tasks = [
      {
        name: 'Shopping 🛒',
        isDone: true,
        description: 'Buy one banana and two sprites',
        date: '21-04-2021',
      },
      {
        name: 'Date with wife 👩‍❤️',
        isDone: false,
        description: 'Cook shrimps and buy white wine',
        date: '23-04-2021',
      },
      {
        name: 'Make Angular course 50% done 🧠',
        isDone: false,
        description: 'Keep going, you are the best',
      },
    ];
  }

  handleRemove(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
