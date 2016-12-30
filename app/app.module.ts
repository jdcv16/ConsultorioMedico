import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MedidaService, MedicamentoService, ClienteService,ServicioService} from './services/index';
import { ClienteComponent,MostrarClientesComponent,AgregarClienteComponent,ModificarClienteComponent} from './clientes'; 
import { MedidaComponent, ModificarMedidaComponent, AgregarMedidaComponent, MostrarMedidasComponent} from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent, AgregarMedicamentoComponent, ModificarMedicamentoComponent} from './medicamentos';
import { MostrarServiciosComponent,AgregarServicioComponent } from './servicios';
import { DashboardComponent } from './dashboard';

@NgModule({
imports: [BrowserModule, FormsModule, HttpModule, routing],
declarations: [
    AppComponent,
    ClienteComponent,
    MostrarClientesComponent,
    AgregarClienteComponent,
    ModificarClienteComponent,
    MedidaComponent, 
    MostrarMedidasComponent,
    ModificarMedidaComponent,
    AgregarMedidaComponent,
    MedicamentoComponent,
    MostrarMedicamentosComponent,
    AgregarMedicamentoComponent,
    ModificarMedicamentoComponent,
    MostrarServiciosComponent,
    AgregarServicioComponent,
    DashboardComponent],
providers:[MedidaService, MedicamentoService, ClienteService,ServicioService],
bootstrap: [AppComponent]
})
export class AppModule { }