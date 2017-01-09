import { Component } from '@angular/core';
import { Config } from './config.service';

import { Cliente, ClienteComponent, MostrarClientesComponent, AgregarClienteComponent, ModificarClienteComponent, ReporteClientesComponent} from './clientes';
import { Medida, MedidaComponent, ModificarMedidaComponent } from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent,AgregarMedicamentoComponent, ModificarMedicamentoComponent} from './medicamentos';
import { MostrarServiciosComponent, AgregarServicioComponent } from './servicios';
import { AgregarDoctorComponent,MostrarDoctoresComponent } from './doctores';
import { LoginComponent } from './logins';
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
    }
    onSelectCliente(cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    }
}