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
      console.log('Roles loaded:', data);  // Log the data to verify it's correct
      this.roles = data;
    }, (error) => {
      console.error('Error loading roles:', error);  // Log any errors
    });
  }

  addRole(): void {
    console.log('Payload:', this.newRole); // Log the payload for debugging
    this.roleService.addRole(this.newRole).subscribe(
      () => {
        this.loadRoles();
        this.snackBar.open('Role added successfully!', 'Close', {
          duration: 3000,
        });
        this.resetForm();
      },
      (error) => {
        console.error('Error adding role:', error);
        console.error('Error details:', error.error); // Log the error details
        this.snackBar.open('Failed to add role. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    );
  }
  
  resetForm(): void {
    this.newRole = { roleName: '', employees: 0 }; // Reset the form
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
