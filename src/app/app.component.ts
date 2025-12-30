import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { MediaService } from './services/media.service';
import { FilterOptions } from './models/filter-options.model';
import { MediaType } from './models/media.enum';
import { Media } from './models/media.model';
import { BehaviorSubject } from 'rxjs';
import { AvailableFilterOptions } from './models/available-filter-options.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {  
  protected readonly title = signal('my-media-collection');
  currentFilters?: FilterOptions;
  options?: AvailableFilterOptions;
  currentView: MediaType = MediaType.Movie;
  moviesCount$$  = new BehaviorSubject<number>(0);
  seriesCount$$  = new BehaviorSubject<number>(0);
  mediaType = MediaType;
  media$?: Observable<Media[]>;
  movies$?: Observable<Media[]>;
  series$?: Observable<Media[]>;

  isBrowser: boolean;


  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private themeService: ThemeService,
    private mediaService: MediaService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.media$ = this.mediaService.getMedia();     
    this.currentView = MediaType.Movie;
    this.movies$ = this.media$
    .pipe(
      map(x => x.filter(c => c.type == MediaType.Movie)),
      tap(movies => this.moviesCount$$.next(movies.length)));
    this.series$ = this.media$
    .pipe(
      map(x => x.filter(c => c.type == MediaType.Series)),
      tap(series => this.moviesCount$$.next(series.length)));
  }

  showMovies() {
    this.currentView = MediaType.Movie;
    localStorage.setItem('mediaType', this.currentView);
  }

  showSeries() {
    this.currentView = MediaType.Series;
    localStorage.setItem('mediaType', this.currentView);
  }

  onFiltersChanged(filters: FilterOptions) {
    this.currentFilters = filters;
  }
}