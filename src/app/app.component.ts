import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit  {  


  constructor(
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}