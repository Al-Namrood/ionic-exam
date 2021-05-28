import { Storage } from '@capacitor/Storage';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
    ],
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    { provide: LOCALE_ID, useValue: 'fr' },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
