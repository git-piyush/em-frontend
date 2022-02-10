import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "https://employeee-management.herokuapp.com/api/v1/piyush";
  //private baseURL = "http://localhost:8080/api/v1/piyush";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  getEmployeesListByType(lastName: String): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/bytype/${lastName}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  getNextQuestionById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/next/${id}`);
  }

  getNextQuestionByIdAndType(type:String,id: number): Observable<Employee>{
    console.log(type);
    console.log(id);
    return this.httpClient.get<Employee>(`${this.baseURL}/next/${type}/${id}`);
  }

  getPreviousQuestionById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/previous/${id}`);
  }

  getPreviousQuestionByIdAndType(type:String,id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/previous/${type}/${id}`);
  }


  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  
}
