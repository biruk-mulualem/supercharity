import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoPageServices } from '../../services/userService/OtherPage/videoPage/video-page.services';
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
export class Videopage implements OnInit {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 16;
  videos: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  constructor(private videoService: VideoPageServices) {}
ngOnInit(): void {
  this.videoService.getVideos().subscribe({
    next: (data) => {
      this.videos = data.map(video => {
        const videoId = this.extractVideoId(video.videoUrl);
        return {
          title: video.title || 'Untitled Video',
          category: video.category || 'Uncategorized',
          description: video.description || '',
          src: `https://www.youtube.com/embed/${videoId}`,
              date: video.date // <-- include date here
        };
      });
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Failed to load videos.';
      console.error(err);
      this.loading = false;
    }
  });
}
private extractVideoId(url: string): string {
  const regExp = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?]+)/;
  const match = url.match(regExp);
  return match ? match[1] : '';
}


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
    const withoutRecent = this.filteredVideos.slice(4);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return withoutRecent.slice(start, start + this.itemsPerPage);
  }
  totalPages() {
    const count = this.filteredVideos.length - 4;
    return count > 0 ? Math.ceil(count / this.itemsPerPage) : 1;
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
  changePage(page: number) {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
