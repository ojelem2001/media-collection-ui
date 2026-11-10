import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}