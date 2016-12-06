import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../services/medicamento.service';
import { Medicamento } from '../medicamentos';

@Component({
selector: 'mostrar-medicamentos',
templateUrl: 'app/medicamentos/mostrarmedicamentos.component.html',
styleUrls: ['app/medicamentos/mostrarmedicamentos.component.css']
})

export class MostrarMedicamentosComponent{
    public medicamentos: Array<Medicamento> = [];
    constructor(private _medicamentoService: MedicamentoService){
        this._medicamentoService = _medicamentoService;
    }

    getAllMedicamentos(){
        this._medicamentoService.getAllMedicamentos()
            .subscribe(
                data => this.medicamentos = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllMedicamentos();
    }

    
}