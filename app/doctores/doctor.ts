export class Doctor {
    cve_doctor: string;
    password_usuario: string;
    nom_doctor: string;
    ap1_doctor: string;
    ap2_doctor: string;
    fecha_nac_doctor: string;
    tel_doctor: string;
    dir_doctor: string;
    email_doctor: string;

    constructor(cve_doctor: string, password_usuario:string, nom_doctor: string, ap1_doctor: string, fecha_nac_doctor: string, tel_doctor: string, dir_doctor: string,
        email_doctor: string, ap2_doctor?: string) {
        this.cve_doctor = cve_doctor;
        this.password_usuario = password_usuario;
        this.nom_doctor = nom_doctor;
        this.ap1_doctor = ap1_doctor;
        this.ap2_doctor = ap2_doctor;
        this.fecha_nac_doctor = fecha_nac_doctor;
        this.tel_doctor = tel_doctor;
        this.dir_doctor = dir_doctor;
        this.email_doctor = email_doctor;

    }
}