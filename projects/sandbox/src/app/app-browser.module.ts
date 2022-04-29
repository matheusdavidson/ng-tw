import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgxGoogleAnalyticsModule } from 'ngx-google-analytics';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        // Common module for server and browser both
        AppModule,

        // Browser-only imports
        NgxGoogleAnalyticsModule.forRoot(environment.ga),
    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule {}
