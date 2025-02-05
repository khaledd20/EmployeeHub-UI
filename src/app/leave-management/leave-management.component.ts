import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from '../services/leave-request.service';

@Component({
  selector: 'app-admin-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.scss']
})
export class AdminLeaveManagementComponent implements OnInit {
  leaveRequests: any[] = [];

  constructor(private leaveRequestService: LeaveRequestService) {}

  ngOnInit(): void {
    this.loadAllLeaveRequests();
  }

  loadAllLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe({
      next: (data) => {
        console.log('Fetched All Leave Requests:', data);
        this.leaveRequests = data;
      },
      error: (error) => {
        console.error('Error loading leave requests', error);
      }
    });
  }

  updateRequestStatus(request: any, status: string): void {
    request.status = status;

    this.leaveRequestService.updateLeaveRequest(request.leaveRequestID, request).subscribe({
      next: () => {
        alert(`Request updated to ${status}`);
      },
      error: (error) => {
        console.error('Error updating leave request', error);
      }
    });
  }

  deleteLeaveRequest(leaveRequestID: number): void {
    if (confirm('Are you sure you want to delete this leave request?')) {
      this.leaveRequestService.deleteLeaveRequest(leaveRequestID).subscribe({
        next: () => {
          this.leaveRequests = this.leaveRequests.filter(lr => lr.leaveRequestID !== leaveRequestID);
          alert('Leave request deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting leave request', error);
        }
      });
    }
  }
}
