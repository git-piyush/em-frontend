import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-javacollections',
  templateUrl: './javacollections.component.html',
  styleUrls: ['./javacollections.component.css']
})
export class JavacollectionsComponent implements OnInit {

  employee: Employee = new Employee();
  employees: Employee[];


  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesListByType("Collections").subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details/type', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    let dl = confirm("Are you sure that you want to delete this Question?");
    if(dl){
      this.employeeService.deleteEmployee(id).subscribe( data => {
        console.log(data);
        this.getEmployees();
      })
    }
  }

}