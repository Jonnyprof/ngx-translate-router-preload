import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateService } from '@ngx-translate/core';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';

export function HttpLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http);
}

const routes: Routes = [
  {
    path: 'LOGIN',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'PASSWORD',
    loadChildren: () => import('./password/password.module').then(m => m.PasswordModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules // Comment this line to work as expected
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [
    RouterModule,
    LocalizeRouterModule
  ]
})
export class AppRoutingModule {
}
