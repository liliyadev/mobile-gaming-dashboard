import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://mobile-gaming-backend.onrender.com'; 
  constructor(private http: HttpClient) {}

  getGames(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`).pipe(
      catchError(this.handleError<any[]>('getGames', []))
    );
  }

  getGameById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError<any>('getGameById'))
    );
  }

  getWelcomeMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/welcome`).pipe(
      catchError(this.handleError<{ message: string }>('getWelcomeMessage', { message: 'Welcome!' }))
    );
  }

  getMetrics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/metrics`).pipe(
      catchError(this.handleError<any>('getMetrics'))
    );
  }

  logGameClick(id: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/track`, {}).pipe(
      catchError(this.handleError<any>('logGameClick'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }
}
