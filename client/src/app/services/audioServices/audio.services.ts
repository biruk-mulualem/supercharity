import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AudioServices {
     private apiUrl = `${environment.apiUrl}/Audios`; // API URL
  constructor(private http: HttpClient) {}
  // Get all Audios
  getAudios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get single Audio by ID
  getAudio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new Audio
  createAudio(Audio: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, Audio);
  }

  // Update an existing Audio
  updateAudio(id: number, Audio: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, Audio);
  }

  // Delete an Audio
  deleteAudio(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
