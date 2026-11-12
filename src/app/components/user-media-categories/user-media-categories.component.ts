import { Component, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges, inject, DestroyRef } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Observable, map, BehaviorSubject, combineLatest, shareReplay } from 'rxjs';
import { MediaService, FilterService } from '../../services';
import { IFilterOptions, MediaType, IMedia } from '../../models';
import { MediaListComponent } from '../media-list/media-list.component';
import { AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private destroyRef = inject(DestroyRef);
  private filterService = inject(FilterService);

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
      const saved = localStorage.getItem('mediaType') as MediaType | null;
      if (saved) this.currentView = saved;
      this.loadMedia(this.userId);
    }

    if (changes['filters'] && this.media$) {
      this.recalcCounts();
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

    this.media$ = this.mediaService.getMedia(userId).pipe(
      shareReplay({ bufferSize: 1, refCount: false })
    );

    this.movies$ = this.media$.pipe(
      map(x => x.filter(c => c.type === MediaType.Movie))
    );

    this.series$ = this.media$.pipe(
      map(x => x.filter(c => c.type === MediaType.Series))
    );

    this.recalcCounts();
  }

  private recalcCounts(): void {
    if (!this.media$) {
      this.moviesCount$$.next(0);
      this.seriesCount$$.next(0);
      return;
    }

    const f = this.filters;

    this.media$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(all => {
        const movies = all.filter(c => c.type === MediaType.Movie);
        const series = all.filter(c => c.type === MediaType.Series);

        const filteredMovies = this.applyFilters(movies, f);
        const filteredSeries = this.applyFilters(series, f);

        this.moviesCount$$.next(filteredMovies.length);
        this.seriesCount$$.next(filteredSeries.length);
      });
  }

  private applyFilters(items: IMedia[], filters: IFilterOptions | undefined): IMedia[] {
    if (!filters) return items;

    let result = items;
    result = this.filterService.filterByGenre(result, filters.genre);
    result = this.filterService.filterByDecade(result, filters.decades);
    result = this.filterService.filterBySearch(result, filters.searchQuery);
    return result;
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