import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularXprintService {

  constructor() { }

  __printDiv(printArea) {
      let _frame = this._cf();
      document.querySelector('body').appendChild(_frame);
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'assets/state.css';
      window.frames["print_frame"].document.head.appendChild(link);
      var body = document.createElement('body');
      let table=printArea;
      /*  console.log( window['print_frame'].document); */
      window.frames["print_frame"].document.body.innerHTML =table;
      window.frames["print_frame"].focus();
  }

  _cf(){
    let _frame = document.createElement('iframe');
    _frame.name = "print_frame";
    _frame.src = "about:blank";
    _frame.width="0";
    _frame.height="0";
    return _frame;
  }


  printAsPdf(printArea,printCanvas?){
    if (printCanvas.length > 0) {
          for (let i = 0; i < printCanvas.length; i++) {
            (()=>{
              var imageElement= printCanvas[i].parentNode;
              var myImage = printCanvas[i].toDataURL("image/png");
              var image = new Image();
              image.src = myImage;
              var div = document.createElement("div");
              imageElement.insertBefore(div, printCanvas[i]);
              printCanvas[i].parentNode.removeChild(printCanvas[i]);
              div.appendChild(image);
                
              if(i+1 == printCanvas.length){
                
               /*  let _frame = this._cf();
                imageElement.parentNode.insertBefore(_frame, imageElement.nextSibling);
 */                this.__printDiv(printArea);
              } 
            })();
          }
    }else{
     
      this.__printDiv(printArea);
    }
  }
}
