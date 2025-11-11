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

  isAuthenticated: boolean = false;
  userFullName: string = '';

  storage: Storage = sessionStorage;

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
        this.userFullName = user.name as string;

        // obtener el email del usuario de la respuesta de autenticación
        const theEmail = user.email;

        // almacenar el email en el almacenamiento del navegador
        this.storage.setItem('userEmail', JSON.stringify(theEmail));
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
