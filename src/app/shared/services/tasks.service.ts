import { Environment, FbCreateResponse } from './../interfaces';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private http: HttpClient,
    private auth: AuthService,
  ) { }

  createTask(task: Task): Observable<any> {
    return this.http.post(`${environment.dataBaseUrl}/tasks.json`, task)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...task,
          id: response.name
        };
      }));
  }

  getTasks(): Observable<Task[]> {
    return this.http.get(`${environment.dataBaseUrl}/tasks.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map( key => ({
            ...response[key],
            id: key,
          }));
      }));
  }

  getId(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.dataBaseUrl}/tasks/${id}.json`)
      .pipe(map((task: Task) => {
        return {
          ...task,
          id
        };
      }));
  }

  update(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${environment.dataBaseUrl}/tasks/${task.id}.json`, task);
  }
}
