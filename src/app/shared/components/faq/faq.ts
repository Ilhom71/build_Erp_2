import { Component, OnInit, OnDestroy } from '@angular/core';
import { HrInterface } from '../model/hr';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq implements OnInit, OnDestroy {
  arr: HrInterface[] = [];
  private langSub!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // 🔹 Birinchi marta yuklash
    this.loadFaqData();

    // 🔹 Til o‘zgarganda qayta yuklash
    this.langSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadFaqData();
      }
    );
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  OnOpen(id: number): void {
   this.arr = this.arr.map((item) => {
    if(item.id === id){
      item.active = !item.active;
    } else {
      item.active = false;
    } 

    return item;
   })
  }

  loadFaqData(): void {
    this.translate
      .get('pages.home.faq_section.faqs')
      .subscribe((res: HrInterface[]) => {
        this.arr = res;
        this.arr.map((item, index) => {
          item.id = index;
          item.active = false;
        });
      });
  }
}

