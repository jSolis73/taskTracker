import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  timer: number;
  searchString = '';
  status = '';
  priority = '';
  interval = interval(60000);
  sub: Subscription;
  fullTable = true;

  constructor(public taskService: TasksService ) { }

  ngOnInit() {
    this.sub = this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
      this.tasks.map(t => getTimer(t));

    });

    this.interval.subscribe({
      next: () => this.taskService.getTasks().subscribe(tasks => {
        this.tasks = tasks;
        this.tasks.map(t => getTimer(t));

      })
    });

    function getTimer(t) {
      if (t.timer !== 'Время на выполнение задачи истекло') {
        let hours = +new Date(t.createdDate).getHours() + t.planTime - +new Date().getHours();
        if (hours <= 1) {
          hours = 0;
        } else {
          hours = Math.floor(hours);
        }

        const minutes = (+new Date(t.createdDate).getMinutes() + (t.planTime * 60) - +new Date().getMinutes()) % 60;
        if (hours <= 1 && minutes <= 1) {
          hours === 0;
          minutes === 0;
        } else {
          return t.timer = `${hours} ч. ${minutes} мин.`;
        }
      }
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }



}
