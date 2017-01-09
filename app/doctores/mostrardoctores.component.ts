import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../doctores';

@Component({
selector: 'mostrar-doctores',
templateUrl: 'app/doctores/mostrardoctores.component.html',
styleUrls: ['app/doctores/mostrardoctores.component.css']
})

export class MostrarDoctoresComponent{
    private timer;
    public doctores: Array<Doctor> = [];
    cve_doctor: string;
    password_usuario: string;
    nom_doctor: string;
    ap1_doctor: string;
    ap2_doctor: string;
    fecha_nac_doctor: string;
    tel_doctor: string;
    email_doctor: string;
    dir_doctor: string;
    public message;
    public messageOK;
    constructor(private _doctorService: DoctorService){
        this._doctorService = _doctorService;
    }

    getAllDoctores(){
        this._doctorService.getAllDoctores()
            .subscribe(
                data => this.doctores = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllDoctores();
    }

    modificardoctor(){
        if(this.cve_doctor != "" && this.nom_doctor != "" && this.ap1_doctor != "" && 
        this.fecha_nac_doctor != ""  && this.tel_doctor != "" && this.email_doctor != "" && this.dir_doctor != ""){
            this._doctorService.modificarDoctor(this.cve_doctor,this.nom_doctor,this.ap1_doctor,this.ap2_doctor,
            this.fecha_nac_doctor,this.tel_doctor,this.email_doctor,this.dir_doctor)
            .subscribe( result => {
                if(result === true){
                    this.message = '';
                    this.messageOK = 'El Doctor se modificó con éxito.';
                    this.ngOnInit();
                } else {
                    this.messageOK = '';
                    this.message = 'Error!! El Doctor no pudo ser modificado';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
        }
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }

    cargarmodificar(i: number)
    {
        this.cve_doctor = this.doctores[i].cve_doctor;
        this.password_usuario = this.doctores[i].password_usuario;
        this.nom_doctor = this.doctores[i].nom_doctor;
        this.ap1_doctor = this.doctores[i].ap1_doctor;
        this.ap2_doctor = this.doctores[i].ap2_doctor;
        this.fecha_nac_doctor = this.doctores[i].fecha_nac_doctor;
        this.tel_doctor = this.doctores[i].tel_doctor;
        this.email_doctor = this.doctores[i].email_doctor;
        this.dir_doctor = this.doctores[i].dir_doctor;
    }

    
}