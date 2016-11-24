import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ClienteComponent, ListaClientesComponent, DetalleClienteComponent } from './clientes'; 

@NgModule({
imports: [BrowserModule, FormsModule, HttpModule, routing],
declarations: [AppComponent, ListaClientesComponent, DetalleClienteComponent, ClienteComponent],
providers:[],
bootstrap: [AppComponent]
})
export class AppModule { }