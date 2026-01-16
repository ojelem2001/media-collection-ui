import { isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { MediaService } from '../../services';
import { IFilterOptions, MediaType, IMedia } from '../../models';
import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-user-media-categories',
  standalone: false,
  templateUrl: './user-media-categories.component.html',
  styleUrls: ['./user-media-categories.component.css']
})
export class UserMediaCategoriesComponent implements OnInit  {  
  @Input() filters: IFilterOptions | undefined;
  @Input() userId: string | undefined;

  mediaType = MediaType;
  currentView: MediaType = MediaType.Movie;

  private platformId: Object;

  moviesCount$$  = new BehaviorSubject<number>(0);
  seriesCount$$  = new BehaviorSubject<number>(0);
  media$?: Observable<IMedia[]>;
  movies$?: Observable<IMedia[]>;
  series$?: Observable<IMedia[]>;


  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private mediaService: MediaService
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)){ return; }
    if(this.userId){    
      this.media$ = this.mediaService.getMedia(this.userId); 
      this.movies$ = this.media$
      .pipe(
        map(x => x.filter(c => c.type == MediaType.Movie)),
        tap(movies => this.moviesCount$$.next(movies.length)));
    
      this.series$ = this.media$
      .pipe(
        map(x => x.filter(c => c.type == MediaType.Series)),
        tap(series => this.seriesCount$$.next(series.length))); 
    }
  }

  showMovies() {
    this.currentView = MediaType.Movie;
    localStorage.setItem('mediaType', this.currentView);
  }

  showSeries() {
    this.currentView = MediaType.Series;
    localStorage.setItem('mediaType', this.currentView);
  }
}