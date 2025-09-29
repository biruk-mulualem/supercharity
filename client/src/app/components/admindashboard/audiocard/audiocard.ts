import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AudioItem {
  id: number;
  title: string;
  url: string;
}

@Component({
  selector: 'app-audiocard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audiocard.html',
  styleUrls: ['./audiocard.css'],
})
export class Audiocard {
  audioList: AudioItem[] = [
    { id: 1, title: 'Sample Audio 1', url: 'assets/sample1.mp3' },
    { id: 2, title: 'Sample Audio 2', url: 'assets/sample2.mp3' },
  ];

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  isModalOpen: boolean = false;
  editingAudio: AudioItem | null = null;
  modalData: { title: string; file: File | null } = { title: '', file: null };

  // Pagination helpers
  get filteredAudio(): AudioItem[] {
    return this.audioList.filter(a =>
      a.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredAudio.length / this.itemsPerPage) || 1;
  }

  paginatedAudio(): AudioItem[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredAudio.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // Modal
  openModal(audio: AudioItem | null = null) {
    this.isModalOpen = true;
    this.editingAudio = audio;
    this.modalData = audio
      ? { title: audio.title, file: null }
      : { title: '', file: null };
  }

  closeModal() {
    this.isModalOpen = false;
    this.editingAudio = null;
    this.modalData = { title: '', file: null };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.modalData.file = input.files[0];
    }
  }

  saveAudio() {
    if (this.editingAudio) {
      this.editingAudio.title = this.modalData.title;
      if (this.modalData.file) {
        this.editingAudio.url = URL.createObjectURL(this.modalData.file);
      }
    } else {
      const newAudio: AudioItem = {
        id: this.audioList.length + 1,
        title: this.modalData.title,
        url: this.modalData.file ? URL.createObjectURL(this.modalData.file) : '',
      };
      this.audioList.push(newAudio);
    }
    this.closeModal();
  }

  editAudio(audio: AudioItem) {
    this.openModal(audio);
  }

  deleteAudio(audio: AudioItem) {
    this.audioList = this.audioList.filter(a => a.id !== audio.id);
  }
}
