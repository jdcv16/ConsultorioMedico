import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent, MostrarClientesComponent, AgregarClienteComponent,ModificarClienteComponent,ReporteClientesComponent} from './clientes';
import {MedidaComponent,AgregarMedidaComponent,MostrarMedidasComponent,ModificarMedidaComponent} from './medidas';
import {MedicamentoComponent,MostrarMedicamentosComponent,AgregarMedicamentoComponent} from './medicamentos';
import {MostrarServiciosComponent,AgregarServicioComponent} from './servicios';
import {AgregarDoctorComponent,MostrarDoctoresComponent,ReporteDoctoresComponent} from './doctores';
import {AgregarConsultorioComponent,MostrarConsultoriosComponent,AsignarConsultorioComponent,MostrarAsignacionesComponent} from './consultorios';
import {AppComponent} from './app.component';
import {LoginComponent} from './logins';
import {DashboardComponent} from './dashboard';

const appRoutes = [
{
    path: 'el-cliente',
    component: ClienteComponent
},
{
    path: 'mostrar-clientes',
    component:  MostrarClientesComponent
},
{
    path: 'agregar-cliente',
    component: AgregarClienteComponent
},
{
    path: 'modificar-cliente',
    component: ModificarClienteComponent
},
{
    path: 'reporte-clientes',
    component: ReporteClientesComponent
},
{
    path: 'la-medida',
    component: MedidaComponent
},
{
    path: 'agregar-medida',
    component: AgregarMedidaComponent
},
{
    path: 'mostrar-medidas',
    component: MostrarMedidasComponent
},
{
    path: 'modificar-medida',
    component: ModificarMedidaComponent
},
{
    path: 'el-medicamento',
    component: MedicamentoComponent
},
{
    path: 'mostrar-medicamentos',
    component: MostrarMedicamentosComponent  
},
{
    path: 'agregar-medicamento',
    component: AgregarMedicamentoComponent
},
{
    path: 'mostrar-servicios',
    component: MostrarServiciosComponent
},
{
    path:'agregar-servicio',
    component: AgregarServicioComponent
},
{
    path:'agregar-doctor',
    component: AgregarDoctorComponent
},
{
    path:'mostrar-doctores',
    component: MostrarDoctoresComponent
},
{
    path:'reporte-doctores',
    component: ReporteDoctoresComponent
},
{
    path:'agregar-consultorio',
    component: AgregarConsultorioComponent
},
{
    path:'mostrar-consultorios',
    component: MostrarConsultoriosComponent
},
{
    path:'asignar-consultorio',
    component: AsignarConsultorioComponent
},
{
    path:'mostrar-asignaciones',
    component: MostrarAsignacionesComponent
},
{
    path:'el-login',
    component: LoginComponent
},
{
    path: 'dashboard',
    component: DashboardComponent
},
{
    path: '', redirectTo: '/dashboard', pathMatch: 'full'
}
];


export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);