import { Component } from '@angular/core';
import { DoctorService, LoginService} from '../services/index';

@Component({
    selector:'agregar-doctor',
    templateUrl: 'app/doctores/agregardoctor.component.html',
    styleUrls: ['app/doctores/agregardoctor.component.css']
})

export class AgregarDoctorComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    public eltipodeusuario: string;
    constructor(private _doctorService: DoctorService, private _loginService: LoginService){
        this._doctorService = _doctorService;
        this._loginService = _loginService;
    }

    insertarDoctor(){
        this.eltipodeusuario = "DOCTOR";
        if(this.modelo.cve_usuario != undefined && this.modelo.nom_doctor != undefined && this.modelo.ap1_doctor != undefined && 
        this.modelo.ap2_doctor != undefined && this.modelo.fecha_nac_doctor != undefined && this.modelo.tel_doctor != undefined && 
        this.modelo.email_doctor!=undefined && this.modelo.dir_doctor != undefined && this.modelo.password_usuario != undefined)
        {
        this._doctorService.postDoctor(this.modelo.cve_usuario,this.modelo.nom_doctor,this.modelo.ap1_doctor,
        this.modelo.ap2_doctor,this.modelo.fecha_nac_doctor,this.modelo.tel_doctor,this.modelo.email_doctor,this.modelo.dir_doctor)
                .subscribe(result => {
                    if(result === true){
                         this._loginService.postUsuario(this.modelo.cve_usuario,this.eltipodeusuario,this.modelo.password_usuario).subscribe(result => {
                            if(result === true){
                                this.messageOK = "El Doctor se agregó con éxito.";
                            }
                            else{
                                this.message = "Error!! El Doctor no pudo ser agregado";
                            }
                        });
                    } else {
                        this.message = "Error!! El Doctor no pudo ser agregado";
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