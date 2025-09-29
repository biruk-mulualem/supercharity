
import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { CommonModule, NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  styleUrls: ['./gallarypage.css'] // <-- corrected
})
export class Gallarypage {

    searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 16;
galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    title: 'Beautiful Landscape',
    description: 'A breathtaking view of nature.',
    label: 'Nature'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  }
  ,
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  }
  ,
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  }
  ,
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },
    {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'City Vibes',
    description: 'The city lights up at night.',
    label: 'Urban'
  },

  // ... add more with labels
];


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

selectedImage: string | null = null;

openImageModal(imageUrl: string) {
  this.selectedImage = imageUrl;
}

closeImageModal() {
  this.selectedImage = null;
}



}
