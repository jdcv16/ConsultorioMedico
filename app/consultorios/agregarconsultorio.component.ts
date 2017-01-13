import { Component } from '@angular/core';
import { ConsultorioService } from '../services/index';

@Component({
    selector:'agregar-consultorio',
    templateUrl: 'app/consultorios/agregarconsultorio.component.html',
    styleUrls: ['app/consultorios/agregarconsultorio.component.css']
})

export class AgregarConsultorioComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _consultorioService: ConsultorioService,){
        this._consultorioService = _consultorioService;
    }

    insertarConsultorio(){
        if(this.modelo.nom_consultorio!= undefined)
        {
        this._consultorioService.postConsultorio(this.modelo.nom_consultorio)
                .subscribe(result => {
                    if(result === true){
                        this.messageOK = "El Consultorio se agregó con éxito.";
                    } else {
                        this.message = "Error!! El Consultorio no pudo ser agregado";
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