import { Routes } from '@angular/router';
import { Aboutus } from './pages/aboutus/aboutus';
import { Contactus } from './pages/contactus/contactus';
import { Homepage } from './pages/homepage/homepage';
import { Articlepage } from './pages/articlepage/articlepage';
import { Videopage } from './pages/videopage/videopage';
import { Gallarypage } from './pages/gallarypage/gallarypage';
import { Audiopage } from './pages/audiopage/audiopage';
import { Cpanel } from './pages/controlpanel/cpanel/cpanel';
import { Admindashboard } from './pages/controlpanel/admindashboard/admindashboard';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'aboutus', component: Aboutus },
  { path: 'contactus', component: Contactus },
  { path: 'articlepage', component: Articlepage },
  { path: 'videopage', component: Videopage },
  { path: 'gallarypage', component: Gallarypage },
  { path: 'audiopage', component: Audiopage },
  { path: 'articlepage', component: Articlepage },
  { path: 'cpanel', component: Cpanel }, //login page
  { path: 'admindashboard', component: Admindashboard },
  { path: '**', redirectTo: '' },
];
