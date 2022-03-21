import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;
  public buttonDisabled: boolean;
  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buttonDisabled = false;
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
      console.log(data.attachment);
      if(data.attachment == null){
        console.log("p");
        this.buttonDisabled = true;
      }else{
        console.log("k");
        this.buttonDisabled = false;
      }
    });
  }

  getNextQuestionByIdAndType(type: String, id: number) {
    let currentUrl = this.router.url;
    if (currentUrl.includes('type')) {
      this.employee = new Employee();
      this.employeService
        .getNextQuestionByIdAndType(type, id)
        .subscribe((data) => {
          this.employee = data;
          if(data.attachment == null){
            console.log("p");
            this.buttonDisabled = true;
          }else{
            console.log("k");
            this.buttonDisabled = false;
          }
        });
    } else {
      this.employee = new Employee();
      this.employeService.getNextQuestionById(id).subscribe((data) => {
        this.employee = data;
        if(data.attachment == null){
          console.log("p");
          this.buttonDisabled = true;
        }else{
          console.log("k");
          this.buttonDisabled = false;
        }
      });
    }
  }

  getPreviousQuestionByIdAndType(type: String, id: number) {
    let currentUrl = this.router.url;
    if (currentUrl.includes('type')) {
      this.employee = new Employee();
      this.employeService
        .getPreviousQuestionByIdAndType(type, id)
        .subscribe((data) => {
          this.employee = data;
          if(data.attachment == null){
            console.log("p");
            this.buttonDisabled = true;
          }else{
            console.log("k");
            this.buttonDisabled = false;
          }
        });
    } else {
      this.employee = new Employee();
      this.employeService.getPreviousQuestionById(id).subscribe((data) => {
        this.employee = data;
        if(data.attachment == null){
          console.log("p");
          this.buttonDisabled = true;
        }else{
          console.log("k");
          this.buttonDisabled = false;
        }
      });
    }
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  checkButton(employee){
    
  }

}
