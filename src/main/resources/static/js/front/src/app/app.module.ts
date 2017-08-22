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
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineService } from './_services/discipline.service';
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionService } from './_services/commission.service';
import { CommissionDetailComponent } from './commissions/commission-detail.component';
import { PositionsComponent } from './positions/positions.component';
import { PositionService } from './_services/position.service';

// Imports for simulating a Web API - testing purposes only
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeachersComponent,
    DepartmentsComponent,
    DisciplinesComponent,
    CommissionsComponent,
    CommissionDetailComponent,
    PositionsComponent
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
    DepartmentService,
    DisciplineService,
    CommissionService,
    PositionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
