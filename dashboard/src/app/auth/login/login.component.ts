import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(user) {
    this.authService.login(user);
  }
}
