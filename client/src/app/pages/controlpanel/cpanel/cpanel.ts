import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CpanelServiceService } from '../../../services/adminService/cpanelService/cpanel-service.service';

@Component({
  selector: 'app-cpanel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cpanel.html',
  styleUrls: ['./cpanel.css'],
})
export class Cpanel {
  showLogin = true;
  showForgot = false;

  username = '';
  password = '';
  loginError = '';

  forgotEmail = '';
  forgotError = '';
  forgotSuccess = '';

  constructor(
    private cpanelService: CpanelServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef // 👈 add ChangeDetectorRef
  ) {}

  showLoginForm() {
    this.showLogin = true;
    this.showForgot = false;
  }

  showForgotForm() {
    this.showLogin = false;
    this.showForgot = true;
  }

  // LOGIN SUBMIT
  onLoginSubmit() {
    this.loginError = '';

    if (!this.username || !this.password) {
      this.loginError = 'Username and Password required';
      this.cdr.detectChanges(); // 👈 force UI update
      return;
    }

    this.cpanelService.getUserByUsername(this.username).subscribe({
      next: (user: any) => {
        if (user.password === this.password) {
          this.router.navigate(['/admindashboard']);
        } else {
          this.loginError = 'Invalid username or password';
        }
        this.cdr.detectChanges(); // 👈 update view after async
      },
      error: (err) => {
        if (err.status === 404) {
          this.loginError = err.error || 'Invalid username or password';
        } else if (err.status === 400) {
          this.loginError = err.error || 'Bad request';
        } else {
          this.loginError = 'Server error, try again later';
        }
        this.cdr.detectChanges(); // 👈 update view after async
      }
    });
  }

  // FORGOT PASSWORD SUBMIT
  onForgotSubmit() {
    this.forgotError = '';
    this.forgotSuccess = '';

    if (!this.forgotEmail) {
      this.forgotError = 'Email required';
      this.cdr.detectChanges();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.forgotEmail)) {
      this.forgotError = 'Invalid email';
      this.cdr.detectChanges();
      return;
    }

    // Simulate backend email sending
    setTimeout(() => {
      this.forgotSuccess = `Reset link sent to ${this.forgotEmail}`;
      this.forgotEmail = '';
      this.cdr.detectChanges(); // 👈 ensure UI refresh after async
    }, 1000);
  }
}
