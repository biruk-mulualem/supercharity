import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Video {
  video: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-videocard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './videocard.html',
  styleUrls: ['./videocard.css']
})
export class Videocard {
  videos: Video[] = [
    { video: 'Intro.mp4vvvvvvvvvvvvvv', description: 'Introduction videoffffffffffffffffffffffffffffffffffff', category: 'Tutorial' },
    { video: 'Angular.mp4', description: 'Angular tutorial', category: 'Tutorial' },
    { video: 'Music.mp4', description: 'Background music', category: 'Entertainment' },
    { video: 'Promo.mp4', description: 'Promotion video', category: 'Marketing' },
    { video: 'Demo.mp4', description: 'Demo video', category: 'Tutorial' },
    { video: 'Interview.mp4', description: 'Interview video', category: 'Business' },
    { video: 'Test.mp4', description: 'Test video', category: 'Test' }
  ];

  searchText: string = '';
  page: number = 1;
  itemsPerPage: number = 5;

  showEditModal: boolean = false;
  showDeleteModal: boolean = false;
  showUploadModal: boolean = false;

  selectedVideo: Video | null = null;
  newVideo: Video = { video: '', description: '', category: '' };

  /* Get filtered videos based on search */
  get filteredVideos(): Video[] {
    if (!this.searchText) return this.videos;
    return this.videos.filter(v =>
      v.video.toLowerCase().includes(this.searchText.toLowerCase()) ||
      v.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      v.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  /* Paginate filtered videos */
  get paginatedVideos(): Video[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredVideos.slice(start, start + this.itemsPerPage);
  }

  /* Pagination controls */
  nextPage() {
    if ((this.page * this.itemsPerPage) < this.filteredVideos.length) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  /* Open Edit Modal */
  openEdit(video: Video) {
    this.selectedVideo = { ...video };
    this.showEditModal = true;
  }

  saveEdit() {
    if (this.selectedVideo) {
      const index = this.videos.findIndex(v => v.video === this.selectedVideo!.video);
      if (index !== -1) this.videos[index] = this.selectedVideo;
    }
    this.closeModal();
  }

  /* Open Delete Modal */
  openDelete(video: Video) {
    this.selectedVideo = video;
    this.showDeleteModal = true;
  }

  deleteVideo() {
    if (this.selectedVideo) {
      this.videos = this.videos.filter(v => v !== this.selectedVideo);
    }
    this.closeModal();
  }

  /* Open Upload Modal */
  openUpload() {
    this.newVideo = { video: '', description: '', category: '' };
    this.showUploadModal = true;
  }

  uploadVideo() {
    if (this.newVideo.video && this.newVideo.description && this.newVideo.category) {
      this.videos.push({ ...this.newVideo });
      this.closeModal();
    } else {
      alert('Please fill all fields!');
    }
  }

  closeModal() {
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.showUploadModal = false;
    this.selectedVideo = null;
  }
}
