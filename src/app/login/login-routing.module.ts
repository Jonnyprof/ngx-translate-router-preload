import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

import { LoginComponent } from 'src/app/login/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LocalizeRouterModule
  ]
})
export class LoginRoutingModule {
}
