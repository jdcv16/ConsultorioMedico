import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
    selector:'agregar-cliente',
    templateUrl: 'app/clientes/agregarcliente.component.html'
})

export class AgregarClienteComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _clienteService: ClienteService){
        this._clienteService = _clienteService;
    }

    insertarCliente(){
        if(this.modelo.nom_cliente != undefined && this.modelo.ap1_cliente != undefined && this.modelo.ap2_cliente != undefined
        && this.modelo.fecha_nac_cliente != undefined && this.modelo.fecha_reg_cliente != undefined && this.modelo.tel_cliente != undefined
        && this.modelo.dir_cliente != undefined)
        {
        this._clienteService.postCliente(this.modelo.nom_cliente,this.modelo.ap1_cliente,this.modelo.ap2_cliente,
        this.modelo.fecha_nac_cliente,this.modelo.fecha_reg_cliente,this.modelo.tel_cliente,this.modelo.dir_cliente)
                .subscribe(result => {
                    if(result === true){
                        this.messageOK = "El cliente se agregó con éxito.";
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
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }
}