import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employee: any = {};
  departments: any[] = [];
  roles: any[] = [];
  selectedFile: File | null = null;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(+id).subscribe((data) => {
        this.employee = data;
      });
    }

    this.loadDepartments();
    this.loadRoles();
  }

  loadDepartments(): void {
    this.employeeService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  loadRoles(): void {
    this.employeeService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.employee.photo = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee.employeeID, this.employee).subscribe(() => {
      alert('Employee updated successfully!');
      this.router.navigate(['/employees']);
    });
  }
}
