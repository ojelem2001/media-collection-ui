import { Injectable } from '@angular/core';
import { Media } from '../models/media.model';
import { MEDIAS_MOCKS } from '../models/media.mocks';
import { MediaType } from '../models/media.enum';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private fakeUserId = 'f273cb67-df0d-4f55-8d98-ea5cd28913fb'; // ID пользователя

  constructor(private http: HttpClient) {}

 getMedia(): Observable<Media[]> {
   const url = `/api/media/${this.fakeUserId}`;

    return this.http.get<Media[]>(url).pipe(
      map(movies => movies),
      catchError(error => {
        console.error('Error loading movies:', error);
        return of([]);
      })
    )};
}
