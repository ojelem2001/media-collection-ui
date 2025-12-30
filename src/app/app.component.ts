import { Component, OnInit, signal } from '@angular/core';
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
  movies: Media[] = [];
  series: Media[] = [];

  constructor(
    private themeService: ThemeService,
    private mediaService: MediaService,
  ) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
    this.movies = this.mediaService.getMovies();
    this.series = this.mediaService.getSeries();
    this.moviesCount$$.next(this.movies.length);
    this.seriesCount$$.next(this.series.length);
    this.currentView = MediaType.Movie;
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