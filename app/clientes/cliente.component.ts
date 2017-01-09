import { Component } from '@angular/core';
import { Cliente, MostrarClientesComponent} from '../clientes';
import { Config } from '../config.service';

@Component({
selector: 'el-cliente',
templateUrl: 'app/clientes/cliente.component.html'
})
export class ClienteComponent {
    titulo = Config.TITULO_CLIENTE;
    clientes : Array<Cliente>;
    clienteSeleccionado: Cliente;
    constructor(){
    }
    onSelectCliente(cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    }
}