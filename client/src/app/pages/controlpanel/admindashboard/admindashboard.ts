
import { Aboutuscard } from '../../../components/admindashboard/aboutuscard/aboutuscard';
import { Articlecard } from '../../../components/admindashboard/articlecard/articlecard';
import { Audiocard } from '../../../components/admindashboard/audiocard/audiocard';
import { Contactuscard } from '../../../components/admindashboard/contactuscard/contactuscard';
import { Gallerycard } from '../../../components/admindashboard/gallerycard/gallerycard';

import { Videocard } from '../../../components/admindashboard/videocard/videocard';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cpanel } from '../cpanel/cpanel';
@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [CommonModule,Aboutuscard,Articlecard,Audiocard,Contactuscard,Gallerycard,Videocard,Cpanel],
  templateUrl: './admindashboard.html',
  styleUrls: ['./admindashboard.css']
})
export class Admindashboard {
  uploadItems = ['Video', 'Gallery', 'Audio', 'Article'];
  selectedItem = this.uploadItems[0];

  userMenuOpen = false;
  sidebarOpen = false; // for mobile toggle

 selectItem(item: string) {
  console.log('Selected:', item); // Debug
  this.selectedItem = item.trim(); // remove extra spaces
  if (window.innerWidth <= 480) this.sidebarOpen = false;
}


  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

