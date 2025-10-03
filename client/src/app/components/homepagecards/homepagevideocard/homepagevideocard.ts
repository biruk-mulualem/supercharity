import { Component, OnInit } from '@angular/core';
import {  ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HomepagevideoServices } from '../../../services/userService/homepagevideoService/homepagevideo.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepagevideocard',
  imports: [CommonModule],
  templateUrl: './homepagevideocard.html',
  styleUrls: ['./homepagevideocard.css'], // fixed typo: styleUrl -> styleUrls
  standalone: true
})
export class Homepagevideocard implements OnInit {
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;
  videos: any[] = [];

  constructor(private videoService: HomepagevideoServices,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.videoService.getVideos().subscribe({
      next: (data) => {
        this.videos = data;
      this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load videos', err);
      }
    });
  }
}
