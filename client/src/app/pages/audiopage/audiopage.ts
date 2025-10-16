import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';
import { AudioPageServices } from '../../services/userService/OtherPage/audioPage/audio-page.services';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-audiopage',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgFor,
    Footercard,
    Header,
  ],
  templateUrl: './audiopage.html',
  styleUrls: ['./audiopage.css']
})
export class Audiopage implements OnInit {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 12;
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;
  audioItems: any[] = [];       // Fetched from API
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private audioService: AudioPageServices,
    private cd:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchAudios();
  }

  fetchAudios(): void {
    this.isLoading = true;
    this.hasError = false;

    this.audioService.getAudio().subscribe({
      next: (data: any[]) => {
        this.audioItems = data;
        this.isLoading = false;
             this.cd.detectChanges();
      },
      error: (error: any) => {
        console.error('Failed to fetch audio items:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  // Filter audio by searchTerm
  get filteredAudios() {
    const term = this.searchTerm.toLowerCase();
    return this.audioItems.filter(
      item =>
        item.title?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term)
    );
  }

  // Pagination logic
  get paginatedAudios() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredAudios.slice(start, start + this.itemsPerPage);
  }

  totalPages(): number {
    return Math.ceil(this.filteredAudios.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  visiblePages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pages.push(i);
    }
    return pages;
  }
}
