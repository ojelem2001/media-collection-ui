import { Injectable } from '@angular/core';
import { IMedia } from '../models';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) {}

 getMedia(): Observable<IMedia[]> {
   const url = `/api/users/${environment.userId}/media/batch`;

    return this.http.get<IMedia[]>(url).pipe(
      map(movies => movies),
      catchError(error => {
        console.error('Error loading movies:', error);
        return of([]);
      })
    )};
}
