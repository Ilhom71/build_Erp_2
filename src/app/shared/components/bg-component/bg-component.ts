import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-bg-component',
  standalone:true,
  imports: [],
  templateUrl: './bg-component.html',
  styleUrl: './bg-component.css',
})
export class BgComponent {
  @Input() bg_color:string='grey';
  @Input() title:string='';
  @Input() text:string='';
  @Input() btnName:string='';
  @Input() imgsrc:string='';
  @Input() nextBtn:boolean=false;
  @Input() titlePlus:string='';
}
