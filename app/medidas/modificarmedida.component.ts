import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../services/medida.service';
import { Medida } from '../medidas';

@Component({
selector: 'modificar-medida',
templateUrl: 'app/medidas/modificarmedida.component.html'
})
export class ModificarMedidaComponent{
    public medidas: Array<Medida> = [];
    public message;
    public messageOK;
    constructor(private _medidaService: MedidaService){
        this._medidaService = _medidaService;
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

    modificarMedida(id_medida,nom_medida){
        this._medidaService.modificarMedida(id_medida,nom_medida)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'Se modificó correctamente la medida.';
                this.getAllMedidas();
            } else {
                this.messageOK = '';
                this.message = 'Algo salió mal al modificar la medida';
            }
        });
    }
    
    ngOnInit(){
        this.getAllMedidas();
    }
}