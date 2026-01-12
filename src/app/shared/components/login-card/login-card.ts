import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [MatIcon, RouterLink, TranslateModule],
  templateUrl: './login-card.html',
  styleUrl: './login-card.css',
})
export class LoginCard {}
