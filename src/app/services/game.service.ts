import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://mobile-gaming-backend.onrender.com';

  constructor(private http: HttpClient) {}

  getWelcomeMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  getGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/games`);
  }
}
