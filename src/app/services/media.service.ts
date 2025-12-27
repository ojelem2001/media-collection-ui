import { Injectable } from '@angular/core';
import { Media } from '../models/media.model';
import { MEDIAS_MOCKS } from '../models/media.mocks';
import { MediaType } from '../models/media.enum';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  getMovies(): Media[] {
    return MEDIAS_MOCKS.filter(x => x.type == MediaType.Movie);
  }

  getSeries(): Media[] {
    return MEDIAS_MOCKS.filter(x => x.type == MediaType.Series);
  }
}