import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ThemeService, MediaService } from './services';
import { IFilterOptions, MediaType, IMedia, IAvailableFilterOptions } from './models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {  
  protected readonly title = signal('my-media-collection');
  currentFilters?: IFilterOptions;
  options?: IAvailableFilterOptions;
  currentView: MediaType = MediaType.Movie;
  moviesCount$$  = new BehaviorSubject<number>(0);
  seriesCount$$  = new BehaviorSubject<number>(0);
  mediaType = MediaType;
  media$?: Observable<IMedia[]>;
  movies$?: Observable<IMedia[]>;
  series$?: Observable<IMedia[]>;

  isBrowser: boolean;
  platformId: Object;


  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private themeService: ThemeService,
    private mediaService: MediaService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.platformId = platformId;
  }

  ngOnInit(): void {
    this.themeService.initializeTheme();    
    if (isPlatformServer(this.platformId)){ return; }

    this.media$ = this.mediaService.getMedia();     
    this.currentView = MediaType.Movie;
    this.movies$ = this.media$
    .pipe(
      map(x => x.filter(c => c.type == MediaType.Movie)),
      tap(movies => this.moviesCount$$.next(movies.length)));
    this.series$ = this.media$
    .pipe(
      map(x => x.filter(c => c.type == MediaType.Series)),
      tap(series => this.seriesCount$$.next(series.length)));
  }

  showMovies() {
    this.currentView = MediaType.Movie;
    localStorage.setItem('mediaType', this.currentView);
  }

  showSeries() {
    this.currentView = MediaType.Series;
    localStorage.setItem('mediaType', this.currentView);
  }

  onFiltersChanged(filters: IFilterOptions) {
    this.currentFilters = filters;
  }
}