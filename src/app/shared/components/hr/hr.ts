import { Component, signal, computed, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HrInterface } from '../model/hr';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hr',
  standalone: true,
  imports: [MatIconModule, TranslateModule],
  templateUrl: './hr.html',
  styleUrl: './hr.css',
})
export class Hr implements OnDestroy {
  private sub!: Subscription;

  constructor(private translate: TranslateService) {
    this.loadHrData(); // 🔥 constructor’da chaqiramiz
  }

  arr = signal<HrInterface[]>([]);

  img = computed(
    () => this.arr().find((item) => item.active)?.img ?? ''
  );

  setActive(id: number) {
    this.arr.update((items) =>
      items.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
  }

  loadHrData(): void {
    this.sub = this.translate
      .stream('pages.home.hr.arr')
      .subscribe((res: HrInterface[]) => {
        this.arr.set(
          res.map((item, index) => ({
            ...item,
            id: item.id ?? index + 1,
            active: index === 0,
          }))
        );
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
