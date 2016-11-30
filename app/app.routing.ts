import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent} from './clientes';
import {MedidaComponent} from './medidas';
import {AppComponent} from './app.component';

const appRoutes = [
{
    path: 'el-cliente',
    component: ClienteComponent
},
{
    path: 'la-medida',
    component: MedidaComponent
}];


export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);