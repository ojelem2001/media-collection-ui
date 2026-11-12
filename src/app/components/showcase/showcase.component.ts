import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { IMedia } from '../../models';
import { MEDIA_MOCKS } from '../../models/mocks/media.mocks';
import { MediaItemComponent } from '../media-item/media-item.component';
import { isPlatformBrowser } from '@angular/common';
import { DEMO_CONFIG } from '../../config/demo.config';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [RouterLink, MediaItemComponent],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  isBrowser = false;
  heroPosters: IMedia[] = [];
  showcaseMedia: IMedia[] = [];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    const withPoster = MEDIA_MOCKS.filter(m => !!m.posterUrl);
    const shuffled = this.shuffle([...withPoster]);

    this.heroPosters = shuffled.slice(0, 4);
    this.showcaseMedia = shuffled.slice(0, 6);
  } 
  /** Переход на коллекцию демо-пользователя из конфига */
  goToDemo(): void {
    const ids = DEMO_CONFIG.userIds;
    if (!ids.length) {
      // на всякий случай — если конфиг пустой
      this.router.navigate(['/register']);
      return;
    }

    const userId = DEMO_CONFIG.pickRandom
      ? ids[Math.floor(Math.random() * ids.length)]
      : ids[0];

    this.router.navigate([`/${userId}`]);
  }

  scrollToShowcase(): void {
    if (typeof document === 'undefined') return;
    document.getElementById('showcase-grid')?.scrollIntoView({ behavior: 'smooth' });
  }

  /** Перемешивание Фишера–Йетса */
  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}