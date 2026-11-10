import { Injectable, } from '@angular/core';
import { IMedia } from '../models';
import { MEDIAS_MOCKS } from '../models/mocks/media.mocks';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  constructor(private http: HttpClient) {}

 getMedia(userId: string): Observable<IMedia[]> {
   const url = `${environment.apiUrl}/api/users/${userId}/media`;

    return of(MEDIAS_MOCKS)};
}
