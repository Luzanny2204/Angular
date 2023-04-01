import { Component } from '@angular/core';

@Component({
  selector: 'app-exer05',
  templateUrl: './exer05.component.html',
  styleUrls: ['./exer05.component.css']
})
export class Exer05Component {
  num1=0;
  num2=0;
  resultado=0;

  calcular(op: string){
    if(op=='+'){
      this.resultado= this.num1+this.num2;
    }else if(op=='-'){
      this.resultado= this.num1-this.num2;
    }else if(op=='*'){
      this.resultado= this.num1*this.num2;
    }else if(op=='/'){
      this.resultado= this.num1/this.num2;
    }
  }
}
