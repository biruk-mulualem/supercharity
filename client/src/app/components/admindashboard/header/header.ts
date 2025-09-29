import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // <-- import RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],  // <-- add it here
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
