import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GalleryPageServices {
  private apiUrl = `${environment.apiUrl}/GalleryPage`; // API URL
  constructor(private http: HttpClient) {}
  // Get all articles
  getGalleries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Get single article by ID
  getGallery(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
