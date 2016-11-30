import { Component } from '@angular/core';
import { MedidaService } from '../services/medida.service';

@Component({
    selector:'agregar-medida',
    templateUrl: 'app/medidas/agregarmedida.component.html'
})

export class AgregarMedidaComponent{
    modelo: any = {};
    loading = false;
    public message;
    public messageOK;
    constructor(private _medidaService: MedidaService){
        this._medidaService = _medidaService;
    }

    insertarMedida(){
        this.loading = true;
        this._medidaService.postMedida(this.modelo.nom_medida)
            .subscribe(result => {
                if(result === true){
                    this.messageOK = "Insertado de forma Correcta.";
                    this.loading = false;
                } else {
                    this.message = "Algo salió mal :(";
                    this.loading = false;
                }
            });
    }
}