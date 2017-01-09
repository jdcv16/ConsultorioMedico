import { Component } from '@angular/core';
import { Config } from '../config.service';

@Component({
selector: 'dashboard',
templateUrl: 'app/dashboard/dashboard.component.html',
})
export class DashboardComponent {
    unvalor: string;

    crearlocal()
    {
        this.unvalor = "hola";
        localStorage.setItem("saludo",this.unvalor);
    }

    mostrarlocal()
    {
        alert(localStorage.getItem("saludo"));
    }

    destruirlocal(){
        localStorage.removeItem("saludo");
    }
}