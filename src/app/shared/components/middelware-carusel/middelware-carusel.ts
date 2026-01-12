import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-middelware-carusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './middelware-carusel.html',
  styleUrls: ['./middelware-carusel.css'],
})
export class MiddelwareCarusel implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;
  
cards: any[] = [
  { 
    name: 'Budget', 
    logo: 'https://img.icons8.com/fluency/96/000000/money-bag.png'
  },
  { 
    name: 'Team', 
    logo: 'https://img.icons8.com/fluency/96/000000/conference.png'
  },
  { 
    name: 'Stock', 
    logo: 'https://img.icons8.com/fluency/96/000000/package.png'
  },
  { 
    name: 'Deals', 
    logo: 'https://img.icons8.com/fluency/96/000000/sales-performance.png'
  },
  { 
    name: 'Orders', 
    logo: 'https://img.icons8.com/fluency/96/000000/purchase-order.png'
  },
  { 
    name: 'Factory', 
    logo: 'https://img.icons8.com/fluency/96/000000/factory.png'
  },
  { 
    name: 'Taxes', 
    logo: 'https://img.icons8.com/fluency/96/000000/accounting.png'
  },
  { 
    name: 'Charts', 
    logo: 'https://img.icons8.com/fluency/96/000000/combo-chart.png'
  }
];

  // allCards object array bo'lishi kerak
  allCards: any[] = [];
  animationId: number = 0;
  speed = 1; // px per frame
  position = 0;
  isPaused = false;

  constructor() {
    // Cheksiz loop uchun kartalarni ko'paytiramiz
    this.allCards = [...this.cards, ...this.cards, ...this.cards, ...this.cards];
  }

  ngAfterViewInit() {
    this.startAnimation();
  }

  startAnimation() {
    const animate = () => {
      if (!this.isPaused) {
        this.position -= this.speed;
        
        // Agar birinchi to'plamning oxiriga yetgan bo'lsak
        if (Math.abs(this.position) >= this.cards.length * 136) { // 120px + 16px margin
          this.position = 0;
        }
        
        if (this.carouselTrack) {
          this.carouselTrack.nativeElement.style.transform = `translateX(${this.position}px)`;
        }
      }
      this.animationId = requestAnimationFrame(animate.bind(this));
    };
    
    this.animationId = requestAnimationFrame(animate.bind(this));
  }

  ngOnInit() {}

  onMouseEnter() {
    this.isPaused = true;
  }

  onMouseLeave() {
    this.isPaused = false;
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}
