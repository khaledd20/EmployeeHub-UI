import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestService {
  private baseUrl = `${environment.APIBaseURL}/LeaveRequests`;

  constructor(private http: HttpClient) {}

  // Get all leave requests
  getLeaveRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl, { headers: this.getHeaders() });
  }

  // Get a single leave request by LeaveRequestID
  getLeaveRequest(leaveRequestID: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${leaveRequestID}`, { headers: this.getHeaders() });
  }

  // Get leave requests for a specific employee
getEmployeeLeaveRequests(employeeId: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/employee/${employeeId}`, { headers: this.getHeaders() });
}

  // Create a new leave request
  createLeaveRequest(leaveRequest: any): Observable<any> {
    leaveRequest.employeeId = Number(leaveRequest.employeeId); // Ensure it's a number
    return this.http.post<any>(this.baseUrl, leaveRequest, { headers: this.getHeaders() });
  }

  // Update an existing leave request
  updateLeaveRequest(leaveRequestID: number, leaveRequest: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${leaveRequestID}`, leaveRequest, { headers: this.getHeaders() });
  }

  // Delete a leave request
  deleteLeaveRequest(leaveRequestID: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${leaveRequestID}`, { headers: this.getHeaders() });
  }

  // Function to get headers with the token
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }
}
