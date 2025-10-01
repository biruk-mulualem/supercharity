import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryServices } from '../../../services/galleryServices/gallery.services';

@Component({
  selector: 'app-gallerycard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallerycard.html',
  styleUrls: ['./gallerycard.css'],
})
export class Gallerycard implements OnInit {
  gallery: any[] = [];
  searchText = '';
  page = 1;
  itemsPerPage = 10;

  showEditModal = false;
  showDeleteModal = false;
  showUploadModal = false;

  selectedItem: any = null;
  newItem: any = { imageUrl: '', title: '', description: '', category: '', date: '' };

  constructor(private galleryService: GalleryServices, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadGallery();
  }

  /* Load gallery from API */
  loadGallery() {
    this.galleryService.getGalleries().subscribe({
      next: (data) => {
        this.gallery = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to load gallery', err),
    });
  }

  /* Filtered items */
  get filteredGallery(): any[] {
    if (!this.searchText) return this.gallery;
    return this.gallery.filter(
      (g) =>
        g.title?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        g.description?.toLowerCase().includes(this.searchText.toLowerCase()) ||
        g.category?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  /* Paginated items */
  get paginatedGallery(): any[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredGallery.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.page * this.itemsPerPage < this.filteredGallery.length) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  /* --- Upload modal --- */
  openUpload() {
    this.newItem = { imageUrl: '', title: '', description: '', category: '', date: '' };
    this.showUploadModal = true;
    this.cdr.detectChanges();
  }

  onUploadFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.newItem.imageUrl = URL.createObjectURL(file);
      // TODO: upload file to backend and get actual URL
    }
  }

  uploadItem() {
    if (
      this.newItem.imageUrl &&
      this.newItem.title &&
      this.newItem.description &&
      this.newItem.category &&
      this.newItem.date
    ) {
      this.galleryService.createGallery(this.newItem).subscribe({
        next: () => {
          this.loadGallery();
          this.closeModal();
          alert('Gallery item uploaded successfully!');
          window.location.reload();
        },
        error: (err) => console.error('Upload failed', err),
      });
    } else {
      alert('Please fill all fields!');
    }
  }

  /* --- Edit modal --- */
  openEdit(item: any) {
    this.selectedItem = { ...item };
    this.showEditModal = true;
    this.cdr.detectChanges();
  }

  onEditFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedItem.imageUrl = URL.createObjectURL(file);
      // TODO: upload file to backend and get actual URL
    }
  }

  saveEdit() {
    if (!this.selectedItem) return;

    this.galleryService.updateGallery(this.selectedItem.id, this.selectedItem).subscribe({
      next: () => {
        this.loadGallery();
        this.closeModal();
        alert('Gallery item updated successfully!');
        window.location.reload();
      },
      error: (err) => console.error('Update failed', err),
    });
  }

  /* --- Delete modal --- */
  openDelete(item: any) {
    this.selectedItem = item;
    this.showDeleteModal = true;
    this.cdr.detectChanges();
  }

  deleteItem() {
    if (!this.selectedItem) return;

    this.galleryService.deleteGallery(this.selectedItem.id).subscribe({
      next: () => {
        this.loadGallery();
        this.closeModal();
        alert('Gallery item deleted successfully!');
        window.location.reload();
      },
      error: (err) => console.error('Delete failed', err),
    });
  }

  /* Close all modals */
  closeModal() {
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.showUploadModal = false;
    this.selectedItem = null;
    this.cdr.detectChanges();
  }

  /* Close modal when clicking overlay */
  closeModalOnOverlay(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
