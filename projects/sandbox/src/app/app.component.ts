import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public layout: any = 'stroked';
    public color: any = 'basic';
    // title = 'sandbox';

    constructor() {
        setTimeout(()=>{
          this.layout = 'raised'
          // setTimeout(()=>{
          //   this.color = 'primary'
          // }, 5000);
        }, 5000);
    }
}
