import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { LoginCard } from '../../shared/components/login-card/login-card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [BgComponent, LoginCard,TranslateModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
