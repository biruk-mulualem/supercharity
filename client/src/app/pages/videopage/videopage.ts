import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
  standalone: true
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-videopage',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgFor,
    Footercard,
    Header,
    SafeUrlPipe
  ],
  templateUrl: './videopage.html',
  styleUrls: ['./videopage.css'],
})
export class Videopage {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 16;

  videoIds = [
    'dQw4w9WgXcQ',
    'M7lc1UVf-VE',
    'Ideg2Ek0kdc',
    'ysz5S6PUM-U',
    'ScMzIvxBSi4'
  ];

  videos = Array.from({ length: 800 }, (_, i) => {
    const videoId = this.videoIds[i % this.videoIds.length];
    return {
      title: `Video Title ${i + 1}`,
      category: i % 3 === 0 ? 'Nature' : i % 3 === 1 ? 'City' : 'Inspiration',
      description: 'This is a sample description of the video.',
      src: `https://www.youtube.com/embed/${videoId}`,
      duration: `${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
      views: `${Math.floor(Math.random() * 1000) + 100}K views`,
    };
  });

  /** --- FILTERED LIST --- **/
  get filteredVideos() {
    const term = this.searchTerm.toLowerCase();
    return this.videos.filter(
      video =>
        video.title.toLowerCase().includes(term) ||
        video.category.toLowerCase().includes(term)
    );
  }

  /** --- RECENT VIDEOS (always top 4) --- **/
  get recentVideos() {
    return this.filteredVideos.slice(0, 4);
  }

  /** --- PAGINATED LIST (excluding recent 4) --- **/
get paginatedVideos() {
  // Remove first 4 videos only once (they belong to "Recent Videos")
  const withoutRecent = this.filteredVideos.slice(4);

  const start = (this.currentPage - 1) * this.itemsPerPage;
  return withoutRecent.slice(start, start + this.itemsPerPage);
}


  visiblePages(): number[] {
    const total = this.totalPages();
    const current = this.currentPage;
    let start = 1;
    let end = total;

    if (total > 5) {
      if (current <= 3) {
        start = 1;
        end = 5;
      } else if (current + 2 >= total) {
        start = total - 4;
        end = total;
      } else {
        start = current - 2;
        end = current + 2;
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
totalPages() {
  return Math.ceil((this.filteredVideos.length - 4) / this.itemsPerPage);
}


  changePage(page: number) {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
