import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CpanelServiceService {

    private apiUrl = `${environment.apiUrl}/Logins`; // API URL
  constructor(private http: HttpClient) {}

  // Get user by username (for login)
  getUserByUsername(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/by-username/${username}`);
  }

 

 
}
