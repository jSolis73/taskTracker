import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { CreateTaskComponent } from './shared/components/create-task/create-task.component';
import { TasksComponent } from './shared/components/tasks/tasks.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { StatusPipe } from './shared/pipes/status.pipe';
import { PriorityPipe } from './shared/pipes/priority.pipe';
import { TaskViewComponent } from './shared/components/task-view/task-view.component';
import { EditTaskComponent } from './shared/components/edit-task/edit-task.component';
import { ScrumTableComponent } from './shared/components/scrum-table/scrum-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CreateTaskComponent,
    TasksComponent,
    LoginPageComponent,
    SearchPipe,
    StatusPipe,
    PriorityPipe,
    TaskViewComponent,
    EditTaskComponent,
    ScrumTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
