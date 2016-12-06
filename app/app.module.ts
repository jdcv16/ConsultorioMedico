import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MedidaService, MedicamentoService} from './services/index';
import { ClienteComponent, ListaClientesComponent, DetalleClienteComponent } from './clientes'; 
import { MedidaComponent, ModificarMedidaComponent, AgregarMedidaComponent, MostrarMedidasComponent} from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent, AgregarMedicamentoComponent} from './medicamentos';
import { DashboardComponent } from './dashboard';

@NgModule({
imports: [BrowserModule, FormsModule, HttpModule, routing],
declarations: [
    AppComponent, 
    ListaClientesComponent, 
    DetalleClienteComponent, 
    ClienteComponent, 
    MedidaComponent, 
    MostrarMedidasComponent,
    ModificarMedidaComponent,
    AgregarMedidaComponent,
    MedicamentoComponent,
    MostrarMedicamentosComponent,
    AgregarMedicamentoComponent,
    DashboardComponent],
providers:[MedidaService, MedicamentoService],
bootstrap: [AppComponent]
})
export class AppModule { }