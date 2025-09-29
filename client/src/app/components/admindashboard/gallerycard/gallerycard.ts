















import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-gallerycard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gallerycard.html',
  styleUrls: ['./gallerycard.css']
})
export class Gallerycard {
  gallery: GalleryItem[] = [
    { id: 1, image: 'https://via.placeholder.com/80', title: 'Sunset', description: 'Beautiful sunset view', category: 'Nature' },
    { id: 2, image: 'https://via.placeholder.com/80', title: 'City Lights', description: 'Night skyline', category: 'Urban' },
    { id: 3, image: 'https://via.placeholder.com/80', title: 'Forest', description: 'Green forest path', category: 'Nature' }
  ];

  searchText = '';
  page = 1;
  itemsPerPage = 5;

  showEditModal = false;
  showDeleteModal = false;
  showUploadModal = false;

  selectedItem: GalleryItem | null = null;
  newItem: GalleryItem = { id: 0, image: '', title: '', description: '', category: '' };

  /* Filtered items */
  get filteredGallery(): GalleryItem[] {
    if (!this.searchText) return this.gallery;
    return this.gallery.filter(g =>
      g.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      g.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      g.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  /* Paginated items */
  get paginatedGallery(): GalleryItem[] {
    const start = (this.page - 1) * this.itemsPerPage;
    return this.filteredGallery.slice(start, start + this.itemsPerPage);
  }

  nextPage() { if ((this.page * this.itemsPerPage) < this.filteredGallery.length) this.page++; }
  prevPage() { if (this.page > 1) this.page--; }

  /* Upload */
  openUpload() {
    this.newItem = { id: Date.now(), image: '', title: '', description: '', category: '' };
    this.showUploadModal = true;
  }

  uploadItem() {
    if (this.newItem.image && this.newItem.title && this.newItem.description && this.newItem.category) {
      this.gallery.push({ ...this.newItem });
      this.closeModal();
    } else alert('Please fill all fields!');
  }

  /* Edit */
  openEdit(item: GalleryItem) {
    this.selectedItem = { ...item };
    this.showEditModal = true;
  }

  saveEdit() {
    if (this.selectedItem) {
      const idx = this.gallery.findIndex(i => i.id === this.selectedItem!.id);
      if (idx !== -1) this.gallery[idx] = this.selectedItem;
    }
    this.closeModal();
  }

  /* Delete */
  openDelete(item: GalleryItem) {
    this.selectedItem = item;
    this.showDeleteModal = true;
  }

  deleteItem() {
    if (this.selectedItem) this.gallery = this.gallery.filter(i => i.id !== this.selectedItem!.id);
    this.closeModal();
  }

  /* Close */
  closeModal() {
    this.showEditModal = false;
    this.showDeleteModal = false;
    this.showUploadModal = false;
    this.selectedItem = null;
  }
}
