import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services';
import { IUser } from '../../../models';


@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
  standalone: false
})
export class AuthFormComponent implements OnInit  {
  currentUser$?: Observable<IUser | null>;
  platformId: Object;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private authService: AuthService,
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)){ return; }
    this.currentUser$ =  this.authService.currentUser$;
  }
  
  logout(): void {
    this.authService.logout();
  }
}