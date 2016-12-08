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
        this.clientes = [ new Cliente(1,"José","Cota","jdcv.sw.dev@gmail.com","6681620312","16-03-1995"),
        new Cliente(2,"Eduardo","Lopez","lalolopez@gmail.com","8123267","18-08-1988","Gonzalez")]
    }
    onSelectCliente(cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    }
}