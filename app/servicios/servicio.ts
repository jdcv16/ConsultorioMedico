export class Servicio{
    id_servicio: number;
    nom_servicio: string;
    tarifa_servicio: number;
    constructor(id_servicio:number,nom_servicio:string,tarifa_servicio:number){
        this.id_servicio = id_servicio;
        this.nom_servicio = nom_servicio;
        this.tarifa_servicio = tarifa_servicio;
    }
}