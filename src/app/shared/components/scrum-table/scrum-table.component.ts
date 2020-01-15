import { TasksService } from './../../services/tasks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../interfaces';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { transformTime } from '../edit-task/edit-task.component';

@Component({
  selector: 'app-scrum-table',
  templateUrl: './scrum-table.component.html',
  styleUrls: ['./scrum-table.component.scss']
})
export class ScrumTableComponent implements OnInit, OnDestroy {

  sub: Subscription;
  tasks: Task[] = [];
  planTasks: Task[] = [];
  inProcessTasks: Task[] = [];
  readyTasks: Task[] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.sub = this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
      this.planTasks = tasks.filter(t => t.status === 'План');
      this.inProcessTasks = tasks.filter(t => t.status === 'В процессе');
      this.readyTasks = tasks.filter(t => t.status === 'Готово');
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.previousIndex
      );
    }
    const task = this.tasks.filter(t => t.title === event.item.element.nativeElement.innerText)[0];

    if (getStatus() === 'Готово') {
      this.taskService.update({
        ...task,
        status: getStatus(),
        spentTime: transformTime(new Date(task.createdDate)),
        timer: 'Задача выполнена',
        planTime: 0
      }).subscribe();
    } else {
      this.taskService.update({
        ...task,
        status: getStatus()
      }).subscribe();
    }

    function getStatus() {
      if (event.container.id === 'cdk-drop-list-0') {
        return 'План';
      } else if (event.container.id === 'cdk-drop-list-1') {
        return 'В процессе';
      } else if (event.container.id === 'cdk-drop-list-2') {
        return 'Готово';
      }
    }
  }
}
