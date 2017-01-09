import { Component } from '@angular/core';
import { MedidaService } from '../services/medida.service';
import { ModificarMedidaComponent } from '../medidas';

@Component({
    selector:'agregar-medida',
    templateUrl: 'app/medidas/agregarmedida.component.html',
    styleUrls: ['app/medidas/agregarmedida.component.css']
})

export class AgregarMedidaComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _medidaService: MedidaService,){
        this._medidaService = _medidaService;
    }

    insertarMedida(){
        if(this.modelo.nom_medida != undefined)
        {
        this._medidaService.postMedida(this.modelo.nom_medida)
                .subscribe(result => {
                    if(result === true){
                        this.messageOK = "La medida se agregó con éxito.";
                    } else {
                        this.message = "Error!! La medida no pudo ser agregada";
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

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }
}