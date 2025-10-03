import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepagegalleryServices {
    private apiUrl = `${environment.apiUrl}/HomePageGallery`; // API URL

  constructor(private http: HttpClient) {}

  getGalleries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGallery(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
