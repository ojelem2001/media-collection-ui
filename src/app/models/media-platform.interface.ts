import { AggregatorType } from './aggregator.enum';

export interface IMediaPlatform {
  id: string;
  type: AggregatorType;
  rating?: number | null;
  description?: string | null;
  genres?: string[] | null;
}