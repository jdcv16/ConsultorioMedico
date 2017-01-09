import { Component } from '@angular/core';
import { ClienteService,LoginService } from '../services/index';

@Component({
    selector:'agregar-cliente',
    templateUrl: 'app/clientes/agregarcliente.component.html',
    styleUrls: ['app/clientes/agregarcliente.component.css']
})

export class AgregarClienteComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    public eltipodeusuario: string;
    constructor(private _clienteService: ClienteService, private _loginService: LoginService){
        this._clienteService = _clienteService;
        this._loginService = _loginService;
    }

    insertarCliente(){
        this.eltipodeusuario = "CLIENTE";
        if(this.modelo.cve_usuario != undefined && this.modelo.nom_cliente != undefined && this.modelo.ap1_cliente != undefined && 
        this.modelo.fecha_nac_cliente != undefined && this.modelo.fecha_reg_cliente != undefined && this.modelo.tel_cliente != undefined && 
        this.modelo.email_cliente!=undefined && this.modelo.dir_cliente != undefined && this.modelo.password_usuario != undefined){
        this._clienteService.postCliente(this.modelo.cve_usuario,this.modelo.nom_cliente,this.modelo.ap1_cliente,
        this.modelo.ap2_cliente,this.modelo.fecha_nac_cliente,this.modelo.fecha_reg_cliente,
        this.modelo.tel_cliente,this.modelo.email_cliente,this.modelo.dir_cliente)
                .subscribe(result => {
                    if(result === true){
                        this._loginService.postUsuario(this.modelo.cve_usuario,this.eltipodeusuario,this.modelo.password_usuario).subscribe(result => {
                            if(result === true){
                                this.messageOK = "El Cliente se agregó con éxito.";
                            }
                            else{
                                this.message = "Error!! El Cliente no pudo ser agregado";
                            }
                        });
                    } else {
                        this.message = "Error!! El cliente no pudo ser agregada";
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
        else{
            alert("Ingrese todos los campos del formulario");
        }
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }
}