import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  constructor(private route: ActivatedRoute, private employeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

  getNextQuestionByIdAndType(type:String, id: number){
    let currentUrl = this.router.url;
    if(currentUrl.includes("type")){
      this.employee = new Employee();
      this.employeService.getNextQuestionByIdAndType(type,id).subscribe( data => {
        this.employee = data;
      });
    }else{
      this.employee = new Employee();
      this.employeService.getNextQuestionById(id).subscribe( data => {
        this.employee = data;
      });
    }
      
  }

  getPreviousQuestionByIdAndType(type:String, id: number){
    
    let currentUrl = this.router.url;
    if(currentUrl.includes("type")){
      this.employee = new Employee();
      this.employeService.getPreviousQuestionByIdAndType(type,id).subscribe( data => {
        this.employee = data;
      });
    }else{
      this.employee = new Employee();
    this.employeService.getPreviousQuestionById(id).subscribe( data => {
      this.employee = data;
    }); 
    } 
  } 


  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);   
  }

}
