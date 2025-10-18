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
  donationAmount = 50;
  card = {
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  };
  isRecurring = false;

  submitDonation() {
    alert(`Donated $${this.donationAmount} successfully.`);
  }
}
