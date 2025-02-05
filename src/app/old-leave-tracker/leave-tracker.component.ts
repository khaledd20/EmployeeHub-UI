import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-leave-tracker',
  templateUrl: './leave-tracker.component.html',
  styleUrls: ['./leave-tracker.component.scss']
})
export class LeaveTrackerComponent implements OnInit {
  leaveRequests: any[] = [];
  
  newLeaveRequest = { // Define the structure of a leave request
    employeeId: '', // Initialize employeeId as a string
    startDate: '',
    endDate: '',
    status: 'Pending' // User can set status if needed, otherwise it can default to 'Pending' in backend
  };

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe({
      next: (data) => {
        console.log('Fetched Leave Requests:', data);
        this.leaveRequests = data;
      },
      error: (error) => {
        console.error('Error loading leave requests', error);
      }
    });
  }

  submitLeaveRequest(): void {
  // Retrieve the employeeId from storage (this should be set during the login process)
  this.newLeaveRequest.employeeId = localStorage.getItem('employeeId') || '';

  if (!this.newLeaveRequest.employeeId) {
    alert('Employee ID is not available. Please log in again.');
    return;
  }

  this.leaveRequestService.createLeaveRequest(this.newLeaveRequest).subscribe({
    next: (data) => {
      console.log("Leave request added successfully", data);
      this.leaveRequests.push(data); // Update the list with the new request
      alert("Leave request added successfully!");
    },
    error: (error) => {
      console.error("Error adding leave request:", error);
      alert("Error adding leave request: " + (error.error || 'Unknown Error'));
    }
  });
}

  
  
  deleteLeaveRequest(leaveRequestID: number): void {
    this.leaveRequestService.deleteLeaveRequest(leaveRequestID).subscribe({
      next: () => {
        this.leaveRequests = this.leaveRequests.filter(lr => lr.leaveRequestID !== leaveRequestID);
        alert('Leave request deleted successfully');
      },
      error: (error) => {
        console.error('Failed to delete leave request', error);
        alert('Error deleting leave request');
      }
    });
  }
}
