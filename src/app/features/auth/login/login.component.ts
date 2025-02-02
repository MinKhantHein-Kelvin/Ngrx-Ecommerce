import { Router } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest, LoginResponse } from '../../../core/models/auth';
import { lastValueFrom } from 'rxjs';
import { CONSTANTS } from '../../../core/constants/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  isLoading: boolean = false;
  isSubmitted: boolean = false;
  authService = inject(AuthService);
  cdr = inject(ChangeDetectorRef);
  router = inject(Router);
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get fc() {
    return this.loginForm.controls;
  }

  async submitForm() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    try {
      this.isLoading = true;
      const payload: LoginRequest = {
        username: this.loginForm.value.username || '',
        password: this.loginForm.value.password || ''
      };
      const res: LoginResponse = await lastValueFrom(this.authService.login(payload));
      if (res) {
        localStorage.setItem(CONSTANTS.auth_token, res.token);
        this.router.navigate(['/admin/dashboard'])
      }

    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      this.isLoading = false;
      this.cdr.detectChanges();
    }
  }
}
