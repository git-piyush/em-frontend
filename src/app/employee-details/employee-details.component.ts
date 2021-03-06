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
  buttonText:string;
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
      if (data.attachment == null) {
        this.buttonText = "Attachment Not Available";
        this.buttonDisabled = true;
      } else {
        this.buttonText = "See Attachment";
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
          if (data.attachment == null) {
            this.buttonText = "Attachment Not Available";
            this.buttonDisabled = true;
          } else {
            this.buttonText = "See Attachment";
            this.buttonDisabled = false;
          }
        });
    } else {
      this.employee = new Employee();
      this.employeService.getNextQuestionById(id).subscribe((data) => {
        this.employee = data;
        if (data.attachment == null) {
          this.buttonText = "Attachment Not Available";
          this.buttonDisabled = true;
        } else {
          this.buttonText = "See Attachment";
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
          if (data.attachment == null) {
            this.buttonText = "Attachment Not Available";
            this.buttonDisabled = true;
          } else {
            this.buttonText = "See Attachment";
            this.buttonDisabled = false;
          }
        });
    } else {
      this.employee = new Employee();
      this.employeService.getPreviousQuestionById(id).subscribe((data) => {
        this.employee = data;
        if (data.attachment == null) {
          this.buttonText = "Attachment Not Available";
          this.buttonDisabled = true;
        } else {
          this.buttonText = "See Attachment";
          this.buttonDisabled = false;
        }
      });
    }
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  download(id:number) {
    console.log(id);
    this.employeService.downloadFile(id).subscribe(response => {
			let file = new Blob([response], { type: 'image/png' });
      var fileURL = URL.createObjectURL(file);
			window.open(fileURL);
			//fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  }

}
