import { Component, OnInit } from '@angular/core';
import { ConsultorioService } from '../services/index';
import { Consultorio } from '../consultorios';

@Component({
selector: 'mostrar-consultorios',
templateUrl: 'app/consultorios/mostrarconsultorios.component.html',
styleUrls: ['app/consultorios/mostrarconsultorios.component.css']
})

export class MostrarConsultoriosComponent{
    private timer;
    public consultorios: Array<Consultorio> = [];
    id_consultorio: number;
    nom_consultorio: string;
    public message;
    public messageOK;
    constructor(private _consultorioService: ConsultorioService){
        this._consultorioService = _consultorioService;
    }

    getAllConsultorios(){
        this._consultorioService.getAllConsultorios()
            .subscribe(
                data => this.consultorios = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }

    modificarConsultorio(){
            if(this.nom_consultorio!=""){
                this._consultorioService.modificarConsultorio(this.id_consultorio,this.nom_consultorio)
                .subscribe( result => {
                    if(result === true){
                        this.message = '';
                        this.messageOK = 'El Consultorio se modificó con éxito.';
                        this.ngOnInit();
                    } else {
                        this.messageOK = '';
                        this.message = 'Error!! El Consultorio no pudo ser modificado';
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
        this.getAllConsultorios();
    }

    cargarmodificar(i: number)
    {
        this.id_consultorio = this.consultorios[i].id_consultorio;
        this.nom_consultorio = this.consultorios[i].nom_consultorio;
    }

    
}