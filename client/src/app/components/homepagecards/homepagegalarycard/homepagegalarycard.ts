import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepagegalleryServices } from '../../../services/userService/homepagegalleryService/homepagegallery.services';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import {  ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-homepagegalarycard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepagegalarycard.html',
  styleUrls: ['./homepagegalarycard.css']
})
export class Homepagegalarycard implements OnInit {
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;

  galleryItems: any[] = [];
  paginatedGalleryItems: any[] = [];

  selectedImage: any = null;
  modalOpen: boolean = false;

  error = '';
  loading = true;

  constructor(private galleryService: HomepagegalleryServices,private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.galleryService.getGalleries().subscribe({
      next: (data) => {
        // console.log('✅ Gallery items fetched:', data);
        this.galleryItems = data;
        this.paginatedGalleryItems = data.slice(0, 4); // Show only 4
        this.loading = false;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('❌ Error loading gallery items:', err);
        this.error = 'Failed to load gallery items.';
        this.loading = false;
      }
    });
  }

  // Show modal
  openImageModal(image: any) {
    this.selectedImage = image;
    this.modalOpen = true;
  }

  // Hide modal
  closeImageModal() {
    this.selectedImage = null;
    this.modalOpen = false;
  }

  // Handle broken image
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/default-image.png'; // fallback image
  }
}
