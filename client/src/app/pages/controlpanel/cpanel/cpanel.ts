import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Mode = 'login' | 'register' | 'forgot';

@Component({
  selector: 'app-cpanel',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './cpanel.html',
  styleUrls: ['./cpanel.css'],
})
export class Cpanel {
  // Current form mode
  mode: Mode = 'login';

  // Form fields
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Messages
  errorMessage: string = '';
  successMessage: string = '';

  // Loading state to simulate async processing
  loading = false;

  // Switch between modes and reset form + messages
  switchMode(to: Mode): void {
    if (this.loading) return; // prevent switching during loading
    this.mode = to;
    this.clearForm();
  }

  // Clear all form fields and messages
  clearForm(): void {
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
    this.successMessage = '';
  }

  // Form submit handler
  onSubmit(): void {
    if (this.loading) return;

    this.errorMessage = '';
    this.successMessage = '';
    this.loading = true;

    setTimeout(() => {
      if (this.mode === 'forgot') {
        // Validate email for password reset
        if (!this.email.trim()) {
          this.errorMessage = 'Email is required.';
          this.loading = false;
          return;
        }
        if (!this.isValidEmail(this.email)) {
          this.errorMessage = 'Please enter a valid email address.';
          this.loading = false;
          return;
        }
        // Simulate sending password reset email
        this.successMessage = `Password reset link sent to ${this.email}`;
        this.loading = false;
        return;
      } else {
        // Validate username for login and register
        if (!this.username.trim()) {
          this.errorMessage = 'Username is required.';
          this.loading = false;
          return;
        }

        if (this.mode === 'login') {
          if (!this.password.trim()) {
            this.errorMessage = 'Password is required.';
            this.loading = false;
            return;
          }

          // Simulate login validation with username
          if (this.username === 'testuser' && this.password === 'password') {
            alert('✅ Login successful!');
            this.clearForm();
          } else {
            this.errorMessage = 'Invalid username or password.';
          }
        } else if (this.mode === 'register') {
          if (!this.password.trim() || !this.confirmPassword.trim()) {
            this.errorMessage = 'All fields are required.';
            this.loading = false;
            return;
          }

          if (this.password !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match.';
            this.loading = false;
            return;
          }

          alert(`✅ Registered successfully as: ${this.username}`);
          this.switchMode('login');
          this.loading = false;
          return;
        }
      }

      this.loading = false;
    }, 1000);
  }

  // Simple email format validation using regex
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
