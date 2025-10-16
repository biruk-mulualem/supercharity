import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { FormsModule } from '@angular/forms';  // Correct import (no FormControl needed here)

@Component({
  selector: 'app-donation',
  standalone: true,  // Needed because you use 'imports' in component metadata
  imports: [Header, Footercard, FormsModule],
  templateUrl: './donation.html',
  styleUrls: ['./donation.css']  // Note plural 'styleUrls'
})
export class Donation {
 donation = {
    name: '',
    email: '',
    amount: null as number | null,
  };

  message = '';
  loading = false;
  error = '';

  presetAmounts = [50, 100, 250, 500, 1000];

  selectAmount(amount: number) {
    this.donation.amount = amount;
  }

  validateEmail(email: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  async submitDonation() {
    this.error = '';
    this.message = '';

    // Basic validation
    if (!this.donation.name.trim()) {
      this.error = 'Please enter your name.';
      return;
    }
    if (!this.validateEmail(this.donation.email)) {
      this.error = 'Please enter a valid email.';
      return;
    }
    if (!this.donation.amount || this.donation.amount < 1) {
      this.error = 'Please enter a valid donation amount.';
      return;
    }

    this.loading = true;

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success message
      this.message = `🙏 Thank you, ${this.donation.name}! Your donation of ETB ${this.donation.amount} is appreciated.`;
      this.donation = { name: '', email: '', amount: null };
    } catch (e) {
      this.error = 'Something went wrong. Please try again later.';
    } finally {
      this.loading = false;
    }
  }
}
