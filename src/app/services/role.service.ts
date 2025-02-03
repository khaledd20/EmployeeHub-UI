import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = `${environment.APIBaseURL}/Roles`;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addRole(role: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, role);
  }

  updateRole(id: number, role: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, role);
  }

  deleteRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
