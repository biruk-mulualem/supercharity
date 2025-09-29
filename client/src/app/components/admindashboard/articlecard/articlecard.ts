import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleServices } from '../../../services/articleServices/article.services';


@Component({
  selector: 'app-articlecard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articlecard.html',
  styleUrls: ['./articlecard.css'],
})
export class Articlecard implements OnInit {
  articles: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  isModalOpen: boolean = false;
  editingArticle: any = null;
  modalData: any = { title: '', description: '', tag: '', writer: '' };

  constructor(private articleService: ArticleServices) {}

  ngOnInit() {
    this.loadArticles();
  }

  // Load all articles from API
  loadArticles() {
    this.articleService.getArticles().subscribe({
      next: (data: any[]) => (this.articles = data),
      error: (err: any) => console.error('Failed to load articles', err)
    });
  }

  // Filtered + Paginated articles
  get filteredArticles(): any[] {
    return this.articles.filter(
      a =>
        (a.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.tag?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.writer?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false)
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredArticles.length / this.itemsPerPage) || 1;
  }

  paginatedArticles(): any[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredArticles.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // Modal handling
  openModal(article: any = null) {
    this.isModalOpen = true;
    this.editingArticle = article;
    this.modalData = article ? { ...article } : { title: '', description: '', tag: '', writer: '' };
  }

  closeModal() {
    this.isModalOpen = false;
    this.editingArticle = null;
    this.modalData = { title: '', description: '', tag: '', writer: '' };
  }

  saveArticle() {
    if (this.editingArticle) {
      this.articleService.updateArticle(this.editingArticle.id, this.modalData).subscribe({
        next: () => this.loadArticles(),
        error: (err: any) => console.error(err)
      });
    } else {
      this.articleService.createArticle(this.modalData).subscribe({
        next: () => this.loadArticles(),
        error: (err: any) => console.error(err)
      });
    }
    this.closeModal();
  }

  editArticle(article: any) {
    this.openModal(article);
  }

  deleteArticle(article: any) {
    this.articleService.deleteArticle(article.id).subscribe({
      next: () => this.loadArticles(),
      error: (err) => console.error(err)
    });
  }
}
