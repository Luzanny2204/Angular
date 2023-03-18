import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent {

  desenho= "pais";

  palavra(valor:string){
    return valor.toUpperCase();
  }

}
