import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MediaItemComponent } from './media-item/media-item.component';
import { MovieListComponent } from './media-list/media-list.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { MediaFiltersComponent } from './media-filters/media-filters.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MovieListComponent,
    MediaFiltersComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
