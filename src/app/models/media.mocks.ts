import { Media } from './media.model';
import { MediaType } from './media.enum';
import { AggregatorType } from './aggregator.enum';

export const MEDIAS_MOCKS: Media[] = 
[
  {
    "id":"3a102d5f-1967-46d2-b3dd-5ca6ae5e0379",
    "title": "Аполлон 13",
    "originalTitle": "Apollo 13",
    "year": 1995,
    "description": "Реальная история астронавтов, которые боролись за выживание после аварии в космосе.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Movie,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0112384",
        "rating": 7.7,
        "genres": ["Drama", "History"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "326",
        "rating": 7.9,
        "genres": ["драма", "история"],
        "description": "История космического корабля «Аполлон-13», который должен был доставить людей на Луну, но из-за аварии превратился в хрупкую скорлупку, плывущую в безвоздушном пространстве."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "apollo-13",
        "rating": 3.9
      }
    ]
  }
];
