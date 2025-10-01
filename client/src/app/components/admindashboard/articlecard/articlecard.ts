import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  itemsPerPage: number = 10;

  // Modal flags
  isAddModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;

  // Data holders
  newArticle: any = { title: '', description: '', tag: '', writer: '', date: '' };
  selectedArticle: any = null;

  constructor(
    private articleService: ArticleServices,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadArticles();
    this.cdr.detectChanges(); // Force Angular to update the view
  }

  // ----------------------------
  // truncate words
  // ----------------------------
  truncateWords(text: string, wordCount: number): string {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordCount ? words.slice(0, wordCount).join(' ') + '...' : text;
  }

  // ----------------------------
  // Load Articles
  // ----------------------------
  loadArticles() {
    this.articleService.getArticles().subscribe({
      next: (data: any[]) => {
        this.articles = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to load articles', err),
    });
  }

  // ----------------------------
  // Filtered + Paginated Articles
  // ----------------------------
  get filteredArticles(): any[] {
    return this.articles.filter(
      (a) =>
        (a.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.description?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.tag?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.writer?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false) ||
        (a.date?.toLowerCase().includes(this.searchTerm.toLowerCase()) ?? false)
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

  // ----------------------------
  // ADD MODAL
  // ----------------------------
  openAddModal() {
    this.isAddModalOpen = true;
    this.newArticle = { title: '', description: '', tag: '', writer: '', date: '' };
  }

  closeAddModal() {
    this.isAddModalOpen = false;
  }

  addArticle() {
    if (!this.newArticle.title || !this.newArticle.description || !this.newArticle.tag || !this.newArticle.writer || !this.newArticle.date) {
      alert('Please fill all fields!');
      return;
    }
    this.articleService.createArticle(this.newArticle).subscribe({
      next: () => {
        this.loadArticles();
        this.closeAddModal();
        this.cdr.detectChanges();
        alert('Article added successfully!');
        window.location.reload();
      },
      error: (err) => console.error('Create failed', err),
    });
  }

  // ----------------------------
  // EDIT MODAL
  // ----------------------------
  openEditModal(article: any) {
    this.isEditModalOpen = true;
    this.selectedArticle = { ...article };
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.selectedArticle = null;
  }

  updateArticle() {
    if (!this.selectedArticle) return;
    this.articleService.updateArticle(this.selectedArticle.id, this.selectedArticle).subscribe({
      next: () => {
        this.loadArticles();
        this.closeEditModal();
        this.cdr.detectChanges();
        alert('Article updated successfully!');
        window.location.reload();
      },
      error: (err) => console.error('Update failed', err),
    });
  }

  // ----------------------------
  // DELETE MODAL
  // ----------------------------
  openDeleteModal(article: any) {
    this.isDeleteModalOpen = true;
    this.selectedArticle = article;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.selectedArticle = null;
  }

  confirmDelete() {
    if (!this.selectedArticle?.id) return;
    this.articleService.deleteArticle(this.selectedArticle.id).subscribe({
      next: () => {
        this.loadArticles();
        this.closeDeleteModal();
        this.cdr.detectChanges();
        alert('Article deleted successfully!');
        window.location.reload();
      },
      error: (err) => console.error('Delete failed', err),
    });
  }
}
