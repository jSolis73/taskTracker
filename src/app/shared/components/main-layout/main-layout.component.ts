import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['login'])
  }
}
