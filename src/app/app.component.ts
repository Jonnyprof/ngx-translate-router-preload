import { Component } from '@angular/core';

import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-translate-router-preload';

  constructor(private localize: LocalizeRouterService) {
  }

  switchLang() {
    console.log('change lang');
    this.localize.changeLanguage(this.localize.parser.currentLang === 'es' ? 'en' : 'es');
  }
}
