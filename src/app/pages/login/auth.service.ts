import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = false;

  constructor(private router: Router) {}

  checkIn(user: User){
    if (user.username === 'suport@12751' && user.password === '161275120222' ) {
      this.userAuth = true;
      alert("Bem Vindos!! Você será direcionado para o painel de controle.");
      this.router.navigate(['B51D0FFD27FD1DE27F17998FEC81731C49658DE278EFD0E6DB107977098AC18E'])
    } else {
      this.userAuth = false;
      alert("Login e senha inválidos, digite novamente!");
    }
  }
}
