import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { AuthService, FormsService } from '../../../services';
import { IAuthResponse } from '../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {
  @Output() closed = new EventEmitter<void>();
  
  isLoginMode = true;
  isLoading = false;
  errorMessage = '';
  
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private formsService: FormsService,
    private router: Router
  ) {
    this.form = this.formsService.createLoginForm()
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  close(): void {
    this.closed.emit();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.authService.login(this.form.value).subscribe({
        next: (response: IAuthResponse) => {
          this.close();
          this.router.navigate([`/${response.user.id}`])
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Ошибка входа';
        }
      });
    }
  }
}
