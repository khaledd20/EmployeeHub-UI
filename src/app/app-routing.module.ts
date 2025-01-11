import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveTrackerComponent } from './leave-tracker/leave-tracker.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeDirectoryComponent },
  { path: 'profile/:id', component: EmployeeProfileComponent },
  { path: 'leave-tracker', component: LeaveTrackerComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent }, // New Route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

