import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-employee-leave-tracker',
  templateUrl: './employee-leave-tracker.component.html',
  styleUrls: ['./employee-leave-tracker.component.scss']
})
export class EmployeeLeaveTrackerComponent implements OnInit {
  leaveRequests: any[] = [];
  
  newLeaveRequest = { 
    startDate: '',
    endDate: '',
    status: 'Pending' // Default to Pending
  };

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.loadEmployeeLeaveRequests();
  }

  loadEmployeeLeaveRequests(): void {
    const employeeId = localStorage.getItem('employeeId'); // Get logged-in employee ID

    if (!employeeId) {
      alert('Employee ID not found. Please log in again.');
      return;
    }

    this.leaveRequestService.getEmployeeLeaveRequests(employeeId).subscribe({
      next: (data) => {
        console.log('Fetched Employee Leave Requests:', data);
        this.leaveRequests = data;
      },
      error: (error) => {
        console.error('Error loading employee leave requests', error);
      }
    });
  }

  submitLeaveRequest(): void {
    const employeeId = localStorage.getItem('employeeId'); // Get logged-in employee ID

    if (!employeeId) {
      alert('Employee ID is missing. Please log in again.');
      return;
    }

    const leaveRequest = {
      ...this.newLeaveRequest,
      employeeId: Number(employeeId) // Ensure Employee ID is a number
    };

    this.leaveRequestService.createLeaveRequest(leaveRequest).subscribe({
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
}
