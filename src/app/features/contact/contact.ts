import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { LoginCard } from '../../shared/components/login-card/login-card';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [BgComponent, LoginCard],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
