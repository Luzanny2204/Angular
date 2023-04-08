import { Component } from '@angular/core';

@Component({
  selector: 'app-nome',
  templateUrl: './nome.component.html',
  styleUrls: ['./nome.component.css']
})
export class NomeComponent {
 nome='';

exibirNome(){
  const nome=prompt('Insire seu nome');

  if(nome!==null){
    this.nome=nome;
  }
}
}
