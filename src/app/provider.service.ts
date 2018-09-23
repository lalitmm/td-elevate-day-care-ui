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

  private getAllProvidersUrl = 'https://smartcommunities.cfapps.io/availability';  // URL to web api
  private getProviderUrl = 'api/providers';  // URL to web api
  private providerUpdateUrl = 'https://smartcommunities.cfapps.io/update';  // URL to web api


  constructor(private http: HttpClient) { }

  /** GET all providers. Will 404 if id not found */
  getProviders(): Observable<Provider[]> {
    const url = `${this.getAllProvidersUrl}`;
    return this.http.get<Provider[]>(url)
      .pipe(
        tap(provider => this.log('fetched all providers')),
        catchError(this.handleError('getProviders', []))
      );
  }

  /** GET provider by id. Will 404 if id not found */
  getProvider(id: number): Observable<Provider> {
    const url = `${this.getProviderUrl}/${id}`;
    return this.http.get<Provider>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Provider>(`getProvider id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateProvider(provider: Provider): Observable<any> {
    return this.http.put(`${this.providerUpdateUrl}/${provider.loc_id}`, provider, httpOptions).pipe(
      tap(_ => this.log(`updated provider id=${provider.loc_id}`)),
      catchError(this.handleError<any>(`updateProvider id=${provider.loc_id}`))
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
