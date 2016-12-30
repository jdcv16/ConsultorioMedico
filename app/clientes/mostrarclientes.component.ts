import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../clientes';

@Component({
selector: 'mostrar-clientes',
templateUrl: 'app/clientes/mostrarclientes.component.html',
styleUrls: ['app/clientes/mostrarclientes.component.css']
})

export class MostrarClientesComponent{
    private timer;
    public clientes: Array<Cliente> = [];
    id: number;
    nom_cliente: string;
    ap1_cliente: string;
    ap2_cliente: string;
    fecha_nac_cliente: string;
    fecha_reg_cliente: string;
    tel_cliente: string;
    dir_cliente: string;
    public message;
    public messageOK;

    constructor(private _clienteService: ClienteService){
        this._clienteService = _clienteService;
    }

    getAllClientes(){
        this._clienteService.getAllClientes()
            .subscribe(
                data => this.clientes = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllClientes();
    }

        modificarCliente(){
            if(this.id != 0 && this.nom_cliente != "" && this.ap1_cliente != "" && this.ap2_cliente != "" && 
            this.fecha_nac_cliente != "" && this.fecha_reg_cliente != "" && this.tel_cliente != "" && this.dir_cliente != ""){
                this._clienteService.modificarCliente(this.id,this.nom_cliente,this.ap1_cliente,this.ap2_cliente,
                this.fecha_nac_cliente,this.fecha_reg_cliente,this.tel_cliente,this.dir_cliente)
                .subscribe( result => {
                    if(result === true){
                        this.message = '';
                        this.messageOK = 'El cliente se modificó con éxito.';
                        this.ngOnInit();
                    } else {
                        this.messageOK = '';
                        this.message = 'Error!! El cliente no pudo ser modificada';
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
        this.id = this.clientes[i].id;
        this.nom_cliente = this.clientes[i].nom_cliente;
        this.ap1_cliente = this.clientes[i].ap1_cliente;
        this.ap2_cliente = this.clientes[i].ap2_cliente;
        this.fecha_nac_cliente = this.clientes[i].fecha_nac_cliente;
        this.fecha_reg_cliente = this.clientes[i].fecha_reg_cliente;
        this.tel_cliente = this.clientes[i].tel_cliente;
        this.dir_cliente = this.clientes[i].dir_cliente;
    }

    
}