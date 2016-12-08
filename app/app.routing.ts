import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent, MostrarClientesComponent, AgregarClienteComponent,ModificarClienteComponent} from './clientes';
import {MedidaComponent,AgregarMedidaComponent,MostrarMedidasComponent,ModificarMedidaComponent} from './medidas';
import {MedicamentoComponent,MostrarMedicamentosComponent,AgregarMedicamentoComponent,ModificarMedicamentoComponent} from './medicamentos';
import {AppComponent} from './app.component';
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
    path: 'modificar-medicamento',
    component: ModificarMedicamentoComponent
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