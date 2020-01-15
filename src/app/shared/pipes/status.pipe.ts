import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces';

@Pipe({
  name: 'searchStatus'
})

export class StatusPipe implements PipeTransform {
  transform(tasks: Task[], status = ''): Task[] {
    if (!status) {
      return tasks;
    }

    return tasks.filter(task => {
      return task.status.includes(status);
    });
  }
}
