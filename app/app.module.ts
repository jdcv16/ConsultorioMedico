import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MedidaService } from './services/index';
import { ClienteComponent, ListaClientesComponent, DetalleClienteComponent } from './clientes'; 
import { MedidaComponent, ModificarMedidaComponent } from './medidas';

@NgModule({
imports: [BrowserModule, FormsModule, HttpModule, routing],
declarations: [AppComponent, ListaClientesComponent, DetalleClienteComponent, ClienteComponent, MedidaComponent, ModificarMedidaComponent],
providers:[MedidaService],
bootstrap: [AppComponent]
})
export class AppModule { }