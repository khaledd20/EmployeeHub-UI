import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.scss'],
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: any[] = []; // To store employee data

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.employees = data; // Assign fetched data to employees array
        console.log('Employees:', this.employees); // Debugging
      },
      (error) => {
        console.error('Error fetching employees:', error); // Handle errors
      }
    );
  }

  editEmployee(id: number): void {
    this.router.navigate(['/edit-employee', id]);
  }

  confirmDelete(employeeId: number) {
    const confirmed = confirm('Are you sure you want to delete this employee?');
    if (confirmed) {
      this.deleteEmployee(employeeId);
    }
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== employeeId);
        alert('Employee deleted successfully');
      },
      error: () => {
        alert('Failed to delete employee');
      },
    });
  }

}
