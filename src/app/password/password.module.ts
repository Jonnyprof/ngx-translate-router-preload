import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PasswordRoutingModule } from './password-routing.module';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [ResetComponent],
  imports: [
    CommonModule,
    TranslateModule,
    PasswordRoutingModule
  ]
})
export class PasswordModule {
}
