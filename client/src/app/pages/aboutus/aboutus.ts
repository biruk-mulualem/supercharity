
import { Header } from '../../components/header/header';
import { Component, AfterViewInit } from '@angular/core';
import { Footercard } from "../../components/footercard/footercard";
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-aboutus',
  imports: [Header, Footercard, RouterLink,RouterLinkActive],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.css']
})
export class Aboutus  {


}
