import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-middelware-card',
  imports: [],
  templateUrl: './middelware-card.html',
  styleUrl: './middelware-card.css',
})
export class MiddelwareCard {
  @Input() title="Essential Business Applications";
  @Input() text=`    KPI apps provide solutions for all your business needs that are cloud-based and easily
    integratable with over softwares. Whether business needs are in accounting, sales, payroll, HR,
    project management, reports and documentation, KPI will cover it.`;
  @Input() imgSrc="https://www.kpi.com/wp-content/themes/thesaas-child/files/images/home-img/new-home-service-1.png";
}
