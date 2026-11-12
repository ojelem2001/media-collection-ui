import { IMedia } from './../media.interface';
import { MOVIES_MOCKS } from './movies.mocks';
import { TV_SHOWS_MOCKS } from './tvshows.mocks';

export const MEDIA_MOCKS: IMedia[] = 
[
  ...MOVIES_MOCKS,
  ...TV_SHOWS_MOCKS,
];