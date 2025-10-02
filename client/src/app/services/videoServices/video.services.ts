import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoServices {
   private apiUrl = `${environment.apiUrl}/Videos`; // API URL
  constructor(private http: HttpClient) {}
  // Get all Videos
  getVideos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get single Video by ID
  getVideo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new Video
  createVideo(Video: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Video);
  }

  // Update an existing Video
  updateVideo(id: number, Video: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Video);
  }

  // Delete an Video
  deleteVideo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }  
}
