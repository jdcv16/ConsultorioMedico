import { Component, OnInit } from '@angular/core';
import { AsignacionService,DoctorService,ConsultorioService,TurnoService } from '../services/index';
import { Asignacion, Turno, Consultorio} from '../consultorios';
import { Doctor } from '../doctores';

@Component({
selector: 'mostrar-asignaciones',
templateUrl: 'app/consultorios/mostrarasignaciones.component.html',
styleUrls: ['app/consultorios/mostrarasignaciones.component.css']
})

export class MostrarAsignacionesComponent{
    private timer;
    public asignaciones: Array<Asignacion> = [];
    public doctores: Array<Doctor> = [];
    public consultorios: Array<Consultorio> = [];
    public turnos: Array<Turno> = [];
    public message;
    public messageOK;
    id_asignacion: number;
    id_consultorio: number;
    id_turno: number;
    cve_doctor: string;

    constructor(private _asignacionService: AsignacionService, private _doctorService: DoctorService, private _consultorioService: ConsultorioService, private _turnoService: TurnoService){
        this._asignacionService = _asignacionService;
        this._doctorService = _doctorService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
    }

    getAllAsignaciones(){
        this._asignacionService.getAllAsignaciones()
            .subscribe(
                data => this.asignaciones = data,
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

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllAsignaciones();
        this.getAllDoctores();
        this.getAllConsultorios();
        this.getAllTurnos();
    }

    modificarAsignacion(){
        this._asignacionService.modificarAsignacion(this.id_asignacion,this.id_consultorio,this.id_turno,this.cve_doctor)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'La Asignación se modificó con éxito.';
                this.ngOnInit();
            } else {
                this.messageOK = '';
                this.message = 'Error!! La Asignación no pudo ser modificada';
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

    cargarmodificar(i: number)
    {
        this.id_asignacion = this.asignaciones[i].id_asignacion;
        this.id_consultorio = this.asignaciones[i].id_consultorio;
        this.id_turno = this.asignaciones[i].id_turno;
        this.cve_doctor = this.asignaciones[i].cve_doctor;
        //alert(this.medidas[this.medicamentos[i].tipo_medida].id_medida-1);
    }

    
}