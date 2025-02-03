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
    employeeID: null, // Updated to match API
    startDate: '',
    endDate: '',
    status: 'Pending'
  };

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.loadLeaveRequests();
  }

  loadLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe({
      next: (data) => {
        console.log('Fetched Leave Requests:', data); // Debugging log
        this.leaveRequests = data;
      },
      error: (error) => {
        console.error('Error loading leave requests', error);
      }
    });
  }

  submitLeaveRequest(): void {
    const payload = {
        employeeID: this.newLeaveRequest.employeeID,
        managerID: 2, // Hardcoded or select from dropdown
        startDate: this.newLeaveRequest.startDate,
        endDate: this.newLeaveRequest.endDate,
        status: this.newLeaveRequest.status
    };

    this.leaveRequestService.createLeaveRequest(payload).subscribe({
        next: (data) => {
            console.log("Added successfully", data);
            this.leaveRequests.push(data);
            alert("Leave request added!");
        },
        error: (error) => {
            console.error("Error:", error);
            alert("Error adding leave request: " + error.error);
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
