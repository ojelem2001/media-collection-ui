import { Component, Input, computed, input } from '@angular/core';
import { IMedia, IMediaPlatform, AggregatorType, MediaType } from '../../models';

@Component({
  selector: 'app-media-item',
  standalone: true,
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent {
 $media = input.required<IMedia>({ alias: "media"});

  mediaType = MediaType;
  aggregatorType = AggregatorType;

  $genres = computed(() => {
    const m = this.$media();
    return m.aggregators?.find(x => x.type === AggregatorType.Kinopoisk)?.genres ?? [];
  });

  getAggregator(media: IMedia, type: AggregatorType): IMediaPlatform | null | undefined {
    return media.aggregators?.find(x => x.type == type);
  }
}