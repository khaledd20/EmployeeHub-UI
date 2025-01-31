import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);

        if (response.role === 'Admin') {
          this.router.navigate(['/employees']);
        } else if (response.role === 'HR') {
          this.router.navigate(['/team']);
        } else if (response.role === 'Employee') {
          this.router.navigate(['/profile']);
        }
      },
      error: () => {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
