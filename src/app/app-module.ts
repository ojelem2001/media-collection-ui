import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { UserMediaComponent } from './containers/user-media/user-media.component';
import { UserMediaCategoriesComponent } from './components/user-media-categories/user-media-categories.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MediaFiltersComponent } from './components/media-filters/media-filters.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaFiltersComponent,
    ThemeSwitcherComponent,
    AuthFormComponent,
    UserMediaComponent,
    UserMediaCategoriesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
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
