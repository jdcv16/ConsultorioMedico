import { Component } from '@angular/core';
import { Medida, ModificarMedidaComponent, AgregarMedidaComponent} from '../medidas';
import { Config } from '../config.service';

@Component({
selector: 'la-medida',
templateUrl: 'app/medidas/medida.component.html'
})
export class MedidaComponent {
    titulo_Medidas = Config.TITULO_MEDIDA;
    medidas : Array<Medida>;
    medidaSeleccionada: Medida;
    constructor(){
    }
}