import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { Hr } from '../../shared/components/hr/hr';
import { Middelware } from '../../shared/components/middelware/middelware';
import { MiddelwareCard } from '../../shared/components/middelware-card/middelware-card';
import { MiddelwareCard2 } from '../../shared/components/middelware-card-2/middelware-card-2';
import { LoginCard } from '../../shared/components/login-card/login-card';
import { Faq } from '../../shared/components/faq/faq';
import { TranslateModule, TranslateService,LangChangeEvent } from '@ngx-translate/core';
import {  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BgComponent,
    Hr,
    Middelware,
    MiddelwareCard,
    MiddelwareCard2,
    LoginCard,
    Faq,
    TranslateModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  cardItems: any[] = [];
  private langSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    // 🔹 Birinchi yuklanishda
    this.loadCards();

    // 🔹 Til o‘zgarganda qayta ishlaydi
    this.langSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadCards();
      }
    );
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe(); // xotira tozalash
  }

  loadCards() {
    this.translate
      .get('pages.home.mid_section.mid_components.middlewareTexts')
      .subscribe((res: any) => {
        this.cardItems = res;
      });
  }
}