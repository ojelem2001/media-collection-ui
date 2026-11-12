import { Component, Output, EventEmitter, OnInit, DestroyRef, inject } from '@angular/core';
import { IFilterOptions, DecadeFilter } from '../../models';
import { FilterService } from '../../services';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-media-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './media-filters.component.html',
  styleUrls: ['./media-filters.component.scss']
})
export class MediaFiltersComponent implements OnInit {
  @Output() filterChange = new EventEmitter<IFilterOptions>();
  
  selectedGenre = '';
  selectedDecade = DecadeFilter.ALL;
  searchQuery = '';
  
  availableGenres: string[] = [];
  availableYears: number[] = [];
  decadeFilters = Object.values(DecadeFilter);

  private destroyRef = inject(DestroyRef); 

  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.availableOptions$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(options => {
      this.availableGenres = options.genres;
      this.availableYears = options.years;
    });
  }

  applyFilters() {
    this.filterChange.emit({
      genre: this.selectedGenre,
      decades: this.selectedDecade,
      searchQuery: this.searchQuery.trim()
    });
  }

  resetFilters() {
    this.searchQuery = '';
    this.selectedGenre = '';
    this.selectedDecade = DecadeFilter.ALL;
    this.applyFilters();
  }
}