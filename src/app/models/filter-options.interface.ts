import { DecadeFilter } from './decade.enum';

export interface IFilterOptions {
  genre?: string;
  year?: number;
  decades?: DecadeFilter;
  searchQuery?: string;
}