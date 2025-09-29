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
      title: 'The Rise of Remote Work',
      description: 'Exploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwideExploring how flexible work arrangements are reshaping company cultures worldwide.',
      tags: ['Work', 'Remote', 'Trends'],
      writer: 'Jane Doe',
    },
    {
      title: 'Climate Crisis: What Can We Do?',
      description: 'A look at individual and systemic solutions to tackle the ongoing climate emergency.',
      tags: ['Environment', 'Sustainability'],
      writer: 'John Smith',
    },
    {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    }, {
      title: 'AI & Ethics in 2025 biruk',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    },
    // Add more articles here for testing pagination
  ];

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
