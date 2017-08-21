import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/index';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherService } from './_services/teacher.service';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentService } from './_services/department.service';

// Imports for simulating a Web API - testing purposes only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeachersComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    AppComponent,
    TeacherService,
    DepartmentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
