import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryServices {
   private apiUrl = `${environment.apiUrl}/Galleries`; // API URL
  constructor(private http: HttpClient) {}
  // Get all Gallerys
  getGalleries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get single Gallery by ID
  getGallery(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new Gallery
createGallery(formData: FormData): Observable<any> {
  return this.http.post<any>(this.apiUrl, formData);
}
  // Update an existing Gallery
updateGallery(id: number, formData: FormData): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
}


  // Delete an Gallery
  deleteGallery(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
