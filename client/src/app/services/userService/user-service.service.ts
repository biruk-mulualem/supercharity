import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
     private apiUrl = `${environment.apiUrl}/Users`; // API URL
  constructor(private http: HttpClient) {}
  // Get all Users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get single User by ID
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new User
  createUser(User: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, User);
  }

  // Update an existing User
  updateUser(id: number, User: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, User);
  }

  // Delete an User
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }  
}
