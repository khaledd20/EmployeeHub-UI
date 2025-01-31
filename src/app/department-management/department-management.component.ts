import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DepartmentService } from '../services/department.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.scss'],
})
export class DepartmentManagementComponent  implements OnInit {
  departments: any[] = [];
  newDepartment: any = { DepartmentName: '', ManagerID: '' };

  constructor(
    private departmentService: DepartmentService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  addDepartment(): void {
    this.departmentService.addDepartment(this.newDepartment).subscribe(() => {
      this.loadDepartments();
      this.snackBar.open('Department added successfully!', 'Close', {
        duration: 3000,
      });
    });
  }

  editDepartment(department: any): void {
    // Open dialog for editing (You can implement a modal/dialog for editing)
  }

  deleteDepartment(id: number): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.loadDepartments();
      this.snackBar.open('Department deleted successfully!', 'Close', {
        duration: 3000,
      });
    });
  }
}
