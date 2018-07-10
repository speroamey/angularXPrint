import { Component } from '@angular/core';
import { AngularXprintService } from 'angularXprint';

@Component({
  selector: 'ng-print-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-print';

  constructor(private xprintService :AngularXprintService){
    
  }

  public printAsPdf() {
    window.frames["print_frame"].print();
  }
}
