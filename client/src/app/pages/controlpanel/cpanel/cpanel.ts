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
    private cdr: ChangeDetectorRef
  ) {}

  showLoginForm() {
    this.showLogin = true;
    this.showForgot = false;
    this.clearMessages();
  }

  showForgotForm() {
    this.showLogin = false;
    this.showForgot = true;
    this.clearMessages();
  }

  clearMessages() {
    this.loginError = '';
    this.forgotError = '';
    this.forgotSuccess = '';
    this.cdr.detectChanges();
  }

  // LOGIN SUBMIT
  onLoginSubmit() {
    this.loginError = '';

    if (!this.username || !this.password) {
      this.loginError = 'Username and Password required';
      this.cdr.detectChanges();
      return;
    }

    this.cpanelService.getUserByUsername(this.username).subscribe({
      next: (user: any) => {
        if (user.password === this.password) {
          // Store login info in localStorage
          localStorage.setItem('admin', JSON.stringify({ username: this.username }));

          // Navigate to dashboard
          this.router.navigate(['/admindashboard']);
        } else {
          this.loginError = 'Invalid username or password';
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        if (err.status === 404) {
          this.loginError = err.error || 'Invalid username or password';
        } else if (err.status === 400) {
          this.loginError = err.error || 'Bad request';
        } else {
          this.loginError = 'Server error, try again later';
        }
        this.cdr.detectChanges();
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
      this.cdr.detectChanges();
    }, 1000);
  }

logout() {
  localStorage.removeItem('admin'); // ✅ correct key
  this.router.navigate(['/cpanel']);
}


}
