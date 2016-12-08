import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../services/medicamento.service';
import { MedidaService } from '../services/medida.service';
import { Medicamento } from '../medicamentos';
import { Medida } from '../medidas';

@Component({
    selector:'agregar-medicamento',
    templateUrl: 'app/medicamentos/agregarmedicamento.component.html'
})

export class AgregarMedicamentoComponent{
    private timer;
    modelo: any = {};
    public medidas: Array<Medida> = [];
    public message;
    public messageOK;
    constructor(private _medicamentoService: MedicamentoService, private _medidaService: MedidaService ){
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService
    }

    insertarMedicamento(){
        if(this.modelo.nom_medicamento != undefined && this.modelo.nom_generico != undefined && this.modelo.tipo_medida != undefined)
        {
            this._medicamentoService.postMedicamento(this.modelo.nom_medicamento,this.modelo.nom_generico,this.modelo.tipo_medida)
                .subscribe(result => {
                    if(result === true){
                        this.messageOK = "El medicamento se agregó con éxito.";
                    } else {
                        this.message = "Error!! El medicamento no pudo ser agregado";
                    }
                });
            if(this.message != "")
            {
                this.hidemessage();
            }
            if(this.messageOK != ""){
                this.hidemessageOK();
            }
        }
    }

     getAllMedidas(){
        this._medidaService.getAllMedidas()
            .subscribe(
                data => this.medidas = data,
                error => alert("Error: " + error)
            );
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllMedidas();
    }
}