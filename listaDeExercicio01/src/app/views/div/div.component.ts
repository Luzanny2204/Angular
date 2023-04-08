import { Component } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent {
  texto="";
  
 ligarDiv(){
   return this.texto='Isso é uma div';;
 }
}
