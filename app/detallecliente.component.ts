import {Component, Input} from '@angular/core'
import {Cliente} from './cliente'
@Component({
selector:'detalle-cliente',
templateUrl: 'app/detallecliente.component.html'
})
export class DetalleClienteComponent{
@Input() cliente:Cliente;
}