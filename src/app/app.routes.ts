import { Routes } from '@angular/router';
import { UserMediaComponent } from './containers/user-media/user-media.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: ':userId',
    component: UserMediaComponent,
    pathMatch: 'prefix'
  },
  {
    path: '',
    component: UserMediaComponent,
    pathMatch: 'full'
  }
];