import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = `${environment.APIBaseURL}/Employees`;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.APIBaseURL}/employees/departments`);
  }
  
  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, employee);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.APIBaseURL}/employees/roles`);
  }
  
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, employee);
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${employeeId}`);
  }
}
