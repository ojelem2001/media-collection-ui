import { Injectable } from '@angular/core';
import { Media } from '../models/media.model';
import { AggregatorType } from '../models/aggregator.enum';
import { DecadeFilter } from '../models/decade.enum';
import { AvailableFilterOptions } from '../models/available-filter-options.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private _availableOptions = new BehaviorSubject<AvailableFilterOptions>({ genres: [], years: [] });
  availableOptions$ = this._availableOptions.asObservable();

  updateAvailableOptions(options: AvailableFilterOptions) {
    this._availableOptions.next(options);
  }

  filterByGenre(items: Media[], genre: string | undefined): Media[] {
    if (!genre) return items;
    return items.filter(item => {
      let genres = item.aggregators.find(x => x.type == AggregatorType.Kinopoisk)?.genres ?? [];
      return genres?.some(g => g.toLowerCase().includes(genre.toLowerCase()));
    }
    );
  }

  filterByYear(items: Media[], year: number | undefined): Media[] {
    if (year === 0) return items;
    return items.filter(item => item.year === year);
  }

  getAvailableGenres(items: Media[]): string[] {
    const allGenres = items.flatMap(item => item.aggregators.find(x => x.type == AggregatorType.Kinopoisk)?.genres ?? []);
    return [...new Set(allGenres)]; 
  }

  getAvailableYears(items: Media[]): number[] {
    const years = items.map(item => item.year);
    return [...new Set(years)].sort((a, b) => b - a);
  }

  filterBySearch(items: Media[], query: string | undefined): Media[] {
    if (!query) return items;
    
    const lowerQuery = query.toLowerCase();
    return items.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery)
    );
  }

  filterByDecade(movies: Media[], decade: DecadeFilter | undefined): Media[] { 
  switch(decade) {
    case DecadeFilter.BEFORE_1990:
      return movies.filter(m => m.year < 1990);
    case DecadeFilter.NINETIES:
      return movies.filter(m => m.year >= 1990 && m.year <= 1999);
    case DecadeFilter.TWO_THOUSAND:
      return movies.filter(m => m.year >= 2000 && m.year <= 2009);
    case DecadeFilter.TWO_THOUSAND_TEN:
      return movies.filter(m => m.year >= 2010 && m.year <= 2019);
    case DecadeFilter.TWO_THOUSAND_TWENTY:
      return movies.filter(m => m.year > 2020);
    default:
      return movies;
  }
}
}