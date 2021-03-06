import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-advancedjava',
  templateUrl: './advancedjava.component.html',
  styleUrls: ['./advancedjava.component.css'],
})
export class AdvancedjavaComponent implements OnInit {
  employee: Employee = new Employee();
  employees: Employee[];
  file: File = null;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService
      .getEmployeesListByType('Advanced Java')
      .subscribe((data) => {
        this.employees = data;
        console.log(this.employees);
      });
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details/type', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    let dl = confirm('Are you sure that you want to delete this Question?');
    if (dl) {
      this.employeeService.deleteEmployee(id).subscribe((data) => {
        console.log(data);
        this.getEmployees();
      });
    }
  }

  swap() {
    console.log('Piyush');
    console.log(this.employees);
    var selectedItem: number[] = new Array(100);
    var pos: number = 0;
    for (var i = 0; i < this.employees.length; i++) {
      if (this.employees[i].Checked) {
        console.log('C ' + this.employees[i].id);
        selectedItem[pos] = this.employees[i].id;
        pos++;
      }
    }

    var id1: number = selectedItem[0];
    var id2: number = selectedItem[1];

    this.swapEmployee(id1, id2);
  }
  swapEmployee(id1: number, id2: number) {
    this.employeeService.swapEmployee(id1, id2).subscribe((data) => {
      this.getEmployees();
    });
  }

  onFilechange(event: any) {
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }

  upload(id: number) {
    console.log(id);
    if (this.file) {
      this.employeeService.uploadFile(id, this.file).subscribe(
        (data) => {
          //this.getEmployees();
          location.reload();
        },
        (error) => console.log(error)
      );
    } else {
    }
  }
}
