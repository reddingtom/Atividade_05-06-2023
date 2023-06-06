import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users: User = new User();
  constructor(private authservice: AuthService){}
  ngOnInit(): void {}
  // Metodo: fazerlogin
  login() {
    console.log(this.users);
    this.authservice.checkIn(this.users);

  }
}
