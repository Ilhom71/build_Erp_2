import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Customers } from './features/customers/customers';
import { Resources } from './features/resources/resources';
import { Contact } from './features/contact/contact';
import { Blog } from './features/blog/blog';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home },
      { path: 'customers', component: Customers },
      { path: 'resources', component: Resources },
      { path: 'contact', component: Contact },
      { path: 'blog', component: Blog },
    ]
  },
];
