export class Medicamento{
    id_medicamento: number;
    nom_medicamento: string;
    descrip_medicamento:string;
    tipo_medida: number;
    constructor(id_medicamento:number,nom_medicamento:string,descrip_medicamento:string,
    tipo_medida:number){
        this.id_medicamento = id_medicamento;
        this.nom_medicamento = nom_medicamento;
        this.descrip_medicamento = descrip_medicamento;
        this.tipo_medida = tipo_medida;
    }
}