import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../services/servicio.service';
import { Servicio } from '../servicios';

@Component({
selector: 'mostrar-servicios',
templateUrl: 'app/servicios/mostrarservicios.component.html',
styleUrls: ['app/servicios/mostrarservicios.component.css']
})

export class MostrarServiciosComponent{
    private timer;
    public servicios: Array<Servicio> = [];
    id_servicio: number;
    nom_servicio: string;
    tarifa_servicio: number;
    public message;
    public messageOK;
    constructor(private _servicioService: ServicioService){
        this._servicioService = _servicioService;
    }

    getAllServicios(){
        this._servicioService.getAllServicios()
            .subscribe(
                data => this.servicios = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }

    modificarServicio(){
        if(this.nom_servicio!="" && this.tarifa_servicio!=0){
            this._servicioService.modificarServicio(this.id_servicio,this.nom_servicio,this.tarifa_servicio)
            .subscribe( result => {
                if(result === true){
                    this.message = '';
                    this.messageOK = 'El servicio se modificó con éxito.';
                    this.ngOnInit();
                } else {
                    this.messageOK = '';
                    this.message = 'Error!! El servicio no pudo ser modificada';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
            this.ngOnInit();
        }
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000); 
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }
    
    ngOnInit(){
        this.getAllServicios();
    }

    cargarmodificar(i: number)
    {
        this.id_servicio = this.servicios[i].id_servicio;
        this.nom_servicio = this.servicios[i].nom_servicio;
        this.tarifa_servicio = this.servicios[i].tarifa_servicio;
    }

    
}