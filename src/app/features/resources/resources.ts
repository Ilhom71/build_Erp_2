import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { LoginCard } from '../../shared/components/login-card/login-card';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-resources',
  standalone:true,
  imports: [BgComponent,LoginCard,TranslateModule],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {

}
