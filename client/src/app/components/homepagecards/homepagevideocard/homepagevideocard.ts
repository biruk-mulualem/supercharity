import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { HomepagevideoServices } from '../../../services/userService/homepagevideoService/homepagevideo.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepagevideocard',
  imports: [CommonModule],
  templateUrl: './homepagevideocard.html',
  styleUrls: ['./homepagevideocard.css'],
  standalone: true
})
export class Homepagevideocard implements OnInit {
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;
  videos: any[] = [];

  constructor(
    private videoService: HomepagevideoServices,
    private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

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

  // ✅ Convert YouTube watch URL to embed URL
  getEmbedUrl(youtubeUrl: string): SafeResourceUrl {
    const videoId = this.extractVideoId(youtubeUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  // ✅ Extract the YouTube video ID from different URL formats
  private extractVideoId(url: string): string {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  }
}
