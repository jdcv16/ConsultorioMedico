import { Component } from '@angular/core';
import { Medida } from '../medidas';
import { Config } from '../config.service';

@Component({
selector: 'el-cliente',
templateUrl: 'app/clientes/cliente.component.html'
})
export class MedidaComponent {
    titulo_Medidas = Config.TITULO_MEDIDA;
    clientes : Array<Medida>;
    clienteSeleccionado: Medida;
    constructor(){
    }
}