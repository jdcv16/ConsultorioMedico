export class Cliente{
    cve_cliente:string;
    password_usuario: string;
    nom_cliente:string;
    ap1_cliente:string;
    ap2_cliente:string;
    fecha_nac_cliente:string;
    fecha_reg_cliente:string;
    tel_cliente:string;
    dir_cliente:string;
    email_cliente:string;
    constructor(cve_cliente: string,password_usuario: string,nom_cliente:string,ap1_cliente:string,fecha_nac_cliente:string,fecha_reg_cliente:string,tel_cliente:string,dir_cliente:string,
    email_cliente:string,ap2_cliente?:string){
        this.cve_cliente = cve_cliente;7
        this.password_usuario = password_usuario;
        this.nom_cliente = nom_cliente;
        this.ap1_cliente = ap1_cliente;
        this.ap2_cliente = ap2_cliente;
        this.fecha_nac_cliente = fecha_nac_cliente;
        this.fecha_reg_cliente = fecha_reg_cliente;
        this.tel_cliente = tel_cliente;
        this.dir_cliente = dir_cliente;
        this.email_cliente = email_cliente;
        
    }
}