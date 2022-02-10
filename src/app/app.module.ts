import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { JavaintroComponent } from './javaintro/javaintro.component';
import { JavabasicsComponent } from './javabasics/javabasics.component';
import { JavaoopsComponent } from './javaoops/javaoops.component';
import { AdvancedjavaComponent } from './advancedjava/advancedjava.component';
import { JavaprComponent } from './javapr/javapr.component';
import { AngularintroComponent } from './angularintro/angularintro.component';
import { MysqlComponent } from './mysql/mysql.component';
import { MongodbComponent } from './mongodb/mongodb.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    JavaintroComponent,
    JavabasicsComponent,
    JavaoopsComponent,
    AdvancedjavaComponent,
    JavaprComponent,
    AngularintroComponent,
    MysqlComponent,
    MongodbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
