import { Component, OnInit } from '@angular/core';

interface Task {
  name: string;
  isDone: boolean;
  description: string;
  date?: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks = [
    {
      name: 'Shopping 🛒',
      isDone: true,
      description: 'Buy one banana and two sprites',
      date: '21-04-2021'
    },
    {
      name: 'Date with wife 👩‍❤️',
      isDone: false,
      description: 'Cook shrimps and buy white wine',
      date: '23-04-2021'
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
