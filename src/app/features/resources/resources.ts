import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { LoginCard } from '../../shared/components/login-card/login-card';


@Component({
  selector: 'app-resources',
  standalone:true,
  imports: [BgComponent,LoginCard],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {

}
