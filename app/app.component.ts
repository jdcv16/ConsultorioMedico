import { Component } from '@angular/core';
import { Config } from './config.service';
import { Cliente, ListaClientesComponent, DetalleClienteComponent } from './clientes';
@Component({
selector: 'mi-app',
templateUrl: 'app/app.component.html'
})
export class AppComponent {
    titulo = Config.TITULO_PAGINA;
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