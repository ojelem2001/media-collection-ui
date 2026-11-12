import { Component, computed, input, inject } from '@angular/core';
import { IMedia, IFilterOptions } from '../../models';
import { FilterService } from '../../services';
import { MediaItemComponent } from '../media-item/media-item.component';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports:[MediaItemComponent],
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent {
  $filters = input.required<IFilterOptions | undefined>({ alias: "filters"});
  $medias = input.required<IMedia[]>({ alias: "medias"});
  
  private filterService = inject(FilterService);

  private $sortedMedias = computed(() => {
    return [...this.$medias()].sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
  });

  readonly $filtered = computed(() => {
    const filters = this.$filters();
    let result = this.$sortedMedias();
    if(!filters){
      return result;      
    }
    result = this.filterService.filterByGenre(result, filters.genre);
    result = this.filterService.filterByDecade(result, filters.decades);
    result = this.filterService.filterBySearch(result, filters.searchQuery);
    
    return result;
  });
}