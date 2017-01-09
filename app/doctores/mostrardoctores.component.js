"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var doctor_service_1 = require('../services/doctor.service');
var MostrarDoctoresComponent = (function () {
    function MostrarDoctoresComponent(_doctorService) {
        this._doctorService = _doctorService;
        this.doctores = [];
        this._doctorService = _doctorService;
    }
    MostrarDoctoresComponent.prototype.getAllDoctores = function () {
        var _this = this;
        this._doctorService.getAllDoctores()
            .subscribe(function (data) { return _this.doctores = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarDoctoresComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarDoctoresComponent.prototype.ngOnInit = function () {
        this.getAllDoctores();
    };
    MostrarDoctoresComponent.prototype.modificardoctor = function () {
        var _this = this;
        if (this.cve_doctor != "" && this.nom_doctor != "" && this.ap1_doctor != "" &&
            this.fecha_nac_doctor != "" && this.tel_doctor != "" && this.email_doctor != "" && this.dir_doctor != "") {
            this._doctorService.modificarDoctor(this.cve_doctor, this.nom_doctor, this.ap1_doctor, this.ap2_doctor, this.fecha_nac_doctor, this.tel_doctor, this.email_doctor, this.dir_doctor)
                .subscribe(function (result) {
                if (result === true) {
                    _this.message = '';
                    _this.messageOK = 'El Doctor se modificó con éxito.';
                    _this.ngOnInit();
                }
                else {
                    _this.messageOK = '';
                    _this.message = 'Error!! El Doctor no pudo ser modificado';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
        }
    };
    MostrarDoctoresComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarDoctoresComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarDoctoresComponent.prototype.cargarmodificar = function (i) {
        this.cve_doctor = this.doctores[i].cve_doctor;
        this.password_usuario = this.doctores[i].password_usuario;
        this.nom_doctor = this.doctores[i].nom_doctor;
        this.ap1_doctor = this.doctores[i].ap1_doctor;
        this.ap2_doctor = this.doctores[i].ap2_doctor;
        this.fecha_nac_doctor = this.doctores[i].fecha_nac_doctor;
        this.tel_doctor = this.doctores[i].tel_doctor;
        this.email_doctor = this.doctores[i].email_doctor;
        this.dir_doctor = this.doctores[i].dir_doctor;
    };
    MostrarDoctoresComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-doctores',
            templateUrl: 'app/doctores/mostrardoctores.component.html',
            styleUrls: ['app/doctores/mostrardoctores.component.css']
        }), 
        __metadata('design:paramtypes', [doctor_service_1.DoctorService])
    ], MostrarDoctoresComponent);
    return MostrarDoctoresComponent;
}());
exports.MostrarDoctoresComponent = MostrarDoctoresComponent;
//# sourceMappingURL=mostrardoctores.component.js.map