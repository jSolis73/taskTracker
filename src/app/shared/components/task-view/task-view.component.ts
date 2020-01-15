import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Observable } from 'rxjs';
import { Task } from '../../interfaces';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks$: Observable<Task>;
  timer: number;
  task: Task;
  time: string;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {

  this.tasks$ = this.route.params
    .pipe(switchMap((params: Params) => {
      return this.tasksService.getId(params.id);
    }));
  }
}
