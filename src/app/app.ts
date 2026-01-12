import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslateModule,RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.use('en');
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
