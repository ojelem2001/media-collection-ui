import { MediaType } from './media.enum';
import { IMediaPlatform } from './media-platform.interface';
import { ISeriesModel } from './series.interface';

export interface IMedia {
  id?: string;
  title: string;
  originalTitle?: string;
  year: number;
  description: string;
  posterUrl: string;
  aggregators: IMediaPlatform[],
  type: MediaType;
  seriesInfo?: ISeriesModel | null,
  seasons?: number;
  episodes?: number;
  filePath?: string; // Путь к файлу на диске
  vlcProtocolLink?: string; // Ссылка для VLC
}