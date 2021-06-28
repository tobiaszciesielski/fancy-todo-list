import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './models/Task';

const TASK_API: string = '/api/tasks';

@Injectable()
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(TASK_API);
  }

  getTask(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${TASK_API}/${id}`);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${TASK_API}/${task.id}`, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${TASK_API}/${task.id}`);
  }
}
