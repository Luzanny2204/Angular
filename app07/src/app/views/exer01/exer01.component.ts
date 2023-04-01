import { Component } from '@angular/core';

@Component({
  selector: 'app-exer01',
  templateUrl: './exer01.component.html',
  styleUrls: ['./exer01.component.css']
})
export class Exer01Component {

  ativo=false;

  ativador(){
    this.ativo = !this.ativo
  }

}
