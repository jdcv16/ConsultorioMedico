export class Medicamento{
    id_medicamento: number;
    nom_medicamento: string;
    nom_generico:string;
    tipo_medida: number;
    constructor(id_medicamento:number,nom_medicamento:string,nom_generico:string,
    tipo_medida:number){
        this.id_medicamento = id_medicamento;
        this.nom_medicamento = nom_medicamento;
        this.nom_generico = nom_generico;
        this.tipo_medida = tipo_medida;
    }
}