import { Component, Input } from '@angular/core';
import { IMedia, IFilterOptions } from '../models';
import { FilterService } from '../services';

@Component({
  selector: 'app-media-list',
  standalone: false,
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MovieListComponent {
  @Input() filters: IFilterOptions | undefined;
  @Input() set medias(value: IMedia[]) {
    this.initMovies(value);
  }
  mediaCollection: IMedia[] = [];

  constructor(
    private filterService: FilterService
  ) {}

  initMovies(medias: IMedia[]): void {
    const sortedMovies = medias.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();      
      return titleA.localeCompare(titleB);
    });
    this.mediaCollection = [...sortedMovies];
    this.filterService.updateAvailableOptions({
      genres: this.filterService.getAvailableGenres(sortedMovies),
      years: this.filterService.getAvailableYears(sortedMovies)
    });
  }

  getFiltered(filters: IFilterOptions | undefined): IMedia[] {
    let result = [...this.mediaCollection];
    if(!filters){
      return result;      
    }
    result = this.filterService.filterByGenre(result, filters.genre);
    result = this.filterService.filterByDecade(result, filters.decades);
    result = this.filterService.filterBySearch(result, filters.searchQuery);
    
    return result;
  }
}