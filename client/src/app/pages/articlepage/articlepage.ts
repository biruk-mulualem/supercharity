import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // For ngFor, ngIf, etc.
import { FormsModule } from '@angular/forms';    // For ngModel
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';

@Component({
  selector: 'app-articlepage',
  standalone: true,
  imports: [CommonModule, FormsModule, Header, Footercard],
  templateUrl: './articlepage.html',
  styleUrls: ['./articlepage.css'],
})
export class Articlepage {
  searchQuery: string = '';
  currentPage: number = 1;
  articlesPerPage: number = 12;
    // Max page buttons to show at once
maxPageButtons = 5;


  // Modal related properties
  selectedArticle: any = null;
  modalOpen: boolean = false;

  articles = [
  {
    title: 'Education for Every Child',
    description:
      'Exploring how charitable organizations are reshaping futures by providing access to quality education for children in underserved regions. These efforts break cycles of poverty and empower the next generation.',
    tags: ['Education', 'Children', 'Global Impact'],
    writer: 'Jane Doe',
  },
  {
    title: 'Combating Hunger Locally & Globally',
    description:
      'An in-depth look at how food banks, soup kitchens, and grassroots initiatives are ensuring no one goes to bed hungry.',
    tags: ['Hunger', 'Food Aid', 'Community'],
    writer: 'John Smith',
  },
  {
    title: 'Charity & Climate: A Green Revolution',
    description:
      'How environmental nonprofits are fighting climate change through tree planting, renewable energy projects, and local advocacy.',
    tags: ['Environment', 'Sustainability', 'Nonprofits'],
    writer: 'Leila Hassan',
  },
  {
    title: 'Healthcare Where It’s Needed Most',
    description:
      'Mobile clinics and charitable hospitals are bringing medical care to remote communities. Learn how these heroes operate.',
    tags: ['Healthcare', 'Access', 'Aid'],
    writer: 'Alex Chen',
  },
  {
    title: 'Disaster Relief: Rapid Response Charities',
    description:
      'Natural disasters demand fast action. These organizations provide shelter, food, and support when the world turns upside down.',
    tags: ['Disaster Relief', 'Emergency Aid'],
    writer: 'Rachel Lim',
  },
  {
    title: 'Clean Water, Clean Lives',
    description:
      'Water is life. See how charities are drilling wells and building sanitation systems to bring clean water to thousands.',
    tags: ['Water', 'Sanitation', 'Health'],
    writer: 'Samuel Okoro',
  },
  {
    title: 'Women Empowering Women',
    description:
      'Spotlighting organizations that uplift women through education, entrepreneurship, and healthcare access.',
    tags: ['Women', 'Empowerment', 'Equity'],
    writer: 'Fatima Basha',
  },
  {
    title: 'Technology for Good',
    description:
      'Nonprofits are harnessing technology to drive transparency, efficiency, and global outreach like never before.',
    tags: ['Tech4Good', 'Innovation', 'Charity'],
    writer: 'Michael Trent',
  },
  {
    title: 'Fighting Homelessness with Compassion',
    description:
      'From shelters to permanent housing solutions, discover how charities are restoring dignity and safety for the homeless.',
    tags: ['Homelessness', 'Housing', 'Support'],
    writer: 'Amina Rahman',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },{
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  {
    title: 'Mental Health Matters',
    description:
      'Charitable initiatives offering therapy, crisis lines, and awareness programs to break the stigma and offer help.',
    tags: ['Mental Health', 'Wellbeing'],
    writer: 'David Ng',
  },
  
];

    // Add more articles here for testing pagination
 

  get filteredArticles() {
    const query = this.searchQuery.toLowerCase().trim();
    const filtered = this.articles.filter((article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.writer.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );

    const start = (this.currentPage - 1) * this.articlesPerPage;
    const end = start + this.articlesPerPage;
    return filtered.slice(start, end);
  }

  get totalPages(): number {
    const query = this.searchQuery.toLowerCase().trim();
    const filtered = this.articles.filter((article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.writer.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );
    return Math.ceil(filtered.length / this.articlesPerPage);
  }

  // Helper getter for pagination buttons
  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  // Modal open method
  openModal(article: any) {
    this.selectedArticle = article;
    this.modalOpen = true;
  }

  // Modal close method
  closeModal() {
    this.selectedArticle = null;
    this.modalOpen = false;
  }



get visiblePages(): number[] {
  const total = this.totalPages;
  const current = this.currentPage;
  const maxButtons = this.maxPageButtons;

  if (total <= maxButtons) {
    // If total pages less than max buttons, show all
    return this.pages;
  }

  let startPage = Math.max(current - Math.floor(maxButtons / 2), 1);
  let endPage = startPage + maxButtons - 1;

  if (endPage > total) {
    endPage = total;
    startPage = endPage - maxButtons + 1;
  }

  return Array(endPage - startPage + 1).fill(0).map((_, i) => startPage + i);
}

}
