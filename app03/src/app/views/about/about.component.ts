import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  nome: string = "Luzanny Ramirez";
  turma: string = "3er Semestre";
  curso: string = "Tecnologia Sistema de Internet";

  somar (valor1:number, valor2:number){
    return valor1+valor2;
  }

  imagem="assets/corea.webp";


}
