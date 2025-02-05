import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveTrackerComponent } from './old-leave-tracker/leave-tracker.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { EmployeeLeaveTrackerComponent } from './employee-leave-tracker/employee-leave-tracker.component';
import { AdminLeaveManagementComponent } from './leave-management/leave-management.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeDirectoryComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: EmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'leave-tracker', component: LeaveTrackerComponent, canActivate: [AuthGuard] },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'edit-employee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'departments', component: DepartmentManagementComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RoleManagementComponent, canActivate: [AuthGuard] },
  { path: 'employee-leave-tracker', component: EmployeeLeaveTrackerComponent, canActivate: [AuthGuard] },
  { path: 'leave-managment', component: AdminLeaveManagementComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' }  // Redirect any unknown route to login


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

