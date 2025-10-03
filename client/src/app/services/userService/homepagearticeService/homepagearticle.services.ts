import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepagearticleServices {
  
   private apiUrl = `${environment.apiUrl}/HomePageArticle`; // API URL
  constructor(private http: HttpClient) {}
  // Get all articles
  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Get single article by ID
  getArticle(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
