import { Component, OnInit } from '@angular/core';
import { MedicamentoService} from '../services/medicamento.service';
import { MedidaService } from '../services/medida.service';
import { Medicamento } from '../medicamentos';
import { Medida } from '../medidas';

@Component({
selector: 'mostrar-medicamentos',
templateUrl: 'app/medicamentos/mostrarmedicamentos.component.html',
styleUrls: ['app/medicamentos/mostrarmedicamentos.component.css']
})

export class MostrarMedicamentosComponent{
    public medicamentos: Array<Medicamento> = [];
     public medidas: Array<Medida> = [];
    constructor(private _medicamentoService: MedicamentoService,private _medidaService: MedidaService){
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
    }

    getAllMedicamentos(){
        this._medicamentoService.getAllMedicamentos()
            .subscribe(
                data => this.medicamentos = data,
                error => alert("Error: " + error)
            );
    }

    getAllMedidas(){
        this._medidaService.getAllMedidas()
            .subscribe(
                data => this.medidas = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllMedidas();
        this.getAllMedicamentos();
    }

    
}