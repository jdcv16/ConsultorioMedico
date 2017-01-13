import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MedidaService, MedicamentoService, ClienteService,ServicioService,DoctorService,LoginService,ConsultorioService,TurnoService,AsignacionService} from './services/index';
import { ClienteComponent,MostrarClientesComponent,AgregarClienteComponent,ModificarClienteComponent,ReporteClientesComponent } from './clientes'; 
import { MedidaComponent, ModificarMedidaComponent, AgregarMedidaComponent, MostrarMedidasComponent } from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent,AgregarMedicamentoComponent } from './medicamentos';
import { MostrarServiciosComponent,AgregarServicioComponent } from './servicios';
import { AgregarDoctorComponent,MostrarDoctoresComponent,ReporteDoctoresComponent} from './doctores';
import { AgregarConsultorioComponent,MostrarConsultoriosComponent, AsignarConsultorioComponent, MostrarAsignacionesComponent } from './consultorios';
import { LoginComponent } from './logins';
import { DashboardComponent } from './dashboard';

@NgModule({
imports: [BrowserModule, FormsModule, HttpModule, routing],
declarations: [
    AppComponent,
    ClienteComponent,
    MostrarClientesComponent,
    AgregarClienteComponent,
    ModificarClienteComponent,
    ReporteClientesComponent,
    MedidaComponent, 
    MostrarMedidasComponent,
    ModificarMedidaComponent,
    AgregarMedidaComponent,
    MedicamentoComponent,
    MostrarMedicamentosComponent,
    AgregarMedicamentoComponent,
    MostrarServiciosComponent,
    AgregarServicioComponent,
    AgregarDoctorComponent,
    MostrarDoctoresComponent,
    ReporteDoctoresComponent,
    AgregarConsultorioComponent,
    MostrarConsultoriosComponent,
    AsignarConsultorioComponent,
    MostrarAsignacionesComponent,
    LoginComponent,
    DashboardComponent],
providers:[MedidaService, MedicamentoService, ClienteService,ServicioService,DoctorService,LoginService,ConsultorioService,TurnoService,AsignacionService],
bootstrap: [AppComponent]
})
export class AppModule { }