export class Login {
    id_login: number;
    cve_usuario: string;
    tipo_usuario: string;
    password_usuario: string;
    constructor(id_login: number,cve_usuario: string, tipo_usuario: string,password_usuario:string) {
        this.id_login = id_login;
        this.cve_usuario = cve_usuario;
        this.tipo_usuario = tipo_usuario;
        this.password_usuario = password_usuario;
    }
}