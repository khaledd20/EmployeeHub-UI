import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent {
  employee = {
    firstName: '',
    lastName: '',
    departmentID: null,
    roleID: null,
    email: '',
  };

  constructor(private employeeService: EmployeeService) {}

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe((data) => {
      console.log('Employee added successfully!', data);
    });
  }
}
