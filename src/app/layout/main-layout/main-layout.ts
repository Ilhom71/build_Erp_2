import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatIconModule, TranslateModule],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css'],
})
export class MainLayout implements OnInit {
  isOpen = false;
  isScrolled = false;
  langtoggle = true;

  langs = [
    { code: 'en', label: 'English', active: false },
    { code: 'uz', label: 'Uzbek', active: true },
    { code: 'rus', label: 'Russian', active: false },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    // Default til
    this.translate.use('uz');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScroll();
    }
  }

  checkScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.pageYOffset > 50;
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // Dropdown tilni ochish/yopish
  toggleLangDropdown() {
    this.langtoggle = !this.langtoggle;
  }

  // Tilni tanlash
  changeLang(langCode: string) {
    this.langs = this.langs.map((lang) => ({
      ...lang,
      active: lang.code === langCode,
    }));

    this.translate.use(langCode);
    console.log('Til o\'zgartirildi:', this.translate.currentLang);
    this.langtoggle = false; // dropdownni yopish
  }
}
