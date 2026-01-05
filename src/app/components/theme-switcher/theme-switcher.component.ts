import { Component } from '@angular/core';
import { ThemeService } from '../../services';
import { ThemeType } from '../../models';

@Component({
  selector: 'app-theme-switcher',
  standalone: false,
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css'],  
  host: { 'ngSkipHydration': 'true' }
})
export class ThemeSwitcherComponent {
  currentTheme: ThemeType | undefined;
  themes = Object.values(ThemeType);;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getCurrentTheme();
  }
  
  setTheme(theme: ThemeType) {
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
  }

  getThemeName(theme: ThemeType): string {
    return theme.split('-')[0].toUpperCase();
  }
}