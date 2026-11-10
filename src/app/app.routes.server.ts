import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'register',
    renderMode: RenderMode.Prerender, // Статическую страницу можно пререндерить
  },
  {
    path: ':userId',
    renderMode: RenderMode.Server, // Динамический маршрут рендерим на сервере по запросу
  },
  {
    path: '',
    renderMode: RenderMode.Prerender, // Главную (витрину) можно пререндерить
  },
];