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
var AsignarConsultorioComponent = (function () {
    function AsignarConsultorioComponent(_asignacionService, _consultorioService, _turnoService, _doctorService) {
        this._asignacionService = _asignacionService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
        this._doctorService = _doctorService;
        this.modelo = {};
        this.consultorios = [];
        this.turnos = [];
        this.doctores = [];
        this._asignacionService = _asignacionService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
        this._doctorService = _doctorService;
    }
    AsignarConsultorioComponent.prototype.insertarAsignacion = function () {
        var _this = this;
        if (this.modelo.id_consultorio != undefined && this.modelo.id_turno != undefined && this.modelo.cve_doctor != undefined) {
            this._asignacionService.postAsignacion(this.modelo.id_consultorio, this.modelo.id_turno, this.modelo.cve_doctor)
                .subscribe(function (result) {
                if (result === true) {
                    _this.messageOK = "La Asignación se agregó con éxito.";
                }
                else {
                    _this.message = "Error!! La Asignación no pudo ser agregada";
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
    AsignarConsultorioComponent.prototype.getAllConsultorios = function () {
        var _this = this;
        this._consultorioService.getAllConsultorios()
            .subscribe(function (data) { return _this.consultorios = data; }, function (error) { return alert("Error: " + error); });
    };
    AsignarConsultorioComponent.prototype.getAllTurnos = function () {
        var _this = this;
        this._turnoService.getAllTurnos()
            .subscribe(function (data) { return _this.turnos = data; }, function (error) { return alert("Error: " + error); });
    };
    AsignarConsultorioComponent.prototype.getAllDoctores = function () {
        var _this = this;
        this._doctorService.getAllDoctores()
            .subscribe(function (data) { return _this.doctores = data; }, function (error) { return alert("Error: " + error); });
    };
    AsignarConsultorioComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AsignarConsultorioComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AsignarConsultorioComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    AsignarConsultorioComponent.prototype.ngOnInit = function () {
        this.getAllConsultorios();
        this.getAllTurnos();
        this.getAllDoctores();
    };
    AsignarConsultorioComponent = __decorate([
        core_1.Component({
            selector: 'asignar-consultorio',
            templateUrl: 'app/consultorios/asignarconsultorio.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.AsignacionService, index_1.ConsultorioService, index_1.TurnoService, index_1.DoctorService])
    ], AsignarConsultorioComponent);
    return AsignarConsultorioComponent;
}());
exports.AsignarConsultorioComponent = AsignarConsultorioComponent;
//# sourceMappingURL=asignarconsultorio.component.js.map