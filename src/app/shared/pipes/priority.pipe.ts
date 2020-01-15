import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces';

@Pipe({
  name: 'searchPriority'
})

export class PriorityPipe implements PipeTransform {
  transform(tasks: Task[], priority = ''): Task[] {
    if (!priority) {
      return tasks;
    }

    return tasks.filter(task => {
      return task.priority.includes(priority);

    });
  }
}
