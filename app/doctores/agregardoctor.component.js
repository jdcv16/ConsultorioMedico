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
var index_1 = require('../services/index');
var AgregarDoctorComponent = (function () {
    function AgregarDoctorComponent(_doctorService, _loginService) {
        this._doctorService = _doctorService;
        this._loginService = _loginService;
        this.modelo = {};
        this._doctorService = _doctorService;
        this._loginService = _loginService;
    }
    AgregarDoctorComponent.prototype.insertarDoctor = function () {
        var _this = this;
        this.eltipodeusuario = "DOCTOR";
        if (this.modelo.cve_usuario != undefined && this.modelo.nom_doctor != undefined && this.modelo.ap1_doctor != undefined &&
            this.modelo.ap2_doctor != undefined && this.modelo.fecha_nac_doctor != undefined && this.modelo.tel_doctor != undefined &&
            this.modelo.email_doctor != undefined && this.modelo.dir_doctor != undefined && this.modelo.password_usuario != undefined) {
            this._doctorService.postDoctor(this.modelo.cve_usuario, this.modelo.nom_doctor, this.modelo.ap1_doctor, this.modelo.ap2_doctor, this.modelo.fecha_nac_doctor, this.modelo.tel_doctor, this.modelo.email_doctor, this.modelo.dir_doctor)
                .subscribe(function (result) {
                if (result === true) {
                    _this._loginService.postUsuario(_this.modelo.cve_usuario, _this.eltipodeusuario, _this.modelo.password_usuario).subscribe(function (result) {
                        if (result === true) {
                            _this.messageOK = "El Doctor se agregó con éxito.";
                        }
                        else {
                            _this.message = "Error!! El Doctor no pudo ser agregado";
                        }
                    });
                }
                else {
                    _this.message = "Error!! El Doctor no pudo ser agregado";
                }
            });
            if (this.message != "") {
                this.hidemessage();
            }
            if (this.messageOK != "") {
                this.hidemessageOK();
            }
        }
    };
    AgregarDoctorComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarDoctorComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarDoctorComponent = __decorate([
        core_1.Component({
            selector: 'agregar-doctor',
            templateUrl: 'app/doctores/agregardoctor.component.html',
            styleUrls: ['app/doctores/agregardoctor.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.DoctorService, index_1.LoginService])
    ], AgregarDoctorComponent);
    return AgregarDoctorComponent;
}());
exports.AgregarDoctorComponent = AgregarDoctorComponent;
//# sourceMappingURL=agregardoctor.component.js.map