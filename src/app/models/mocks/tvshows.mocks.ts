import { IMedia } from './../media.interface';
import { MediaType } from './../media.enum';
import { AggregatorType } from './../aggregator.enum';


export const TV_SHOWS_MOCKS: IMedia[] = 
[
  {
    "title": "Андор",
    "originalTitle": "Andor",
    "year": 2022,
    "description": "Приквел к 'Звездным войнам' о Кассиане Андорре.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8b/Star_Wars_Andor.jpg/640px-Star_Wars_Andor.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt9253284",
        "rating": 8.4,
        "genres": ["Sci-Fi", "Drama", "Adventure"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234576",
        "rating": 8.2,
        "genres": ["Фантастика", "Драма", "Приключения"],
        "description": "История становления Кассиана Андорра, который станет ключевой фигурой в борьбе повстанцев против Галактической Империи."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "andor",
        "rating": 4.3,
        "genres": ["Sci-Fi", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 12,
      "endYear": 2022
    }
  },
  {
    "title": "Аркейн",
    "originalTitle": "Arcane",
    "year": 2021,
    "description": "История происхождения двух легендарных чемпионов League of Legends.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSSzHB_KX1vBQBSfx989zlfFNpqjGb80I9g&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt11126994",
        "rating": 9.0,
        "genres": ["Animation", "Action", "Adventure"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234577",
        "rating": 9.1,
        "genres": ["Аниме", "Фантастика", "Драма"],
        "description": "Визуально потрясающий анимационный сериал, раскрывающий историю персонажей вселенной League of Legends."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "arcane",
        "rating": 4.7,
        "genres": ["Animation", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 9,
      "endYear": 2021
    }
  },
  {
    "title": "Атланта",
    "originalTitle": "Atlanta",
    "year": 2016,
    "description": "История двух кузенов, пытающихся пробиться в мире рэп-музыки.",
    "posterUrl": "https://irecommend.ru/sites/default/files/product-images/2708446/tXAyjSWUUlbYCD2m96c2uw.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt4288182",
        "rating": 8.6,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234578",
        "rating": 8.4,
        "genres": ["Комедия", "Драма"],
        "description": "Уникальный сериал Дональда Гловера о жизни в Атланте, сочетающий социальную сатиру, сюрреализм и глубокие размышления о современной культуре."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "atlanta",
        "rating": 4.4,
        "genres": ["Comedy", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 4,
      "episodes": 41,
      "endYear": 2022
    }
  },
  {
    "title": "Друзья",
    "originalTitle": "Friends",
    "year": 1994,
    "description": "Культовый ситком о жизни шестерых друзей в Нью-Йорке.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0108778",
        "rating": 8.9,
        "genres": ["Comedy", "Romance"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234579",
        "rating": 9.0,
        "genres": ["Комедия", "Ситком"],
        "description": "Легендарный ситком о шестерых друзьях, живущих в Нью-Йорке, который стал культурным феноменом и символом целого поколения."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "friends",
        "rating": 4.5,
        "genres": ["Comedy"]
      }
    ],
    "seriesInfo": {
      "seasons": 10,
      "episodes": 236,
      "endYear": 2004
    }
  },
  {
    "title": "Чёрные паруса",
    "originalTitle": "Black Sails",
    "year": 2014,
    "description": "Пиратская сага, приквел к 'Острову сокровищ'.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGZmOGNjNzUtNTNkMC00ZDU2LThjMDAtZGM2OGRjMjE1OGQ5XkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt2375692",
        "rating": 8.2,
        "genres": ["Adventure", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234580",
        "rating": 8.3,
        "genres": ["Приключения", "Драма", "Исторический"],
        "description": "Захватывающая пиратская сага, рассказывающая о событиях, предшествующих роману 'Остров сокровищ'."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "black-sails",
        "rating": 4.2,
        "genres": ["Adventure", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 4,
      "episodes": 38,
      "endYear": 2017
    }
  },
  {
    "title": "Реальные парни",
    "originalTitle": "Blue Mountain State",
    "year": 2010,
    "description": "О жизни студентов-футболистов колледжа.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7930922_b_v8_ac.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1378167",
        "rating": 8.2,
        "genres": ["Comedy", "Sport"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234581",
        "rating": 8.1,
        "genres": ["Комедия", "Спорт"],
        "description": "Отвязная комедия о жизни студентов-футболистов колледжа, полная безумных вечеринок и абсурдных ситуаций."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "blue-mountain-state",
        "rating": 3.9,
        "genres": ["Comedy"]
      }
    ],
    "seriesInfo": {
      "seasons": 3,
      "episodes": 39,
      "endYear": 2011
    }
  },
  {
    "title": "Блудливая Калифорния",
    "originalTitle": "Californication",
    "year": 2007,
    "description": "О писателе Хэнке Муди и его хаотичной жизни в Лос-Анджелесе.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7895125_b_v13_aa.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0904208",
        "rating": 8.3,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234582",
        "rating": 8.2,
        "genres": ["Комедия", "Драма"],
        "description": "История харизматичного писателя Хэнка Муди, который балансирует между творческим кризисом, сложными отношениями и бесконечными соблазнами Лос-Анджелеса."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "californication",
        "rating": 4.0,
        "genres": ["Comedy", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 7,
      "episodes": 84,
      "endYear": 2014
    }
  },
  {
    "title": "Утиные истории",
    "originalTitle": "DuckTales",
    "year": 2017,
    "description": "Современная адаптация классического мультсериала.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTA2NTc5MzQwNV5BMl5BanBnXkFtZTgwOTY2ODI2MjI@._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt5766194",
        "rating": 8.0,
        "genres": ["Animation", "Adventure", "Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234583",
        "rating": 8.1,
        "genres": ["Мультфильм", "Приключения", "Комедия"],
        "description": "Обновленная версия классического мультсериала о приключениях Скруджа МакДака и его племянников."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "ducktales",
        "rating": 4.0,
        "genres": ["Animation", "Adventure"]
      }
    ],
    "seriesInfo": {
      "seasons": 3,
      "episodes": 75,
      "endYear": 2021
    }
  },
  {
    "title": "Красавцы",
    "originalTitle": "Entourage",
    "year": 2004,
    "description": "О молодом актере и его друзьях в Голливуде.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjEyYWJlMDktNGEwMi00OTRjLWE4YzgtOTMwNDc0NzQzMDlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0387199",
        "rating": 8.4,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1234584",
        "rating": 8.3,
        "genres": ["Комедия", "Драма"],
        "description": "Сериал о взлетах и падениях молодого актера и его друзей в жестоком мире Голливуда."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "entourage",
        "rating": 4.1,
        "genres": ["Comedy", "Drama"]
      }
    ],
    "seriesInfo": {
      "seasons": 8,
      "episodes": 96,
      "endYear": 2011
    }
  },
  {
    "title": "Хулиганы и ботаны",
    "originalTitle": "Freaks and Geeks",
    "year": 1999,
    "description": "Культовый сериал о школьниках 1980-х.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDk4MTRlZjMtYTMxYi00ZjdkLWEyYjYtZjg1NjBlMzY2MDIzXkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0193676",
        "rating": 8.8,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.4,
        "genres": ["Комедия", "Драма"],
        "description": "Сериал рассказывает о жизни двух групп подростков в средней школе в начале 1980-х: «хулиганов» и «ботаников»."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "freaks-and-geeks",
        "rating": 4.2
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 18,
      "endYear": 2000
    }
  },
  {
    "title": "Гравити Фолз",
    "originalTitle": "Gravity Falls",
    "year": 2012,
    "description": "Близнецы исследуют аномалии в городке Гравити Фолз.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1865718",
        "rating": 8.9,
        "genres": ["Animation", "Adventure", "Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "535341",
        "rating": 8.8,
        "genres": ["Мультфильм", "Мистика", "Комедия"],
        "description": "Близнецы Диппер и Мэйбл проводят лето у своего дяди Стэна в городке Гравити Фолз, где происходят странные и загадочные события."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "gravity-falls",
        "rating": 4.3
      }
    ],
    "seriesInfo": {
      "seasons": 2,
      "episodes": 40,
      "endYear": 2016
    }
  },
  {
    "title": "Удивительные странствия Геракла",
    "originalTitle": "Hercules: The Legendary Journeys",
    "year": 1995,
    "description": "Приключения Геракла в древнегреческом мире.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ae24Rd8nJGKKb8yYkb5gk8PVGlOgRLfZRw&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0111999",
        "rating": 6.7,
        "genres": ["Action", "Adventure", "Fantasy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 7.5,
        "genres": ["Фэнтези", "Приключения"],
        "description": "Сериал рассказывает о приключениях древнегреческого героя Геракла, который странствует по миру, помогая людям и сражаясь с мифическими чудовищами."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "hercules-the-legendary-journeys",
        "rating": 3.1
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 111,
      "endYear": 1999
    }
  },
  {
    "title": "Карточный домик",
    "originalTitle": "House of Cards",
    "year": 2013,
    "description": "О беспринципном конгресмене Фрэнке Андервуде.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1856010",
        "rating": 8.7,
        "genres": ["Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "535341",
        "rating": 8.2,
        "genres": ["Драма", "Политика"],
        "description": "Амбициозный конгрессмен Фрэнк Андервуд и его жена Клэр готовы на всё, чтобы добиться власти в Вашингтоне."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "house-of-cards",
        "rating": 3.9
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 73,
      "endYear": 2018
    }
  },
  {
    "title": "Полиция Майами",
    "originalTitle": "Miami Vice",
    "year": 1984,
    "description": "Культовый сериал о двух детективах под прикрытием.",
    "posterUrl": "https://resizing.flixster.com/e9eUsEHrrGMruRp-qMFoev2yfko=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183928_i_v9_ab.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0086759",
        "rating": 7.6,
        "genres": ["Action", "Crime", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 7.9,
        "genres": ["Криминал", "Драма"],
        "description": "Детективы Сонни Крокет и Рико Таббс работают под прикрытием в отделе по борьбе с наркотиками полиции Майами."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "miami-vice",
        "rating": 3.5
      }
    ],
    "seriesInfo": {
      "seasons": 5,
      "episodes": 111,
      "endYear": 1989
    }
  },
  {
    "title": "Детективное агентство «Лунный свет»",
    "originalTitle": "Moonlighting",
    "year": 1985,
    "description": "О частных детективах Мэдди и Дэвиде.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzUyNzMzMDctOTAwYi00MzgwLWIyODUtNjgyMmEyY2EzYjY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0088576",
        "rating": 7.8,
        "genres": ["Comedy", "Drama", "Mystery"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 8.0,
        "genres": ["Комедия", "Детектив"],
        "description": "Бывшая модель Мэдди Хейс и харизматичный Дэвид Эддисон ведут детективное агентство «Лунный свет»."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "moonlighting",
        "rating": 3.6
      }
    ],
    "seriesInfo": {
      "seasons": 5,
      "episodes": 66,
      "endYear": 1989
    }
  },
  {
    "title": "Мистер Робот",
    "originalTitle": "Mr. Robot",
    "year": 2015,
    "description": "Хакер Эллиот пытается изменить мир.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8ZaprxvWUtksGRD_FZhknNiJNPjEovTYSg&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt4158110",
        "rating": 8.5,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "535341",
        "rating": 8.6,
        "genres": ["Триллер", "Драма", "Киберпанк"],
        "description": "Эллиот Алдерсон — молодой инженер кибербезопасности и хакер, страдающий от социальной тревожности и клинической депрессии."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "mr-robot",
        "rating": 4.1
      }
    ],
    "seriesInfo": {
      "seasons": 4,
      "episodes": 45,
      "endYear": 2019
    }
  },
  {
    "title": "Детектив Нэш Бриджес",
    "originalTitle": "Nash Bridges",
    "year": 1996,
    "description": "О работе инспектора полиции Сан-Франциско.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE3MTY2NjA1N15BMl5BanBnXkFtZTcwOTY4MjY5MQ@@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0115270",
        "rating": 6.5,
        "genres": ["Action", "Comedy", "Crime"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 7.1,
        "genres": ["Криминал", "Драма"],
        "description": "Инспектор Нэш Бриджес возглавляет специальный отряд полиции Сан-Франциско."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "nash-bridges",
        "rating": 3.0
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 122,
      "endYear": 2001
    }
  },
  {
    "title": "Новенькая",
    "originalTitle": "New Girl",
    "year": 2011,
    "description": "Девушка Джесс переезжает жить к трем парням.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1826940",
        "rating": 7.7,
        "genres": ["Comedy", "Romance"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "535341",
        "rating": 7.9,
        "genres": ["Комедия"],
        "description": "После расставания с парнем жизнерадостная Джесс переезжает в квартиру к трем незнакомым парням."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "new-girl",
        "rating": 3.7
      }
    ],
    "seriesInfo": {
      "seasons": 7,
      "episodes": 146,
      "endYear": 2018
    }
  },
  {
    "title": "Пси Фактор: Хроники паранормальных явлений",
    "originalTitle": "Psi Factor",
    "year": 1996,
    "description": "О расследованиях паранормальных явлений.",
    "posterUrl": "https://www.kinonews.ru/insimgs/2023/poster/poster115636_1.webp",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0115341",
        "rating": 6.8,
        "genres": ["Drama", "Horror", "Mystery"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 7.2,
        "genres": ["Фантастика", "Мистика"],
        "description": "Команда учёных исследует паранормальные явления по всему миру."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "psi-factor",
        "rating": 3.2
      }
    ],
    "seriesInfo": {
      "seasons": 4,
      "episodes": 88,
      "endYear": 2000
    }
  },
  {
    "title": "Рик и Морти",
    "originalTitle": "Rick and Morty",
    "year": 2013,
    "description": "Безумные приключения ученого и его внука.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt2861424",
        "rating": 9.1,
        "genres": ["Animation", "Adventure", "Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "685540",
        "rating": 9.0,
        "genres": ["Мультфильм", "Фантастика", "Комедия"],
        "description": "Сумасшедшие приключения циничного гениального ученого Рика Санчеза и его наивного, но храброго внука Морти Смита."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "rick-and-morty",
        "rating": 4.5
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 61,
      "endYear": 2023
    }
  },
  {
    "title": "Клиника",
    "originalTitle": "Scrubs",
    "year": 2001,
    "description": "О буднях врачей больницы Сакред Харт.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDYwNTk4YzEtMTRjNS00YWZjLTlkOWYtYzFlYWQyMjU2ZjkwXkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0285403",
        "rating": 8.4,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "83805",
        "rating": 8.6,
        "genres": ["Комедия", "Драма", "Ситком"],
        "description": "Молодой доктор Джон Дориан начинает свою медицинскую практику в больнице Сакред Харт, где его ждут не только профессиональные испытания, но и забавные ситуации."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "scrubs",
        "rating": 4.0
      }
    ],
    "seriesInfo": {
      "seasons": 9,
      "episodes": 182,
      "endYear": 2010
    }
  },
  {
    "title": "Терапия",
    "originalTitle": "Shrinking",
    "year": 2023,
    "description": "Терапевт начинает говорить пациентам правду.",
    "posterUrl": "https://resizing.flixster.com/ZOo1dmJSS7i_BKnjxx66Pv7Ag6s=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDQ4ZTM1ZjQtNWE0Zi00NGY0LWI3ZTItMjAzYjExOGRiZjViLmpwZw==",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt15677150",
        "rating": 7.9,
        "genres": ["Comedy", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1395869",
        "rating": 7.7,
        "genres": ["Комедия", "Драма"],
        "description": "Терапевт Джимми переживает личную трагедию и решает радикально изменить подход к работе, начав говорить пациентам жесткую правду."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "shrinking",
        "rating": 3.8
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 10,
      "endYear": 2023
    }
  },
  {
    "title": "Снегопад",
    "originalTitle": "Snowfall",
    "year": 2017,
    "description": "О эпидемии крэка в Лос-Анджелесе 1980-х.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAl0JS9PiK20l5N-y7Qkbf0eLh1KqK-U8Sw&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt6439752",
        "rating": 8.5,
        "genres": ["Crime", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1045582",
        "rating": 8.1,
        "genres": ["Криминал", "Драма"],
        "description": "Сериал рассказывает о начале эпидемии крэка в Лос-Анджелесе в 1980-х годах и людях, чьи судьбы переплелись с наркоторговлей."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "snowfall",
        "rating": 4.1
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 60,
      "endYear": 2023
    }
  },
  {
    "title": "Southland",
    "originalTitle": "Southland",
    "year": 2009,
    "description": "Реалистичный взгляд на работу полиции Лос-Анджелеса.",
    "posterUrl": "https://preview.redd.it/southland-2009-2013-v0-5uyj62hdjybd1.jpeg?auto=webp&s=9342b45c91c3a3cd10136e2f7508b02f29c2a4e2",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1245112",
        "rating": 8.4,
        "genres": ["Crime", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "435756",
        "rating": 8.3,
        "genres": ["Криминал", "Драма"],
        "description": "Реалистичная драма о буднях полицейских Лос-Анджелеса, показывающая их работу без прикрас."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "southland",
        "rating": 3.9
      }
    ],
    "seriesInfo": {
      "seasons": 5,
      "episodes": 43,
      "endYear": 2013
    }
  },
  {
    "title": "Stranger Things",
    "originalTitle": "Stranger Things",
    "year": 2016,
    "description": "Дети сталкиваются с сверхъестественными явлениями.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt4574334",
        "rating": 8.7,
        "genres": ["Drama", "Fantasy", "Horror"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1045582",
        "rating": 8.6,
        "genres": ["Фантастика", "Ужасы", "Драма"],
        "description": "В маленьком городке исчезает мальчик, и его друзья сталкиваются с таинственными явлениями, связанными с секретными экспериментами правительства."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "stranger-things",
        "rating": 4.3
      }
    ],
    "seriesInfo": {
      "seasons": 4,
      "episodes": 34,
      "endYear": 2022
    }
  },
  {
    "title": "Сверхъестественное",
    "originalTitle": "Supernatural",
    "year": 2005,
    "description": "Братья Винчестеры охотятся на нечисть.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d6ZXc0m64u2MGYJ-hfc6mDdpZq5fTkgd98dGj_-pWxgxLe06aZVuiFDFgInkra99bPk&usqp=CAU",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0460681",
        "rating": 8.4,
        "genres": ["Drama", "Fantasy", "Horror"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.4,
        "genres": ["Фэнтези", "Ужасы", "Драма"],
        "description": "Братья Сэм и Дин Винчестеры путешествуют по Америке, расследуя паранормальные явления и сражаясь с демонами, призраками и другими сверхъестественными существами."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "supernatural",
        "rating": 3.9
      }
    ],
    "seriesInfo": {
      "seasons": 15,
      "episodes": 327,
      "endYear": 2020
    }
  },
  {
    "title": "Двойка",
    "originalTitle": "The Deuce",
    "year": 2017,
    "description": "О зарождении порноиндустрии в Нью-Йорке 1970-х.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/2/2e/The_Deuce_%28TV_series%29.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt4998350",
        "rating": 8.0,
        "genres": ["Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1045582",
        "rating": 7.8,
        "genres": ["Драма", "Криминал"],
        "description": "Сериал рассказывает о зарождении порноиндустрии в Нью-Йорке 1970-х годов и людях, которые стояли у ее истоков."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-deuce",
        "rating": 3.7
      }
    ],
    "seriesInfo": {
      "seasons": 3,
      "episodes": 25,
      "endYear": 2019
    }
  },
  {
    "title": "Клан Сопрано",
    "originalTitle": "The Sopranos",
    "year": 1999,
    "description": "Классический сериал о мафиозной семье.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9GuggQnlxBgQ3W7HwN7fDZokY8tNzl6trQ&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0141842",
        "rating": 9.2,
        "genres": ["Crime", "Drama"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 9.1,
        "genres": ["Криминал", "Драма"],
        "description": "Тони Сопрано - глава мафиозной семьи из Нью-Джерси, который пытается балансировать между криминальным миром и семейными проблемами, посещая психотерапевта."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-sopranos",
        "rating": 4.6
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 86,
      "endYear": 2007
    }
  },
  {
    "title": "Прослушка",
    "originalTitle": "The Wire",
    "year": 2002,
    "description": "Реалистичный взгляд на наркоторговлю в Балтиморе.",
    "posterUrl": "https://m.media-amazon.com/images/I/81ucKbnIugS._UF894,1000_QL80_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0306414",
        "rating": 9.3,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 9.2,
        "genres": ["Криминал", "Драма"],
        "description": "Многослойный реалистичный взгляд на наркоторговлю в Балтиморе, показывающий проблему с разных сторон: полиции, наркодилеров, политиков и обычных жителей."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-wire",
        "rating": 4.7
      }
    ],
    "seriesInfo": {
      "seasons": 5,
      "episodes": 60,
      "endYear": 2008
    }
  },
  {
    "title": "The X-Files",
    "originalTitle": "The X-Files",
    "year": 1993,
    "description": "Агенты ФБР расследуют паранормальные явления.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaju3E3ZFFWsdPkilth4f4pGB3HlbSTHKVQ&s",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0106179",
        "rating": 8.6,
        "genres": ["Crime", "Drama", "Mystery"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.7,
        "genres": ["Фантастика", "Мистика", "Драма"],
        "description": "Агенты ФБР Фокс Малдер и Дана Скалли расследуют необъяснимые дела, связанные с паранормальными явлениями, заговорами и внеземными цивилизациями."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-x-files",
        "rating": 4.2
      }
    ],
    "seriesInfo": {
      "seasons": 11,
      "episodes": 218,
      "endYear": 2018
    }
  },
  {
    "title": "Теория большого взрыва",
    "originalTitle": "The Big Bang Theory",
    "year": 2007,
    "description": "О жизни группы друзей-ученых.",
    "posterUrl": "https://m.media-amazon.com/images/I/71qKFGIrv2L._UF1000,1000_QL80_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0898266",
        "rating": 8.1,
        "genres": ["Comedy", "Romance"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.3,
        "genres": ["Комедия", "Ситком"],
        "description": "История двух блестящих физиков-теоретиков, их друзей и соседки, которая мечтает стать актрисой и совершенно не разбирается в науке."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-big-bang-theory",
        "rating": 3.5
      }
    ],
    "seriesInfo": {
      "seasons": 12,
      "episodes": 279,
      "endYear": 2019
    }
  },
  {
    "title": "Бывает и хуже",
    "originalTitle": "The Middle",
    "year": 2009,
    "description": "О жизни средней американской семьи.",
    "posterUrl": "https://m.media-amazon.com/images/I/919165pXYHL._UF1000,1000_QL80_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1442464",
        "rating": 7.6,
        "genres": ["Comedy", "Family"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "435756",
        "rating": 7.8,
        "genres": ["Комедия"],
        "description": "Ситком о жизни семьи Хек из маленького городка в Индиане, которая пытается свести концы с концами и сохранить семью в условиях постоянного кризиса."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-middle",
        "rating": 3.4
      }
    ],
    "seriesInfo": {
      "seasons": 9,
      "episodes": 215,
      "endYear": 2018
    }
  },
  {
    "title": "Щит",
    "originalTitle": "The Shield",
    "year": 2002,
    "description": "О коррумпированном полицейском отряде.",
    "posterUrl": "https://ru-images.kinorium.com/movie/200/229716.jpg?1667345472",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0286486",
        "rating": 8.7,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.5,
        "genres": ["Криминал", "Драма"],
        "description": "Вик Мэкки - лидер ударного отряда полиции Лос-Анджелеса, который использует незаконные методы борьбы с преступностью, переступая грань между законом и беззаконием."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-shield",
        "rating": 4.3
      }
    ],
    "seriesInfo": {
      "seasons": 7,
      "episodes": 88,
      "endYear": 2008
    }
  },
  {
    "title": "Два с половиной человека",
    "originalTitle": "Two and a Half Men",
    "year": 2003,
    "description": "О непохожих братьях и сыне одного из них.",
    "posterUrl": "https://static.thcdn.com/images/large/original/productimg/960/960/8430268-1904324891893852.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0369179",
        "rating": 7.0,
        "genres": ["Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 7.5,
        "genres": ["Комедия", "Ситком"],
        "description": "Богатый донжуан Чарли Харпер и его занудный брат Алан, который после развода переезжает к нему с сыном Джейком, вынуждены жить вместе в одном доме в Малибу."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "two-and-a-half-men",
        "rating": 2.9
      }
    ],
    "seriesInfo": {
      "seasons": 12,
      "episodes": 262,
      "endYear": 2015
    }
  },
  {
    "title": "В глуши",
    "originalTitle": "Untamed",
    "year": 2025,
    "description": "Расследование в лесах Йосемити или когда «Настоящий детектив» заблудился в «Йеллоустоуне». Работник Йосемитского национального парка Кайл Тернер расследует жестокое убийство на территории калифорнийского заповедника.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODkxMDM5YWItNDcxZi00NjQ3LWE3NzMtNjM0MzgyNWM0MDhhXkEyXkFqcGc@._V1_.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt12345678",
        "rating": undefined,
        "genres": ["Drama", "Thriller"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1395869",
        "rating": undefined,
        "genres": ["Триллер", "Драма", "Криминал", "Детектив"],
        "description": "Новый сериал от создателей «Настоящего детектива» о расследовании убийства в национальном парке Йосемити, где переплетаются человеческие драмы и тайны дикой природы."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "untamed",
        "rating": undefined
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 8,
      "endYear": 2025
    }
  },
  {
    "title": "Винил",
    "originalTitle": "Vinyl",
    "year": 2016,
    "description": "О музыкальной индустрии 1970-х в Нью-Йорке.",
    "posterUrl": "https://images.justwatch.com/poster/183519255/s718/vinyl.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt3560060",
        "rating": 7.4,
        "genres": ["Drama", "Music"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1045582",
        "rating": 7.2,
        "genres": ["Драма", "Музыка"],
        "description": "Нью-Йорк, 1970-е. Ричи Финестра - владелец звукозаписывающей компании, который пытается спасти свой бизнес и найти новое звучание в эпоху расцвета рок-н-ролла."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "vinyl",
        "rating": 3.3
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 10,
      "endYear": 2016
    }
  },
  {
    "title": "Безумная любовь",
    "originalTitle": "Mad love",
    "year": 2011,
    "description": "Российский сериал о сложных отношениях.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c577306e-dc46-4a82-a85b-2d17ec3eccf9/600x900",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1837576",
        "rating": 6.5,
        "genres": ["Drama", "Romance"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "435756",
        "rating": 6.8,
        "genres": ["Драма", "Мелодрама"],
        "description": "История сложных взаимоотношений двух пар, чьи жизни переплетаются из-за любовного треугольника и семейных тайн."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "mad-love",
        "rating": 2.8
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 13,
      "endYear": 2011
    }
  },
  {
    "title": "Как я встретил вашу маму",
    "originalTitle": "How I Met Your Mother",
    "year": 2005,
    "description": "комедийный сериал о приключениях Теда Мосби и его друзей в Нью-Йорке. Через забавные и трогательные истории Тед рассказывает детям, как встретил их маму, раскрывая секреты дружбы, любви и взросления. Идеальный выбор для тех, кто любит лёгкий юмор и душевные моменты!",
    "posterUrl": "https://www.kino-teatr.ru/movie/posters/big/5/6/20165.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0460649",
        "rating": 8.3,
        "genres": ["Comedy", "Romance"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.5,
        "genres": ["Комедия", "Романтика", "Ситком"],
        "description": "Тед Мосби рассказывает своим детям историю о том, как он встретил их мать, вспоминая свои приключения в Нью-Йорке вместе с друзьями."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "how-i-met-your-mother",
        "rating": 3.7
      }
    ],
    "seriesInfo": {
      "seasons": 9,
      "episodes": 208,
      "endYear": 2014
    }
  },
  {
    "title": "Киностудия",
    "originalTitle": "The Studio",
    "year": 2025,
    "description": "Продюсер Мэтт Ремик получает долгожданное повышение и становится главой кинокомпании Continental Studios. Его первый проект на новой должности — супергеройский дорогостоящий фильм, на который его босс возлагает большие надежды.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/49fa0f44-c8da-4e24-b9bd-8839afb62e5f/600x900",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt12345679",
        "rating": undefined,
        "genres": ["Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1395870",
        "rating": undefined,
        "genres": ["Комедия"],
        "description": "Сатирический взгляд на голливудскую киноиндустрию через призму работы кинокомпании Continental Studios и её нового главы Мэтта Ремика."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "the-studio",
        "rating": undefined
      }
    ],
    "seriesInfo": {
      "seasons": 2,
      "episodes": 16,
      "endYear": 2026
    }
  },
  {
    "title": "Кремниевая долина",
    "originalTitle": "Silicon Valley",
    "year": 2014,
    "description": "О стартаперах в Кремниевой долине.",
    "posterUrl": "https://ru-images.kinorium.com/movie/1080/679783.jpg?1652086465",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt2575988",
        "rating": 8.5,
        "genres": ["Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "685540",
        "rating": 8.4,
        "genres": ["Комедия"],
        "description": "Группа гиков пытается создать стартап в конкурентной среде Кремниевой долины, сталкиваясь с абсурдными ситуациями и корпоративными интригами."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "silicon-valley",
        "rating": 4.0
      }
    ],
    "seriesInfo": {
      "seasons": 6,
      "episodes": 53,
      "endYear": 2019
    }
  },
  {
    "title": "Меломанка",
    "originalTitle": "High Fidelity",
    "year": 2020,
    "description": "О девушке, работающей на виниловом заводе в 1990-х.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/a59c97f5-ea4a-4708-a1d1-949a34dc3ba3/600x900",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt8134470",
        "rating": 7.3,
        "genres": ["Comedy", "Drama", "Music"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1236063",
        "rating": 7.1,
        "genres": ["Драма", "Музыка"],
        "description": "Робин, владелица винилового магазина в Бруклине, пересматривает свои прошлые отношения под звуки любимых пластинок."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "high-fidelity",
        "rating": 3.5
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 10,
      "endYear": 2020
    }
  },
  {
    "title": "Монстры корпораций",
    "originalTitle": "Corporate",
    "year": 2018,
    "description": "О абсурде корпоративной культуры.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/591519e4-93c6-4047-8c76-26dba02e3393/600x900",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt6288124",
        "rating": 7.3,
        "genres": ["Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1111111",
        "rating": 7.0,
        "genres": ["Комедия"],
        "description": "Два сотрудника крупной корпорации Hampton DeVille пытаются сохранить рассудок в мире абсурдных корпоративных правил и бессмысленных инициатив."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "corporate",
        "rating": 3.4
      }
    ],
    "seriesInfo": {
      "seasons": 3,
      "episodes": 26,
      "endYear": 2020
    }
  },
  {
    "title": "Сайнфелд",
    "originalTitle": "Seinfeld",
    "year": 1989,
    "description": "Культовый сериал о 'ни о чем'.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f32a003f-d00d-4a71-9c71-128fc34b83ee/600x900",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt0098904",
        "rating": 8.9,
        "genres": ["Comedy"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "77044",
        "rating": 8.8,
        "genres": ["Комедия"],
        "description": "Комик Джерри Сайнфелд и его друзья Элейн, Джордж и Крамер попадают в нелепые ситуации из повседневной жизни Нью-Йорка."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "seinfeld",
        "rating": 4.4
      }
    ],
    "seriesInfo": {
      "seasons": 9,
      "episodes": 180,
      "endYear": 1998
    }
  },
  {
    "title": "САС: Неизвестные герои",
    "originalTitle": "SAS: Rogue Heroes",
    "year": 2022,
    "description": "Северная Африка, 1941 год. Молодой и эксцентричный британский офицер Дэвид Стерлинг, убеждённый в неэффективности традиционных методов ведения войны, предлагает радикальный план формирования нового подразделения для выполнения спецопераций и диверсий в тылу нацистов.",
    "posterUrl": "https://www.kino-teatr.ru/movie/poster/156003/237728.jpg",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt13313298",
        "rating": 8.1,
        "genres": ["Action", "Drama", "War"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "1395869",
        "rating": 7.9,
        "genres": ["Драма", "Военный"],
        "description": "История создания британского спецподразделения SAS во время Второй мировой войны группой эксцентричных офицеров под руководством Дэвида Стерлинга."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "sas-rogue-heroes",
        "rating": 3.8
      }
    ],
    "seriesInfo": {
      "seasons": 1,
      "episodes": 6,
      "endYear": 2022
    }
  },
  {
    "title": "Сыны анархии",
    "originalTitle": "Sons of Anarchy",
    "year": 2008,
    "description": "О байкерском клубе в Калифорнии.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/81be3b3e-719f-4d81-8c52-00b82c4e8674/220x330",
    "type": MediaType.Series,
    "aggregators": [
      {
        "type": AggregatorType.IMDB,
        "id": "tt1124373",
        "rating": 8.6,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      {
        "type": AggregatorType.Kinopoisk,
        "id": "435756",
        "rating": 8.5,
        "genres": ["Криминал", "Драма"],
        "description": "Джексон 'Джекс' Теллер пытается управлять байкерским клубом 'Сыны анархии', балансируя между криминалом и семейными обязательствами."
      },
      {
        "type": AggregatorType.Letterboxd,
        "id": "sons-of-anarchy",
        "rating": 4.1
      }
    ],
    "seriesInfo": {
      "seasons": 7,
      "episodes": 92,
      "endYear": 2014
    }
  }
];
