import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';

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
  styleUrls: ['./audiopage.css'] // fixed typo styleUrl → styleUrls
})
export class Audiopage {
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 12; // set small for demo, increase as needed

  audioItems = [
    {
      image: 'https://picsum.photos/300/200?grayscale&random=10',
      title: 'Relaxing Piano',
      description: 'Melody for focus and study.',
      src: 'sample.mp3'
    },
    {
      image: 'https://picsum.photos/301/200?grayscale&random=11',
      title: 'Motivational Speech',
      description: 'Start your day with inspiration.',
      src: 'sample.mp3'
    },
    {
      image: 'https://picsum.photos/302/200?grayscale&random=12',
      title: 'Nature Sounds',
      description: 'Relaxing ambient sounds.',
      src: 'sample.mp3'
    },
    {
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },{
      image: 'https://picsum.photos/303/200?grayscale&random=13',
      title: 'Top Hits',
      description: "This month's best playlist.",
      src: 'sample.mp3'
    },
    // Add more audio items if needed
  ];

  // Filter audio by searchTerm (title or description)
  get filteredAudios() {
    const term = this.searchTerm.toLowerCase();
    return this.audioItems.filter(
      item =>
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
    );
  }

  // Pagination logic for current page
  get paginatedAudios() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredAudios.slice(start, start + this.itemsPerPage);
  }

  totalPages() {
    return Math.ceil(this.filteredAudios.length / this.itemsPerPage);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  visiblePages() {
    // Simple pagination pages array
    const pages = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      pages.push(i);
    }
    return pages;
  }
}
