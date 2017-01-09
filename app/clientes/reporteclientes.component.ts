import {Component} from '@angular/core';
import {ClienteService} from '../services/cliente.service';
import {Cliente} from '../clientes';

@Component({
    selector: 'reporte-clientes',
    templateUrl: 'app/clientes/reporteclientes.component.html',
    styleUrls: ['app/clientes/reporteclientes.component.css']
})

export class ReporteClientesComponent{
    public clientes: Array<Cliente> = [];
    public abuscar: string;
    constructor(private _clienteService: ClienteService)
    {
        this._clienteService = _clienteService;
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }

    buscarclientes(){
        if(this.abuscar != undefined || this.abuscar == "")
        {
            this._clienteService.getClientesByDetails(this.abuscar)
            .subscribe(
                data => this.clientes = data
            );
        }
        else
        {
            alert("Ingrese algo para buscar clientes!!!");
        }
        
    }
}