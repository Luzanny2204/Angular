import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent {
    classCss="vermelho";
    textoAleatorio="Hola mundo! Soy Luzanny";

    mudarCss(){
      if(this.classCss==="vermelho"){
        return this.classCss="azul";
      }else{
        return this.classCss="vermelho";
      }
    }
}
