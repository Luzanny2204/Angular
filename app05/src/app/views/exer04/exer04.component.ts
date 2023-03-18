import { Component } from '@angular/core';

@Component({
  selector: 'app-exer04',
  templateUrl: './exer04.component.html',
  styleUrls: ['./exer04.component.css']
})
export class Exer04Component {
  classeDiv1='visivel';
  classeDiv2='visivel';
  classeDiv3='visivel';

  trocarClasse(clase: number){
    if(clase ==1){
      this.classeDiv1='visivel';
      this.classeDiv2='invisivel';
      this.classeDiv3='invisivel';
    }else if (clase == 2){
      this.classeDiv1='invisivel';
      this.classeDiv2='visivel';
      this.classeDiv3='invisivel';
    }else{
      this.classeDiv1='invisivel';
      this.classeDiv2='invisivel';
      this.classeDiv3='visivel';
    }
  }
}
