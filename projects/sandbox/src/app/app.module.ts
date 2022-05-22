import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { TwButtonConfigModule, TwButtonModule, TwDropdownModule, TwNotificationModule, TwSelectConfigModule } from 'ng-tw';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        MarkdownModule.forRoot(),
        TwNotificationModule.forRoot(),
        TwDropdownModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
