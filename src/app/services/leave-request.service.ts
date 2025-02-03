import { HttpClient } from '@angular/common/http';
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
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get a single leave request by LeaveRequestID
  getLeaveRequest(leaveRequestID: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${leaveRequestID}`);
  }

  // Create a new leave request
  createLeaveRequest(leaveRequest: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, leaveRequest);
  }

  // Update an existing leave request
  updateLeaveRequest(leaveRequestID: number, leaveRequest: any): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${leaveRequestID}`, leaveRequest);
  }

  // Delete a leave request
  deleteLeaveRequest(leaveRequestID: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${leaveRequestID}`);
  }
}
