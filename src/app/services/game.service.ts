import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'https://mobile-gaming-backend.onrender.com';

  constructor(private http: HttpClient) {}

  getWelcomeMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/welcome`);
  }

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/games`);
  }

  getGameById(id: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/games/${id}`).pipe(
    catchError(error => {
      console.error('Error fetching game:', error);
      return of({
        id,
        name: 'Unknown Game',
        genre: 'N/A',
        description: 'Game details not available.',
        thumbnailUrl: 'assets/placeholder.png'
      });
    })
  );
  }
}
