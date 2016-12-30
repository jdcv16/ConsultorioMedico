import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../services/medida.service';
import { Medida } from '../medidas';

@Component({
selector: 'mostrar-medidas',
templateUrl: 'app/medidas/mostrarmedidas.component.html',
styleUrls: ['app/medidas/mostrarmedidas.component.css']
})

export class MostrarMedidasComponent{
    private timer;
    public medidas: Array<Medida> = [];
    id_medida: number;
    nom_medida: string;
    public message;
    public messageOK;
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

    modificarMedida(){
            if(this.nom_medida!=""){
                this._medidaService.modificarMedida(this.id_medida,this.nom_medida)
                .subscribe( result => {
                    if(result === true){
                        this.message = '';
                        this.messageOK = 'La medida se modificó con éxito.';
                        this.ngOnInit();
                    } else {
                        this.messageOK = '';
                        this.message = 'Error!! La medida no pudo ser modificada';
                    }
                });
                this.hidemessage();
                this.hidemessageOK();
                this.ngOnInit();
            }
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000); 
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }
    
    ngOnInit(){
        this.getAllMedidas();
    }

    cargarmodificar(i: number)
    {
        this.id_medida = this.medidas[i].id_medida;
        this.nom_medida = this.medidas[i].nom_medida;
    }

    
}