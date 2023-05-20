import { Component } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {


  listaCliente: Cliente[]=[];
  cliente= new Cliente();

  constructor(private clienteService: ClienteService){}

  listar(){
    this.clienteService.listar().subscribe(clientes => {
      this.listaCliente = clientes;
    });
  }

  inserir(){
    this.clienteService.inserir(this.cliente).subscribe(clientes => {
      this.listar();
    })
  }
}
//subcribe: quiero saber lo que regresas o retornas, o que me des una respuesta
