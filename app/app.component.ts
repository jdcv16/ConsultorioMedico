import { Component } from '@angular/core';
import { Config } from './config.service';

import { Cliente, ClienteComponent, MostrarClientesComponent, AgregarClienteComponent, ModificarClienteComponent } from './clientes';
import { Medida, MedidaComponent, ModificarMedidaComponent } from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent,AgregarMedicamentoComponent, ModificarMedicamentoComponent} from './medicamentos';
import { MostrarServiciosComponent, AgregarServicioComponent } from './servicios';
import { DashboardComponent } from './dashboard';
@Component({
selector: 'mi-app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css']
})
export class AppComponent {
    clientes : Array<Cliente>;
    clienteSeleccionado: Cliente;
    constructor(){
        this.clientes = [ new Cliente(1,"José","Cota","jdcv.sw.dev@gmail.com","6681620312","16-03-1995"),
        new Cliente(2,"Eduardo","Lopez","lalolopez@gmail.com","8123267","18-08-1988","Gonzalez")]
    }
    onSelectCliente(cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    }
}