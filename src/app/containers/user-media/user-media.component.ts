import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services';
import { IFilterOptions, MediaType, IUser } from '../../models';
import { ActivatedRoute, RouterLink } from '@angular/router';          // ← RouterLink
import { ThemeSwitcherComponent } from '../../components/theme-switcher/theme-switcher.component';
import { MediaFiltersComponent } from '../../components/media-filters/media-filters.component';
import { AuthFormComponent } from '../../components/auth/auth-form/auth-form.component';
import { UserMediaCategoriesComponent } from '../../components/user-media-categories/user-media-categories.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';

@Component({
  selector: 'app-user-media',
  standalone: true,
  imports: [
    RouterLink,
    ThemeSwitcherComponent,
    MediaFiltersComponent,
    AuthFormComponent,
    UserMediaCategoriesComponent,
    ShowcaseComponent
  ],
  templateUrl: './user-media.component.html',
  styleUrls: ['./user-media.component.scss']
})
export class UserMediaComponent implements OnInit {
  protected readonly title = signal('my-media-collection');
  private platformId: Object;

  userId: string | undefined;
  mediaType = MediaType;
  isBrowser: boolean;

  currentFilters?: IFilterOptions;
  currentUser$?: Observable<IUser | null>;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.platformId = platformId;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) { return; }

    this.currentUser$ = this.authService.currentUser$;

    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
  }

  onFiltersChanged(filters: IFilterOptions) {
    this.currentFilters = filters;
  }
}