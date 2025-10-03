import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageaudioServices } from '../../../services/userService/homepageaudioService/homepageaudio.services';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import {  ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-homepageaudiocard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepageaudiocard.html',
  styleUrls: ['./homepageaudiocard.css']
})
export class Homepageaudiocard implements OnInit {

  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;

  audios: any[] = [];
  loading = true;
  error = '';

  constructor(private audioService: HomepageaudioServices,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.audioService.getAudios().subscribe({
      next: (data) => {
        // console.log('✅ Fetched audios:', data);
        this.audios = data;
        this.loading = false;
         this.cd.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error fetching audios:', err);
        this.error = 'Failed to load audios.';
        this.loading = false;
      }
    });
  }
}
