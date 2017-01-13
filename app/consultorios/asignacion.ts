export class Asignacion{
    id_asignacion: number;
    id_consultorio: number;
    id_turno: number;
    cve_doctor: string;
    constructor(id_asignacion:number,id_consultorio:number,id_turno:number,cve_doctor:string){
        this.id_asignacion = id_asignacion
        this.id_consultorio = id_consultorio;
        this.id_turno = id_turno;
        this.cve_doctor = cve_doctor;
    }
}