import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { JavaintroComponent } from './javaintro/javaintro.component';
import { JavabasicsComponent } from './javabasics/javabasics.component';
import { JavaoopsComponent } from './javaoops/javaoops.component';
import { JavaprComponent } from './javapr/javapr.component';
import { AngularintroComponent } from './angularintro/angularintro.component';
import { AdvancedjavaComponent } from './advancedjava/advancedjava.component';
import { MysqlComponent } from './mysql/mysql.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { JavacollectionsComponent } from './javacollections/javacollections.component';

const routes: Routes = [
  {path: 'piyush', component: EmployeeListComponent},
  {path: 'javaintro', component: JavaintroComponent},
  {path: 'javabasics', component: JavabasicsComponent},
  {path: 'javaoops', component: JavaoopsComponent},
  {path: 'javapr', component: JavaprComponent},
  {path: 'angular', component: AngularintroComponent},
  {path: 'advancedjava', component: AdvancedjavaComponent},
  {path: 'collections', component: JavacollectionsComponent},
  {path: 'mysql', component: MysqlComponent},
  {path: 'mongodb', component: MongodbComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'employee-details/type/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],        
  exports: [RouterModule]
})
export class AppRoutingModule { }
