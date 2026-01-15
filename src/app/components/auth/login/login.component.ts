import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services';

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
  
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  switchMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  close(): void {
    this.closed.emit();
  }

  onSubmit(): void {
    console.log('!!loginForm=', this.loginForm)
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.close();
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error?.message || 'Ошибка входа';
        }
      });
    }
  }
}
