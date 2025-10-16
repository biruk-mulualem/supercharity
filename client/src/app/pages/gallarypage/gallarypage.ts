import { Component, OnInit } from '@angular/core';
import { GalleryPageServices } from '../../services/userService/OtherPage/galleryPage/gallery-page.services'; // adjust path accordingly
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Footercard } from '../../components/footercard/footercard';
import { Header } from '../../components/header/header';
import { environment } from '../../../environments/environment';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-gallarypage',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgFor,
    Footercard,
    Header,
  ],
  templateUrl: './gallarypage.html',
  styleUrls: ['./gallarypage.css']
})
export class Gallarypage implements OnInit {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 16;
  galleryItems: any[] = [];
  isLoading: boolean = false;
  hasError: boolean = false;
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;
  constructor(private galleryService: GalleryPageServices) {}
  selectedImage: string | null = null;
  ngOnInit(): void {
    this.fetchGalleryItems();
  }

  fetchGalleryItems(): void {
    this.isLoading = true;
    this.hasError = false;
    this.galleryService.getGalleries().subscribe({
      next: (data) => {
        this.galleryItems = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Failed to load gallery items:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  get filteredGalleryItems() {
    const term = this.searchTerm.toLowerCase();
    return this.galleryItems.filter(
      item =>
        item.title.toLowerCase().includes(term) ||
        item.label?.toLowerCase().includes(term)
    );
  }

  get paginatedGalleryItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredGalleryItems.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredGalleryItems.length / this.itemsPerPage);
  }

  visiblePages(): number[] {
    const total = this.totalPages();
    const visiblePages: number[] = [];
    for (let i = 1; i <= total; i++) {
      visiblePages.push(i);
    }
    return visiblePages;
  }
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }



  openImageModal(imageUrl: string) {
    this.selectedImage = this.staticUrl + imageUrl;
  } // MAKE THIS WORK

  closeImageModal() {
    this.selectedImage = null;
  }
}
