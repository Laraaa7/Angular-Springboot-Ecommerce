import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-status.html',
  styleUrls: ['./login-status.css']
})
export class LoginStatus implements OnInit {

  isAuthenticated = false;
  userFullName = '';

  constructor(public auth: AuthService) {}


  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(authenticated => {
      this.isAuthenticated = authenticated;

      if (authenticated) {
        this.getUserDetails();
      }
    });
  }

  getUserDetails() {
    this.auth.user$.subscribe(user => {
      if (user?.name) {
        this.userFullName = user.name;
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  }
}
