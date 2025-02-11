import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem(this.themeKey, theme);
  }

  toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    this.setTheme(isDark ? 'light' : 'dark');
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem(this.themeKey) || 'light';
    this.setTheme(savedTheme as 'light' | 'dark');
  }
}
