import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../clientes';

@Component({
selector: 'mostrar-clientes',
templateUrl: 'app/clientes/mostrarclientes.component.html',
styleUrls: ['app/clientes/mostrarclientes.component.css']
})

export class MostrarClientesComponent{
    public clientes: Array<Cliente> = [];
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

    
}