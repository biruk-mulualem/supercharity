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
      title: 'The Rise of Remote Work',
      description:
        'Exploring how flexible work arrangements are reshaping company cultures worldwide Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.Exploring how flexible work arrangements are reshaping company cultures worldwide.',
      tags: ['Work', 'Remote', 'Trends'],
      writer: 'Jane Doe',
    },
    {
      title: 'Climate Crisis: What Can We Do?',
      description:
        'A look at individual and systemic solutions to tackle the ongoing climate emergency.',
      tags: ['Environment', 'Sustainability'],
      writer: 'John Smith',
    },
    {
      title: 'AI & Ethics in 2025',
      description: 'As AI evolves, so do ethical questions around its impact and implementation.',
      tags: ['AI', 'Ethics', 'Technology'],
      writer: 'Alex Chen',
    },
    {
      title: 'The Future of Transportation',
      description: 'Electric vehicles, autonomous driving, and beyond.',
      tags: ['Technology', 'Future', 'Mobility'],
      writer: 'Sarah Johnson',
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
