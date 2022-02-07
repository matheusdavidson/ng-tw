import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwButtonModule } from 'ng-tw';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TwButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
