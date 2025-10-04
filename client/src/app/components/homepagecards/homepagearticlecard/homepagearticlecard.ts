
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepagearticleServices } from '../../../services/userService/homepagearticeService/homepagearticle.services';
import {  ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-homepagearticlecard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepagearticlecard.html',
  styleUrls: ['./homepagearticlecard.css'],
})
export class Homepagearticlecard implements OnInit {
  articles: any[] = [];
  selectedArticle: any = null;
  modalOpen: boolean = false;
  loading: boolean = true;
  error: string = '';
  constructor(private articleService: HomepagearticleServices,private cd: ChangeDetectorRef) {}
ngOnInit() {
  this.articleService.getArticles().subscribe({
    next: (data) => {
      // console.log('Fetched articles:', data);  // <-- Add this line to log data
      this.articles = data;
      this.loading = false;
       this.cd.detectChanges();
    },
    error: (err) => {
      console.error('Error fetching articles:', err); // Also log error details
      this.error = 'Failed to load articles.';
      this.loading = false;
    }
  });
}
  openModal(article: any) {
    this.selectedArticle = article;
    this.modalOpen = true;
  }
  closeModal() {
    this.selectedArticle = null;
    this.modalOpen = false;
  }
}
