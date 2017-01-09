"use strict";
var Doctor = (function () {
    function Doctor(cve_doctor, password_usuario, nom_doctor, ap1_doctor, fecha_nac_doctor, tel_doctor, dir_doctor, email_doctor, ap2_doctor) {
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
    return Doctor;
}());
exports.Doctor = Doctor;
//# sourceMappingURL=doctor.js.map