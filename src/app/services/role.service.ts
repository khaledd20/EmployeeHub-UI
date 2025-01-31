import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private baseUrl = 'http://localhost:5265/api/roles';

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
