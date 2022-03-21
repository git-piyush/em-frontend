import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee: Employee = new Employee();
  employees: Employee[];
  users:any;
  p: number = 1;
  total: number = 0;
  file: File = null;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    //this.getEmployees();
    this.getQuestions()
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  private getEmployeesListByType(lastName: String){
    this.employeeService.getEmployeesListByType(lastName).subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
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

  onSubmitMethod(){
    console.log("hello world");
    console.log(this.employee.lastName);
    this.getEmployeesListByType(this.employee.lastName);
  }

  swap() {
    console.log("Piyush");
    console.log(this.employees);
    var selectedItem:number[] = new Array(100);
    var pos:number = 0;
    for(var i = 0;i<this.employees.length;i++) { 
      if(this.employees[i].Checked){
        console.log("C "+this.employees[i].id);
        selectedItem[pos] = this.employees[i].id;
        pos++;
      }
   }
  
   var id1:number = selectedItem[0];
   var id2:number = selectedItem[1];

   this.swapEmployee(id1, id2);
}
swapEmployee(id1:number, id2:number){
  
  this.employeeService.swapEmployee(id1, id2).subscribe( data => {
    this.employees = data;
  })

  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getQuestions();
}

getQuestions(){
  this.employeeService.getQuestions(this.p)
    .subscribe((response: any) => {
      this.employees = response.data;
      this.total = response.totalElement;
    });
} 

onFilechange(event: any) {
  console.log(event.target.files[0])
  this.file = event.target.files[0]
  }

  upload(id:number) {
    console.log(id);
    if(this.file){
      this.employeeService.uploadFile(id, this.file).subscribe( data =>{
        this.getEmployees();
      }
      , error => console.log(error));
    }else{

    }
  }
}
