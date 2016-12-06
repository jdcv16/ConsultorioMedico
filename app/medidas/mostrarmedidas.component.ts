import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../services/medida.service';
import { Medida } from '../medidas';

@Component({
selector: 'mostrar-medidas',
templateUrl: 'app/medidas/mostrarmedidas.component.html',
styleUrls: ['app/medidas/mostrarmedidas.component.css']
})

export class MostrarMedidasComponent{
    public medidas: Array<Medida> = [];
    constructor(private _medidaService: MedidaService){
        this._medidaService = _medidaService;
    }

    getAllMedidas(){
        this._medidaService.getAllMedidas()
            .subscribe(
                data => this.medidas = data,
                error => alert("Error: " + error)
            );
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }
    
    ngOnInit(){
        this.getAllMedidas();
    }

    
}