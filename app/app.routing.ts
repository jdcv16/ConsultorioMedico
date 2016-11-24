import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ClienteComponent} from './clientes';
import {AppComponent} from './app.component';

const appRoutes = [
{
    path: 'el-cliente',
    component: ClienteComponent
}];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);