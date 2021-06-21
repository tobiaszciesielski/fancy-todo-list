import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from '../../models/Task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks: Task[] = [
      {
        id: 1,
        name: 'Shopping 🛒',
        isDone: true,
        description: 'Buy one banana and two sprites',
        date: '21-04-2021',
      },
      {
        id: 2,
        name: 'Date with wife 👩‍❤️',
        isDone: false,
        description: 'Cook shrimps and buy white wine',
        date: '23-04-2021',
      },
      {
        id: 3,
        name: 'Make Angular course 50% done 🧠',
        isDone: false,
        description: 'Keep going, you are the bes',
      },
    ];

    return { tasks };
  }
}
