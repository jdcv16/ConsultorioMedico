export class Cliente{
    id: number;
    nombre_cliente:string;
    apellido1:string;
    apellido2:string;
    correo_electronico:string;
    tel:string;
    fecha_nac:string;
    constructor(id:number,nombre_cliente:string,apellido1:string,
    correo_electronico:string,tel:string,fecha_nac:string,apellido2?:string){
        this.id = id;
        this.nombre_cliente = nombre_cliente;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correo_electronico = correo_electronico;
        this.tel = tel;
        this.fecha_nac = fecha_nac;
    }
}