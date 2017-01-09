import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { ModificarMedidaComponent } from '../medidas';

@Component({
    selector:'agregar-servicio',
    templateUrl: 'app/servicios/agregarservicio.component.html',
    styleUrls: ['app/servicios/agregarservicio.component.css']
})

export class AgregarServicioComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _servicioService: ServicioService,){
        this._servicioService = _servicioService;
    }

    insertarServicio(){
        alert(this.modelo.nom_servicio);
        alert(this.modelo.tarifa_servicio);
        if(this.modelo.nom_servicio != null && this.modelo.tarifa_servicio != null)
        {
            this._servicioService.postServicio(this.modelo.nom_servicio,this.modelo.tarifa_servicio)
                    .subscribe(result => {
                        if(result === true){
                            this.messageOK = "El servicio se agregó con éxito.";
                        } else {
                            this.message = "Error!! El servicio no pudo ser agregado";
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