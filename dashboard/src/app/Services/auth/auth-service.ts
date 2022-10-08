import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  isLoggedIn: boolean = false;
  constructor(private router: Router, private http: HttpClient) {}

  /*
   *  getLocalStorageUser function is used to get local user data.
   */
  getLocalStorageUser() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if (this.userData) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  /*
   *  login function is used to signin user.
   */
  login(user) {
    let data = {
      username: user.username,
      password: user.password,
    };
    this.http.post(environment.LOGIN_ADMIN_API, data).subscribe((data) => {
      this.setLocalUserProfile(data);
      this.router.navigate(['/']);
    });
  }

  /*
   * setLocalUserProfile function is used to set local user profile data.
   */
  setLocalUserProfile(userdata) {
    localStorage.setItem(
      'userData',
      JSON.stringify(userdata.accessToken.payload)
    );
    localStorage.setItem(
      'accessToken',
      JSON.stringify(userdata.accessToken.jwtToken)
    );
    this.getLocalStorageUser();
    this.isLoggedIn = true;
  }
}
