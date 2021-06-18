import { Task } from './models/Task';

export class TodoService {
  constructor() {}

  getTasks(): Task[] {
    return [
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
}
