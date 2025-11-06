import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  constructor(public auth: AuthService) {}

  login() {
    this.auth.loginWithRedirect();
  }
}
