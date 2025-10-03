import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ArticleServices {
  private apiUrl = `${environment.apiUrl}/Articles`; // API URL

  constructor(private http: HttpClient) {}

  // Get all articles
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get single article by ID
  getArticle(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new article
  createArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article);
  }

  // Update an existing article
  updateArticle(id: number, article: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, article);
  }

  // Delete an article
  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
