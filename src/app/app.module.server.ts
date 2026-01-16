import { NgModule } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { AppComponent } from './app.component';
import { AppModule } from './app-module';

@NgModule({
  imports: [
    AppModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
