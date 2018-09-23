import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Provider } from './provider'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

   private providersUrl = 'api/providers';  // URL to web api


  constructor(private http: HttpClient) { }

    getProviders (): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.providersUrl)
      .pipe(
        tap(provider => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      );
  }

    /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Provider> {
    const url = `${this.providersUrl}/${id}`;
    return this.http.get<Provider>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Provider>(`getProvider id=${id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {    
  }
  
}
