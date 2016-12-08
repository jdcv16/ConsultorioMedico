import { Component, OnInit } from '@angular/core';
import { MedicamentoService, MedidaService } from '../services/index';
import { Medida } from '../medidas';
import { Medicamento } from '../medicamentos';

@Component({
selector: 'modificar-medicamento',
templateUrl: 'app/medicamentos/modificarmedicamento.component.html'
})

export class ModificarMedicamentoComponent{
    private timer;
    public medidas: Array<Medida> = [];
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _medidaService: MedidaService, private _medicamentoService: MedicamentoService){
        this._medidaService = _medidaService;
        this._medicamentoService = _medicamentoService
    }

    modificarMedicamento(){
        this._medicamentoService.modificarMedicamento(this.modelo.id_medicamento,this.modelo.nom_medicamento,this.modelo.nom_generico,this.modelo.tipo_medida)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'El medicamento se modificó con éxito.';
            } else {
                this.messageOK = '';
                this.message = 'Error!! El medicamento no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
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
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }

    
}