import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  id: number;
  title: string;
  description: string;
  tag: string;
  writer: string;
}

@Component({
  selector: 'app-articlecard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articlecard.html',
  styleUrls: ['./articlecard.css'],
})
export class Articlecard {
  articles: Article[] = [
    { id: 1, title: 'Angular Basics', description: 'Intro to Angular framework', tag: 'Angular', writer: 'John Doe' },
    { id: 2, title: 'ASP.NET Core Guide', description: 'Building APIs with .NET', tag: 'ASP.NET', writer: 'Jane Smith' },
  ];

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  isModalOpen: boolean = false;
  editingArticle: Article | null = null;
  modalData: { title: string; description: string; tag: string; writer: string } = {
    title: '',
    description: '',
    tag: '',
    writer: '',
  };

  // Filtered + Paginated
  get filteredArticles(): Article[] {
    return this.articles.filter(
      a =>
        a.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        a.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        a.tag.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        a.writer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  totalPages(): number {
    return Math.ceil(this.filteredArticles.length / this.itemsPerPage) || 1;
  }

  paginatedArticles(): Article[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredArticles.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // Modal
  openModal(article: Article | null = null) {
    this.isModalOpen = true;
    this.editingArticle = article;
    this.modalData = article
      ? { ...article }
      : { title: '', description: '', tag: '', writer: '' };
  }

  closeModal() {
    this.isModalOpen = false;
    this.editingArticle = null;
    this.modalData = { title: '', description: '', tag: '', writer: '' };
  }

  saveArticle() {
    if (this.editingArticle) {
      Object.assign(this.editingArticle, this.modalData);
    } else {
      const newArticle: Article = {
        id: this.articles.length + 1,
        ...this.modalData,
      };
      this.articles.push(newArticle);
    }
    this.closeModal();
  }

  editArticle(article: Article) {
    this.openModal(article);
  }

  deleteArticle(article: Article) {
    this.articles = this.articles.filter(a => a.id !== article.id);
  }
}
