import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';
import { AudioPageServices } from '../../services/userService/OtherPage/audioPage/audio-page.services';
import { environment } from '../../../environments/environment';

import {OnDestroy,NgZone } from '@angular/core';

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
export class Audiopage implements OnInit ,OnDestroy  {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number =18;
  apiUrl = environment.apiUrl;
  staticUrl = environment.staticUrl;
  audioItems: any[] = [];       // Fetched from API
  isLoading: boolean = false;
  hasError: boolean = false;
  sliderIndex = 0;
  
  constructor(private audioService: AudioPageServices,
    private cd:ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.fetchAudios();
     this.startAutoSlide();
  }
























slides = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'Majestic Mountains',
    subtitle: 'Explore the serene peaks'
  },
  {
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    title: 'Sunset Over Ocean',
    subtitle: 'Feel the warmth of the golden hour'
  },
  {
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
    title: 'Forest Pathway',
    subtitle: 'Walk into nature’s embrace'
  }
];


  autoSlideInterval: any;

  get currentSlideImage() {
    return this.slides[this.sliderIndex].image;
  }

  get currentSlideTitle() {
    return this.slides[this.sliderIndex].title;
  }

  get currentSlideSubtitle() {
    return this.slides[this.sliderIndex].subtitle;
  }


  ngOnDestroy() {
    this.stopAutoSlide();
  }

 setSlide(index: number) {
  this.sliderIndex = index;
  this.resetAutoSlide();  // reset timer on manual navigation
}


startAutoSlide() {
  // Run outside Angular to avoid excessive change detection on every tick
  this.ngZone.runOutsideAngular(() => {
    this.autoSlideInterval = setInterval(() => {
      // Back inside Angular zone to update state and trigger change detection
      this.ngZone.run(() => {
        this.sliderIndex = (this.sliderIndex + 1) % this.slides.length;
        this.cd.detectChanges();
      });
    }, 3000);
  });
}


stopAutoSlide() {
  if (this.autoSlideInterval) {
    clearInterval(this.autoSlideInterval);
    this.autoSlideInterval = null;
  }
}


  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
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
