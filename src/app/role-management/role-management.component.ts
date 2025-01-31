import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss'],
})
export class RoleManagementComponent implements OnInit {
  roles: any[] = [];
  newRole: any = { RoleName: '' };

  constructor(
    private roleService: RoleService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {
    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }

  addRole(): void {
    this.roleService.addRole(this.newRole).subscribe(() => {
      this.loadRoles();
      this.snackBar.open('Role added successfully!', 'Close', {
        duration: 3000,
      });
    });
  }

  editRole(role: any): void {
    // Open dialog for editing (You can implement a modal/dialog for editing)
  }

  deleteRole(id: number): void {
    this.roleService.deleteRole(id).subscribe(() => {
      this.loadRoles();
      this.snackBar.open('Role deleted successfully!', 'Close', {
        duration: 3000,
      });
    });
  }
}
