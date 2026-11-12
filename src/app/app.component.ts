import { Component, OnInit, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {
    afterNextRender(() => this.themeService.initializeTheme());
  }

  ngOnInit(): void {
  }
}