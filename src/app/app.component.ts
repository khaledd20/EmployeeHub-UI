import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  userRole: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkUserLoginStatus();
  }

  checkUserLoginStatus(): void {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
    this.userRole = localStorage.getItem('role'); // Retrieve role from storage
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('employeeId');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
