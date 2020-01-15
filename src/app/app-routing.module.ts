import { ScrumTableComponent } from './shared/components/scrum-table/scrum-table.component';
import { EditTaskComponent } from './shared/components/edit-task/edit-task.component';
import { TaskViewComponent } from './shared/components/task-view/task-view.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { TasksComponent } from './shared/components/tasks/tasks.component';
import { CreateTaskComponent } from './shared/components/create-task/create-task.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: TasksComponent, canActivate: [AuthGuard]},
    {path: 'create-task', component: CreateTaskComponent, canActivate: [AuthGuard]},
    {path: 'task/:id', component: TaskViewComponent, canActivate: [AuthGuard]},
    {path: 'task/:id/edit-task', component: EditTaskComponent, canActivate: [AuthGuard]},
    {path: 'scrum', component: ScrumTableComponent, canActivate: [AuthGuard]},
  ]},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
