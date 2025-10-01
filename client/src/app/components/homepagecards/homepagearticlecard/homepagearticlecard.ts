import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- import RouterModule

@Component({
  selector: 'app-homepagearticlecard',
  standalone: true,
  imports: [CommonModule,RouterModule], // Required for *ngIf, *ngFor
  templateUrl: './homepagearticlecard.html',
  styleUrls: ['./homepagearticlecard.css'],
})
export class Homepagearticlecard {
 articles = [
  {
    title: 'Empowering Communities Through Education',
    description:
      'Exploring how charitable organizations are transforming lives by providing access to quality education for underprivileged children across the globe. Education remains a cornerstone of empowerment, and these initiatives are bridging gaps in opportunity, access, and resources.',
    tags: ['Education', 'Empowerment', 'Community'],
    writer: 'Maria Alvarez',
  },
  {
    title: 'Feeding the Hungry: Grassroots Solutions',
    description:
      'A closer look at local food banks, community kitchens, and grassroots efforts that are fighting hunger one meal at a time. These small-scale, high-impact programs are making a huge difference in cities and rural areas alike.',
    tags: ['Hunger', 'Food Security', 'Nonprofits'],
    writer: 'David Kim',
  },
  {
    title: 'Climate Action Through Charity',
    description:
      'Nonprofit organizations are playing a critical role in driving environmental change, from reforestation to renewable energy education. Discover how charities are enabling climate resilience and sustainable development at the grassroots level.',
    tags: ['Climate', 'Environment', 'Sustainability'],
    writer: 'Leila Hassan',
  },
  {
    title: 'Healthcare Access for All',
    description:
      'Mobile clinics, donation drives, and international aid programs are making healthcare more accessible to vulnerable populations. Learn how these charities are saving lives and supporting health equity worldwide.',
    tags: ['Healthcare', 'Access', 'Aid'],
    writer: 'Michael Thompson',
  },
];


  selectedArticle: any = null;
  modalOpen: boolean = false;

  openModal(article: any) {
    this.selectedArticle = article;
    this.modalOpen = true;
  }

  closeModal() {
    this.selectedArticle = null;
    this.modalOpen = false;
  }
}
