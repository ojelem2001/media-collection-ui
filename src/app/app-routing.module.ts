import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: UserMediaComponent 
  },
  { 
    path: '', 
    component: UserMediaComponent,
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      enableTracing: true  
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }