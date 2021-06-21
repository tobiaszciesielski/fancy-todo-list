import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Task } from './models/Task';

const TASK_API: string = '/api/tasks';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(TASK_API);
  }
}
