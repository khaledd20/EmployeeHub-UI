import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Check if the user is logged in when the app loads
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
