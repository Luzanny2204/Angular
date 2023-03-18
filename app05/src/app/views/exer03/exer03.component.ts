import { Component } from '@angular/core';

@Component({
  selector: 'app-exer03',
  templateUrl: './exer03.component.html',
  styleUrls: ['./exer03.component.css']
})
export class Exer03Component {
  opciones=" ";

  escolherOpcion(opciones: string){
    this.opciones= opciones;
  }
}
