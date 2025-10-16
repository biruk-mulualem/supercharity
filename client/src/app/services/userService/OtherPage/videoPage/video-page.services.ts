import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VideoPageServices {
  private apiUrl = `${environment.apiUrl}/VideoPage`; // API URL
  constructor(private http: HttpClient) {}
  // Get all articles
  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Get single article by ID
  getVideo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
