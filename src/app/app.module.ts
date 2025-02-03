import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LeaveTrackerComponent } from './leave-tracker/leave-tracker.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { DepartmentManagementComponent } from './department-management/department-management.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RoleManagementComponent } from './role-management/role-management.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDirectoryComponent,
    EmployeeProfileComponent,
    LeaveTrackerComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    DepartmentManagementComponent,
    RoleManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
