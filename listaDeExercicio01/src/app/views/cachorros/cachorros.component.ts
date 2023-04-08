import { Component } from '@angular/core';

@Component({
  selector: 'app-cachorros',
  templateUrl: './cachorros.component.html',
  styleUrls: ['./cachorros.component.css']
})
export class CachorrosComponent {
    cachorro='assets/golden.jpg';

    exibirImagemGolden() {
      this.cachorro = 'assets/golden.jpg';
    }
    exibirImagemBullDog() {
      this.cachorro = 'assets/bulldog.jpg';
    }
    exibirImagemloboSiveriano() {
      this.cachorro = 'assets/loboSiveriano.jpg';
    }


}
