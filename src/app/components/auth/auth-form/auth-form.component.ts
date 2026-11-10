import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { AuthService } from '../../../services';
import { IUser } from '../../../models';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RouterLink, Router } from '@angular/router';   

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  imports: [AsyncPipe, LoginComponent, RouterLink],
  standalone: true
})
export class AuthFormComponent implements OnInit  {
  currentUser$?: Observable<IUser | null>;
  platformId: Object;
  showModal = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private authService: AuthService,
    private router: Router
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)){ return; }
    this.currentUser$ =  this.authService.currentUser$;
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate([`/`])
  }
  
  showLoginModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
