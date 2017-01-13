import {Component} from '@angular/core';
import {DoctorService} from '../services/doctor.service';
import {Doctor} from '../doctores';

@Component({
    selector: 'reporte-doctores',
    templateUrl: 'app/doctores/reportedoctores.component.html',
    styleUrls: ['app/doctores/reportedoctores.component.css']
})

export class ReporteDoctoresComponent{
    public doctores: Array<Doctor> = [];
    public abuscar: string;
    constructor(private _doctorService: DoctorService)
    {
        this._doctorService = _doctorService;
    }

    generateArray(obj){
        return Object.keys(obj).map((key) => { return obj[key]});
    }

    buscardoctores(){
        if(this.abuscar != undefined || this.abuscar == "")
        {
            this._doctorService.getDoctoresByDetails(this.abuscar)
            .subscribe(
                data => this.doctores = data
            );
        }
        else
        {
            alert("Ingrese algo para buscar clientes!!!");
        }
        
    }
}