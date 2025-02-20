import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.scss'],
})
export class EmployeeDirectoryComponent implements OnInit {
  employees: any[] = []; // To store employee data

  constructor(private employeeService: EmployeeService) {}

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
}
