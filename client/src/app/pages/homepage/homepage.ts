import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Header } from '../../components/header/header';
import { Homepageaboutuscard } from '../../components/homepagecards/homepageaboutuscard/homepageaboutuscard';
import { Homepageaudiocard } from '../../components/homepagecards/homepageaudiocard/homepageaudiocard';
import { Homepagegalarycard } from '../../components/homepagecards/homepagegalarycard/homepagegalarycard';
import { Homepageherobannercard } from '../../components/homepagecards/homepageherobannercard/homepageherobannercard';
import { Homepagevideocard } from '../../components/homepagecards/homepagevideocard/homepagevideocard';
import { Footercard } from '../../components/footercard/footercard';
import { Homepagearticlecard } from "../../components/homepagecards/homepagearticlecard/homepagearticlecard";







@Component({
  selector: 'app-homepage',
  imports: [Header, Homepageaboutuscard, Homepageaudiocard, Homepagegalarycard, Homepageherobannercard, Homepagevideocard, Footercard, Homepagearticlecard,Homepagearticlecard],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css']
})
export class Homepage  {

}
