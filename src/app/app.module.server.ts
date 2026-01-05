import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app-module';

@NgModule({
  imports: [
    AppModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
