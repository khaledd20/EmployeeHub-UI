import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveTrackerComponent } from './leave-tracker/leave-tracker.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DepartmentManagementComponent } from './department-management/department-management.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeDirectoryComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: EmployeeProfileComponent, canActivate: [AuthGuard] },
  { path: 'leave-tracker', component: LeaveTrackerComponent, canActivate: [AuthGuard] },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'edit-employee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard] },
  { path: '/departments', component: DepartmentManagementComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' }  // Redirect any unknown route to login


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

