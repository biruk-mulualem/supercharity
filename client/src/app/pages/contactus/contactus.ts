import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
@Component({
  selector: 'app-contactus',
  imports: [Footercard,Header],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css'
})
export class Contactus {

}
