import { Component, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable, map, tap, BehaviorSubject } from 'rxjs';
import { MediaService } from '../../services';
import { IFilterOptions, MediaType, IMedia } from '../../models';
import { MediaListComponent } from '../media-list/media-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-media-categories',
  standalone: true,
  imports: [MediaListComponent, AsyncPipe],
  templateUrl: './user-media-categories.component.html',
  styleUrls: ['./user-media-categories.component.scss']
})
export class UserMediaCategoriesComponent implements OnChanges {
  @Input() filters: IFilterOptions | undefined;
  @Input() userId: string | undefined;

  mediaType = MediaType;
  currentView: MediaType = MediaType.Movie;

  private platformId: Object;

  moviesCount$$ = new BehaviorSubject<number>(0);
  seriesCount$$ = new BehaviorSubject<number>(0);
  media$?: Observable<IMedia[]>;
  movies$?: Observable<IMedia[]>;
  series$?: Observable<IMedia[]>;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private mediaService: MediaService
  ) {
    this.platformId = platformId;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isPlatformServer(this.platformId)) { return; }

    if (changes['userId']) {
      this.loadMedia(this.userId);
    }
  }

  private loadMedia(userId: string | undefined): void {
    if (!userId) {
      this.media$ = undefined;
      this.movies$ = undefined;
      this.series$ = undefined;
      this.moviesCount$$.next(0);
      this.seriesCount$$.next(0);
      return;
    }

    this.media$ = this.mediaService.getMedia(userId);

    this.movies$ = this.media$.pipe(
      map(x => x.filter(c => c.type === MediaType.Movie)),
      tap(movies => this.moviesCount$$.next(movies.length))
    );

    this.series$ = this.media$.pipe(
      map(x => x.filter(c => c.type === MediaType.Series)),
      tap(series => this.seriesCount$$.next(series.length))
    );
  }

  showMovies() {
    this.currentView = MediaType.Movie;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mediaType', this.currentView);
    }
  }

  showSeries() {
    this.currentView = MediaType.Series;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mediaType', this.currentView);
    }
  }
}