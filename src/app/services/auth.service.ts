import { IUser, ILoginRequest, IAuthResponse, IRegisterRequest } from '../models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<IUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'current_user';
  private jwtHelper = new JwtHelperService();
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.loadStoredAuth();
    }
  }

  login(credentials: ILoginRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('/api/auth/login', credentials)
      .pipe(
        tap(response => this.setAuth(response))
      );
  }
 
  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(this.TOKEN_KEY);
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }

  isAdmin(): boolean {
    const user = this.currentUserSubject.getValue();
    return user?.role === 'admin';
  }

  register(userData: IRegisterRequest): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('/api/auth/register', userData)
      .pipe(
        tap(response => this.setAuth(response))
      );
  }

  private setAuth(authData: IAuthResponse): void {
    if (this.isBrowser) {
      localStorage.setItem(this.TOKEN_KEY, authData.token);
      localStorage.setItem(this.USER_KEY, JSON.stringify(authData.user));
    }
    this.currentUserSubject.next(authData.user);
  }

  private loadStoredAuth(): void {
    const token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const userJson = localStorage.getItem(this.USER_KEY);
      if (userJson) {
        try {
          const user = JSON.parse(userJson);
          this.currentUserSubject.next(user);
        } catch {
          this.clearStoredAuth();
        }
      }
    } else {
      this.clearStoredAuth();
    }
  }

  private clearStoredAuth(): void {
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }
}