import { Component } from '@angular/core';
import { BgComponent } from '../../shared/components/bg-component/bg-component';
import { LoginCard } from '../../shared/components/login-card/login-card';
import { MiddelwareCarusel } from '../../shared/components/middelware-carusel/middelware-carusel';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [BgComponent, LoginCard, MiddelwareCarusel],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {}
