import {Component, Input, EventEmitter,Output} from '@angular/core';
import { Cliente } from './cliente';
@Component({
selector: 'lista-clientes',
templateUrl: 'app/listaclientes.component.html'
})
export class ListaClientesComponent{
    @Input() clientes;
    @Output() seleccionarCliente = new EventEmitter();
    onSelect(cli: Cliente){
        this.seleccionarCliente.next(cli);
    }
}