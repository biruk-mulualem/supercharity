import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepageaudioServices {
  
  private apiUrl = `${environment.apiUrl}/HomePageAudio`; // API URL

  constructor(private http: HttpClient) {}

  getAudios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAudio(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
