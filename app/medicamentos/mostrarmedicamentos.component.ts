import { Component, OnInit } from '@angular/core';
import { MedicamentoService} from '../services/medicamento.service';
import { MedidaService } from '../services/medida.service';
import { Medicamento } from '../medicamentos';
import { Medida } from '../medidas';

@Component({
selector: 'mostrar-medicamentos',
templateUrl: 'app/medicamentos/mostrarmedicamentos.component.html',
styleUrls: ['app/medicamentos/mostrarmedicamentos.component.css']
})

export class MostrarMedicamentosComponent{
    private timer;
    public medicamentos: Array<Medicamento> = [];
    public medidas: Array<Medida> = [];
    public message;
    public messageOK;
    id_medicamento: number;
    nom_medicamento: string;
    nom_generico: string;
    tipo_medida: number;

    constructor(private _medicamentoService: MedicamentoService,private _medidaService: MedidaService){
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
    }

    getAllMedicamentos(){
        this._medicamentoService.getAllMedicamentos()
            .subscribe(
                data => this.medicamentos = data,
                error => alert("Error: " + error)
            );
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
        this.getAllMedicamentos();
    }

    modificarMedicamento(){
        alert(this.tipo_medida);
        this._medicamentoService.modificarMedicamento(this.id_medicamento,this.nom_medicamento,this.nom_generico,this.tipo_medida)
        .subscribe( result => {
            if(result === true){
                this.message = '';
                this.messageOK = 'El medicamento se modificó con éxito.';
                this.ngOnInit();
            } else {
                this.messageOK = '';
                this.message = 'Error!! El medicamento no pudo ser modificado';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    }

    hidemessage() {
        this.timer = setTimeout(() => this.message = "", 3000);
    }

    hidemessageOK() {
        this.timer = setTimeout(() => this.messageOK = "" , 3000);
    }

    cargarmodificar(i: number)
    {
        this.id_medicamento = this.medicamentos[i].id_medicamento;
        this.nom_medicamento = this.medicamentos[i].nom_medicamento;
        this.nom_generico = this.medicamentos[i].nom_generico;
        this.tipo_medida = this.medicamentos[i].tipo_medida;
        alert(this.medicamentos[i].tipo_medida);
        //alert(this.medidas[this.medicamentos[i].tipo_medida].id_medida-1);
    }

    
}