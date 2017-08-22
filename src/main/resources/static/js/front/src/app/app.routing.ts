import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { TeachersComponent } from './teachers/teachers.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { CommissionsComponent } from './commissions/commissions.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'teachers', component: TeachersComponent},
    { path: 'departments', component: DepartmentsComponent},
    { path: 'disciplines', component: DisciplinesComponent},
    { path: 'commissions', component: CommissionsComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}
