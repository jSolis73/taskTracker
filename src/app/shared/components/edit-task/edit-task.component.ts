import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../interfaces';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  form: FormGroup;
  task: Task;
  isSubmit = false;
  time: String;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.tasksService.getId(params.id);
      })
    ).subscribe((task: Task) => {
      this.task = task;
      this.form = new FormGroup( {
        status: new FormControl(task.status, Validators.required),
        planTime: new FormControl(task.planTime, Validators.required)
      });
      this.time = transformTime(new Date(this.task.createdDate));
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.get('status').value === 'Готово') {
      this.isSubmit = true;
      this.tasksService.update({
        ...this.task,
        status: this.form.get('status').value,
        spentTime: this.time,
        planTime: 0,
        timer: 'Задача выполнена'
      }).subscribe( () => {
        this.isSubmit = false;
      });

      setTimeout(() => this.router.navigate(['']), 1000);
    } else {
      this.isSubmit = true;
      this.tasksService.update({
        ...this.task,
        status: this.form.get('status').value,
        planTime: this.form.get('planTime').value
      }).subscribe( () => {
        this.isSubmit = false;
      });

      setTimeout(() => this.router.navigate(['']), 1000);
    }
  }
}

export function transformTime(t): string {
  const hours = Math.floor(+new Date().getHours() - +t.getHours());
  const minutes = (+new Date().getMinutes() - +t.getMinutes()) % 60;
  return `${hours} ч. ${minutes} мин.`;
}
