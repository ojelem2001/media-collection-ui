import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MediaItemComponent } from './components/media-item/media-item.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthFormComponent } from './components/auth/auth-form/auth-form.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { MediaFiltersComponent } from './components/media-filters/media-filters.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { serverRoutes } from './app.routes.server';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaFiltersComponent,
    ThemeSwitcherComponent,
    AuthFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(serverRoutes)
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
