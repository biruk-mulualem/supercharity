
import { Header } from '../../components/header/header';
import { Component, AfterViewInit } from '@angular/core';
import { Footercard } from "../../components/footercard/footercard";

@Component({
  selector: 'app-aboutus',
  imports: [Header, Footercard],
  templateUrl: './aboutus.html',
  styleUrls: ['./aboutus.css']
})
export class Aboutus  {


}
