import {Directive, OnInit, OnDestroy,ViewChild,ElementRef,ChangeDetectorRef} from '@angular/core';
import { AngularXprintService} from './angular-xprint.service';

@Directive({
  selector: '[spNgxPrintSection]',
  
})
export class SectionDirective implements OnInit{
  
   public ngOnInit(): void {
        let printArea=this.printZone.nativeElement.innerHTML;
        let printCanvas=this.printZone.nativeElement.querySelectorAll('canvas');
        console.log(printCanvas.length);
        this.fc(printCanvas.length,printArea,printCanvas);
      }

      fc(l,printArea,printCanvas){
        if(l>0){
          console.log(printCanvas);
          this._stateService.printAsPdf2(printArea,printCanvas);
          console.log("canvas");
        }else{
          /* this._stateService.printAsPdf2(printArea); */
          console.log(printArea);
          console.log("no canvas");
        }
      }

       constructor(
          private printZone: ElementRef,
          private _changeDetectorRef:ChangeDetectorRef,
          private _stateService: AngularXprintService
      ) {}
   }