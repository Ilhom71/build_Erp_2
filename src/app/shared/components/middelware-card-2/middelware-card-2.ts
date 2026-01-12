import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-middelware-card-2',
  imports: [],
  templateUrl: './middelware-card-2.html',
  styleUrl: './middelware-card-2.css',
})
export class MiddelwareCard2 {
  @Input() title = 'Seamless Integration';
  @Input() text = `KPI integration is simplified and can be done simply with KPI tech support.
No need to worry about adding data manually, all of the integration is done by the KPI tech
support with care and attention to the details.`;

  @Input() imgSrc =
    'https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/mobile-payway.png';

  @Input() leftSide = true;
}
