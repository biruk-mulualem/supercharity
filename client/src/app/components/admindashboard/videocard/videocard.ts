import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoServices } from '../../../services/videoServices/video.services';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videocard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videocard.html',
  styleUrls: ['./videocard.css']
})
export class Videocard implements OnInit {
  videos: any[] = [];
  searchText: string = '';
  page: number = 1;
  itemsPerPage: number = 5;

  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  showUploadModal: boolean = false;

  selectedVideo: any = null;
  newVideo: any = { videoUrl: '', description: '', category: '', date: '' };

  constructor(
    private videoService: VideoServices,
    private cd: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadVideos();
  }

  /* --- Load Videos from API --- */
  loadVideos() {
    this.videoService.getVideos().subscribe({
      next: data => {
        // Sort by date descending
        this.videos = data.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        this.cd.detectChanges();
      },
      error: err => console.error('Failed to load videos', err)
    });
  }

  /* --- Filtered Videos --- */
  get filteredVideos(): any[] {
    if (!this.searchText) return this.videos;
    return this.videos.filter(
      v =>
        v.videoUrl.toLowerCase().includes(this.searchText.toLowerCase()) ||
        v.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        v.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  /* --- Paginated Videos --- */
  get paginatedVideos(): any[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredVideos.slice(start, start + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredVideos.length / this.itemsPerPage) || 1;
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }



  /* --- Modals Open/Close --- */
  openEdit(video: any) {
    this.selectedVideo = { ...video };
    this.showEditModal = true;
    this.cd.detectChanges();
  }

  openDelete(video: any) {
    this.selectedVideo = { ...video };
    this.showDeleteModal = true;
    this.cd.detectChanges();
  }

  openUpload() {
    this.newVideo = { videoUrl: '', description: '', category: '', date: '' };
    this.showUploadModal = true;
    this.cd.detectChanges();
  }

  closeModal() {
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.showUploadModal = false;
    this.selectedVideo = null;
    this.cd.detectChanges();
  }

  closeModalOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }

  /* --- Video Operations with alert --- */
  saveEdit() {
    if (!this.selectedVideo.videoUrl || !this.selectedVideo.description || !this.selectedVideo.category || !this.selectedVideo.date) {
      alert('Please fill all fields!');
      return;
    }

    this.videoService.updateVideo(this.selectedVideo.id, this.selectedVideo).subscribe({
      next: () => {
        this.loadVideos();
        this.closeModal();
        alert('Video updated successfully!');
        window.location.reload();
      },
      error: err => console.error('Failed to update video', err)
    });
  }

  deleteVideo() {
    if (!this.selectedVideo) return;

    this.videoService.deleteVideo(this.selectedVideo.id).subscribe({
      next: () => {
        this.loadVideos();
        this.closeModal();
        alert('Video deleted successfully!');
        window.location.reload();
      },
      error: err => console.error('Failed to delete video', err)
    });
  }

  uploadVideo() {
    if (!this.newVideo.videoUrl || !this.newVideo.description || !this.newVideo.category || !this.newVideo.date) {
      alert('Please fill all fields!');
      return;
    }

    this.videoService.createVideo(this.newVideo).subscribe({
      next: () => {
        this.loadVideos();
        this.closeModal();
        alert('Video uploaded successfully!');
        window.location.reload();
      },
      error: err => console.error('Failed to upload video', err)
    });
  }

  /* --- YouTube embed helper --- */
  getSafeUrl(url: string): SafeResourceUrl {
    if (!url) return '';
    let videoId = '';

    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
