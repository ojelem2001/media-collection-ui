import { MediaType } from './media.enum';
import { MediaPlatform } from './media-platform.model';
import { SeriesModel } from './series.model';

export interface Media {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  description: string;
  posterUrl: string;
  aggregators: MediaPlatform[],
  type: MediaType;
  seriesInfo?: SeriesModel | null,
  seasons?: number;
  episodes?: number;
  filePath?: string; // Путь к файлу на диске
  vlcProtocolLink?: string; // Ссылка для VLC
}