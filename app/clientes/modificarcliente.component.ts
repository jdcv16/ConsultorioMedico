import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../clientes';

@Component({
selector: 'modificar-cliente',
templateUrl: 'app/clientes/modificarcliente.component.html'
})

export class ModificarClienteComponent{
    private timer;
    modelo: any = {};
    public message;
    public messageOK;
    constructor(private _clienteService: ClienteService){
        this._clienteService = _clienteService;
    }

    modificarCliente(){
        this._clienteService.modificarCliente(this.modelo.id_cliente,this.modelo.nom_cliente,this.modelo.ap1_cliente,this.modelo.ap2_cliente,
        this.modelo.fecha_nac_cliente,this.modelo.fecha_reg_cliente,this.modelo.tel_cliente,this.modelo.email_cliente,this.modelo.dir_cliente)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'El cliente se modificó con éxito.';
            } else {
                this.messageOK = '';
                this.message = 'Error!! El cliente no pudo ser modificada';
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

    
}