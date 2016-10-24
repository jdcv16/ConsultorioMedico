import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './listaclientes.component'; 
import { DetalleClienteComponent } from './detallecliente.component';
@NgModule({
imports: [BrowserModule, FormsModule],
declarations: [AppComponent, ListaClientesComponent, DetalleClienteComponent],
bootstrap: [AppComponent]
})
export class AppModule { }