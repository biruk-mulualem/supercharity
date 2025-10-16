import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudioPageServices {
  

       private apiUrl = `${environment.apiUrl}/AudioPage`; // API URL
  constructor(private http: HttpClient) {}
  // Get all articles
  getAudio(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // Get single article by ID
  getAudios(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
