import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../services/medida.service';
import { Medida } from '../medidas';
import {Injectable} from '@angular/core';

@Component({
selector: 'modificar-medida',
templateUrl: 'app/medidas/modificarmedida.component.html',
styleUrls: ['app/medidas/modificarmedida.component.css']
})

@Injectable()
export class ModificarMedidaComponent{
    private timer;
    modelo: any = {};
    public medidas: Array<Medida> = [];
    public message;
    public messageOK;
    constructor(private _medidaService: MedidaService){
        this._medidaService = _medidaService;
    }

    modificarMedida(){
        this._medidaService.modificarMedida(this.modelo.id_medida,this.modelo.nom_medida)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'La medida se modificó con éxito.';
            } else {
                this.messageOK = '';
                this.message = 'Error!! La medida no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }

    
}