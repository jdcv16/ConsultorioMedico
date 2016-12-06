import { Component } from '@angular/core';
import { Medicamento} from '../medicamentos';
import { Config } from '../config.service';

@Component({
selector: 'el-medicamento',
templateUrl: 'app/medicamentos/medicamento.component.html'
})
export class MedicamentoComponent {
    titulo_Medicamentos = Config.TITULO_MEDICAMENTO;
    medicamentos : Array<Medicamento>;
    medicamentoSeleccionado: Medicamento;
    constructor(){
    }
}