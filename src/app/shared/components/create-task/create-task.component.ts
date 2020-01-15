import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../interfaces';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  form: FormGroup;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      plan: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const task: Task = {
      title: this.form.value.title,
      description: this.form.value.description,
      priority: this.form.value.priority,
      status: this.form.value.status,
      planTime: this.form.value.plan,
      createdDate: new Date(Date.now())
    };
    
    this.tasksService.createTask(task).subscribe(() => {
      this.form.reset();
    });


  }
}
