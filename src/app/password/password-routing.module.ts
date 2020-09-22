import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocalizeRouterModule } from '@gilsdav/ngx-translate-router';

import { ResetComponent } from './reset/reset.component';

const routes: Routes = [{
  path: 'RESET',
  component: ResetComponent
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
export class PasswordRoutingModule {
}
