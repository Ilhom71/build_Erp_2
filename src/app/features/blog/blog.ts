import { Component } from '@angular/core';
import { LoginCard } from '../../shared/components/login-card/login-card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  imports: [LoginCard,TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
