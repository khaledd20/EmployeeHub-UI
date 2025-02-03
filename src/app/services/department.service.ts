import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private baseUrl = `${environment.APIBaseURL}/Departments`;

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addDepartment(department: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, department);
  }

  updateDepartment(id: number, department: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, department);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
