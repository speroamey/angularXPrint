import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularXprintService {

  constructor() { }

  __printDiv(printArea) {
    
/*     window.frames["print_frame"].document.write('<link rel="stylesheet" type="text/css" href="assets/state.css"/>');
 */      let table=printArea;
     /*  window.frames["print_frame"].document.write(table) */
     /*  window.frames["print_frame"].focus(); */
  }


  printAsPdf2(printArea,printCanvas?){
          if (printCanvas.length > 0) {
             var i;
             for (i = 0; i < printCanvas.length; i++) {
                (()=>{
                  console.log(i);
                  
                  var imageElement= printCanvas[i].parentNode;
                  var myImage = printCanvas[i].toDataURL("image/png");
                  var image = new Image();
                  console.log("mon url ",myImage);
                  image.src = myImage;
                  var div = document.createElement("div");
                  imageElement.insertBefore(div, printCanvas[i]);
                  printCanvas[i].parentNode.removeChild(printCanvas[i]);
                  div.appendChild(image);
                
                  if(i+1 == printCanvas.length){
                    let _frame = document.createElement('iframe');
                    _frame.name = "print_frame";
                    _frame.src = "about:blank";
                    _frame.width="0";
                    _frame.height="0";

                    imageElement.parentNode.insertBefore(_frame, imageElement.nextSibling);
                    console.log(_frame);
                    
                    this.__printDiv(printArea);
                  } 
               })();
             }
          }else{
            this.__printDiv(printArea);
        }
  }
}
