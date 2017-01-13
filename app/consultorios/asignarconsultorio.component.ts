import { Component, OnInit } from '@angular/core';
import { AsignacionService,DoctorService,TurnoService,ConsultorioService } from '../services/index';
import { Asignacion, Consultorio, Turno } from '../consultorios';
import { Doctor } from '../doctores';

@Component({
    selector:'asignar-consultorio',
    templateUrl: 'app/consultorios/asignarconsultorio.component.html'
})

export class AsignarConsultorioComponent{
    private timer;
    modelo: any = {};
    public consultorios: Array<Consultorio> = [];
    public turnos: Array<Turno> = [];
    public doctores: Array<Doctor> = [];
    public message;
    public messageOK;
    constructor(private _asignacionService: AsignacionService, private _consultorioService: ConsultorioService,
    private _turnoService: TurnoService, private _doctorService: DoctorService ){
        this._asignacionService = _asignacionService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
        this._doctorService = _doctorService;
    }

    insertarAsignacion(){
        if(this.modelo.id_consultorio != undefined && this.modelo.id_turno != undefined && this.modelo.cve_doctor != undefined)
        {
            this._asignacionService.postAsignacion(this.modelo.id_consultorio,this.modelo.id_turno,this.modelo.cve_doctor)
                .subscribe(result => {
                    if(result === true){
                        this.messageOK = "La Asignación se agregó con éxito.";
                    } else {
                        this.message = "Error!! La Asignación no pudo ser agregada";
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

     getAllConsultorios(){
        this._consultorioService.getAllConsultorios()
            .subscribe(
                data => this.consultorios = data,
                error => alert("Error: " + error)
            );
    }

     getAllTurnos(){
        this._turnoService.getAllTurnos()
            .subscribe(
                data => this.turnos = data,
                error => alert("Error: " + error)
            );
    }

     getAllDoctores(){
        this._doctorService.getAllDoctores()
            .subscribe(
                data => this.doctores = data,
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
        this.getAllConsultorios();
        this.getAllTurnos();
        this.getAllDoctores();
    }
}