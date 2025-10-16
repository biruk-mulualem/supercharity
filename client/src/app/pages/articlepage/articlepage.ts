import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // For ngFor, ngIf, etc.
import { FormsModule } from '@angular/forms';    // For ngModel
import { Header } from '../../components/header/header';
import { Footercard } from '../../components/footercard/footercard';
import { ArticlePageServices } from '../../services/userService/OtherPage/articlePage/article-page.services';

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
  maxPageButtons = 5;
  selectedArticle: any = null;
  modalOpen: boolean = false;
  articles: any[] = []; // ✅ Now fetched from API

  constructor(
    private articlePageServices: ArticlePageServices,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.articlePageServices.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load articles:', err);
      }
    });
  }

  onSubmit() {}// this is just a sample template

  get filteredArticles() {
    const query = this.searchQuery.toLowerCase().trim();
    const filtered = this.articles.filter((article) =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.writer.toLowerCase().includes(query) ||
      article.tags.some((tag: string) => tag.toLowerCase().includes(query))
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
      article.tags.some((tag: string) => tag.toLowerCase().includes(query))
    );
    return Math.ceil(filtered.length / this.articlesPerPage);
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  openModal(article: any) {
    this.selectedArticle = article;
    this.modalOpen = true;
  }

  closeModal() {
    this.selectedArticle = null;
    this.modalOpen = false;
  }

  get visiblePages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const maxButtons = this.maxPageButtons;

    if (total <= maxButtons) {
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
