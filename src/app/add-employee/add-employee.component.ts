import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    photo: '',
    departmentID: null,
    roleID: null,
    email: '',
  };

  departments: any[] = []; // Array to store department data
  roles: any[] = []; // Array to store role data
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadRoles();
  }

  // Load departments from the backend
  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe({
      next: (data) => {
        this.departments = data;
      },
      error: (err) => {
        console.error('Failed to load departments:', err);
        this.errorMessage = 'Failed to load departments. Please try again.';
      },
    });
  }

  // Load roles from the backend
  loadRoles(): void {
    this.employeeService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
      },
      error: (err) => {
        console.error('Failed to load roles:', err);
        this.errorMessage = 'Failed to load roles. Please try again.';
      },
    });
  }

  addEmployee(): void {
    if (this.isValidForm()) {
      this.employeeService.addEmployee(this.employee).subscribe({
        next: (data) => {
          console.log('Employee added successfully!', data);
          this.successMessage = 'Employee added successfully!';
          this.errorMessage = null;
          this.resetForm();
        },
        error: (err) => {
          console.error('Error adding employee:', err);
          this.errorMessage = 'Failed to add employee. Please try again.';
          this.successMessage = null;
        },
      });
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
      this.successMessage = null;
    }
  }

  isValidForm(): boolean {
    return (
      !!this.employee.firstName.trim() &&
      !!this.employee.lastName.trim() &&
      this.employee.phoneNumber.trim() !== '' &&
      this.employee.address.trim() !== '' &&
      this.employee.photo.trim() !== '' &&
      this.employee.departmentID !== null &&
      this.employee.roleID !== null &&
      !!this.employee.email.trim()
    );
  }

  resetForm(): void {
    this.employee = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      photo: '',
      departmentID: null,
      roleID: null,
      email: '',
    };
    this.successMessage = null;
    this.errorMessage = null;
  }

  // Handle photo upload and convert it to base64
  onPhotoSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.employee.photo = reader.result as string; // Store photo as base64 string
      };
      reader.readAsDataURL(file);
    }
  }
}
