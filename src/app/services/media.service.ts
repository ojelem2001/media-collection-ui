import { Injectable } from '@angular/core';
import { Media } from '../models/media.model';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) {}

 getMedia(): Observable<Media[]> {
   const url = `/api/media/${environment.userId}`;

    return this.http.get<Media[]>(url).pipe(
      map(movies => movies),
      catchError(error => {
        console.error('Error loading movies:', error);
        return of([]);
      })
    )};
}
