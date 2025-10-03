import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudioServices } from '../../../services/adminService/audioServices/audio.services';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-audiocard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audiocard.html',
  styleUrls: ['./audiocard.css'],
})
export class Audiocard implements OnInit {
    apiUrl = environment.apiUrl;
staticUrl = environment.staticUrl;
  audioList: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;

  // Modals state
  isAddModalOpen = false;
  isEditModalOpen = false;
  isDeleteModalOpen = false;

  // Add / Edit / Delete data
  newAudio: any = { title: '', audioFile: null, date: '' };
  editingAudio: any = null;
  deletingAudio: any = null;

  constructor(private audioService: AudioServices, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadAudios();
  }

  loadAudios() {
    this.audioService.getAudios().subscribe({
      next: (data) => {
        this.audioList = data;
        this.cd.detectChanges();
      },
      error: (err) => console.error('Failed to load audios', err),
    });
  }

  /* Pagination + Filter */
  get filteredAudio(): any[] {
    if (!this.searchTerm) return this.audioList;
    return this.audioList.filter((a) =>
      a.title?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredAudio.length / this.itemsPerPage) || 1;
  }

  paginatedAudio(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredAudio.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }
  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  /* --- ADD MODAL --- */
  openAddModal() {
    this.newAudio = { title: '', audioFile: null, date: '' };
    this.isAddModalOpen = true;
  }

  closeAddModal() {
    this.isAddModalOpen = false;
    this.newAudio = { title: '', audioFile: null, date: '' };
  }

  closeAddModalOnOverlay(event: MouseEvent) {
    this.closeAddModal();
  }

  onAddFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      if (file.type !== 'audio/mpeg') {
        alert('Only MP3 files are allowed.');
        input.value = ''; // Reset the input
        return;
      }
      this.newAudio.audioFile = file;
    }
  }

  saveAddAudioAndClose() {
    if (
      !this.newAudio.title ||
      !this.newAudio.audioFile ||
      !this.newAudio.date
    ) {
      alert('Please fill all fields!');
      return;
    }

    // Prepare FormData for multipart upload
    const formData = new FormData();
    formData.append('Title', this.newAudio.title);
    formData.append('Date', this.newAudio.date);
    formData.append('AudioFile', this.newAudio.audioFile);

    this.audioService.createAudio(formData).subscribe({
      next: () => {
        this.loadAudios();
        this.isAddModalOpen = false;
        this.newAudio = { title: '', audioFile: null, date: '' };
        this.cd.detectChanges();
        alert('Audio added successfully!');
      },
      error: (err) => console.error('Failed to add audio', err),
    });
  }

  /* --- EDIT MODAL --- */
  openEditModal(audio: any) {
    this.editingAudio = { ...audio, audioFile: null };
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editingAudio = null;
  }

  closeEditModalOnOverlay(event: MouseEvent) {
    this.closeEditModal();
  }

  onEditFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];

      if (file.type !== 'audio/mpeg') {
        alert('Only MP3 files are allowed.');
        input.value = '';
        return;
      }

      this.editingAudio.audioFile = file;
    }
  }

  saveEditAudioAndClose() {
    if (
      !this.editingAudio.title ||
      !this.editingAudio.date
    ) {
      alert('Please fill all required fields!');
      return;
    }

    const formData = new FormData();
    formData.append('Title', this.editingAudio.title);
    formData.append('Date', this.editingAudio.date);

    if (this.editingAudio.audioFile) {
      formData.append('AudioFile', this.editingAudio.audioFile);
    }

    this.audioService.updateAudio(this.editingAudio.id, formData).subscribe({
      next: () => {
        this.loadAudios();
        this.isEditModalOpen = false;
        this.editingAudio = null;
        this.cd.detectChanges();
        alert('Audio updated successfully!');
      },
      error: (err) => console.error('Failed to update audio', err),
    });
  }

  /* --- DELETE MODAL --- */
  openDeleteModal(audio: any) {
    this.deletingAudio = audio;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.deletingAudio = null;
  }

  closeDeleteModalOnOverlay(event: MouseEvent) {
    this.closeDeleteModal();
  }

  confirmDeleteAndClose() {
    if (!this.deletingAudio) return;
    this.audioService.deleteAudio(this.deletingAudio.id).subscribe({
      next: () => {
        this.loadAudios();
        this.isDeleteModalOpen = false;
        this.deletingAudio = null;
        this.cd.detectChanges();
        alert('Audio deleted successfully!');
      },
      error: (err) => console.error('Failed to delete audio', err),
    });
  }
}
