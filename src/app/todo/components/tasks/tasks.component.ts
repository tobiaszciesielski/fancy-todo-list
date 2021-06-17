import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  isDone: boolean;
  description: string;
  date?: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
