import { Component } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent {

  nome: string="Luisiana Thairina";
  sobrenome: string="Ramirez Maestre";

  palavra(valor:string){
    return valor.toUpperCase();
  }
}

