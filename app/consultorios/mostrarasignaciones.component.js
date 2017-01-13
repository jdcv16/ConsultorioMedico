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
var MostrarAsignacionesComponent = (function () {
    function MostrarAsignacionesComponent(_asignacionService, _doctorService, _consultorioService, _turnoService) {
        this._asignacionService = _asignacionService;
        this._doctorService = _doctorService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
        this.asignaciones = [];
        this.doctores = [];
        this.consultorios = [];
        this.turnos = [];
        this._asignacionService = _asignacionService;
        this._doctorService = _doctorService;
        this._consultorioService = _consultorioService;
        this._turnoService = _turnoService;
    }
    MostrarAsignacionesComponent.prototype.getAllAsignaciones = function () {
        var _this = this;
        this._asignacionService.getAllAsignaciones()
            .subscribe(function (data) { return _this.asignaciones = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarAsignacionesComponent.prototype.getAllDoctores = function () {
        var _this = this;
        this._doctorService.getAllDoctores()
            .subscribe(function (data) { return _this.doctores = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarAsignacionesComponent.prototype.getAllConsultorios = function () {
        var _this = this;
        this._consultorioService.getAllConsultorios()
            .subscribe(function (data) { return _this.consultorios = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarAsignacionesComponent.prototype.getAllTurnos = function () {
        var _this = this;
        this._turnoService.getAllTurnos()
            .subscribe(function (data) { return _this.turnos = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarAsignacionesComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarAsignacionesComponent.prototype.ngOnInit = function () {
        this.getAllAsignaciones();
        this.getAllDoctores();
        this.getAllConsultorios();
        this.getAllTurnos();
    };
    MostrarAsignacionesComponent.prototype.modificarAsignacion = function () {
        var _this = this;
        this._asignacionService.modificarAsignacion(this.id_asignacion, this.id_consultorio, this.id_turno, this.cve_doctor)
            .subscribe(function (result) {
            if (result === true) {
                _this.message = '';
                _this.messageOK = 'La Asignación se modificó con éxito.';
                _this.ngOnInit();
            }
            else {
                _this.messageOK = '';
                _this.message = 'Error!! La Asignación no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    };
    MostrarAsignacionesComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarAsignacionesComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarAsignacionesComponent.prototype.cargarmodificar = function (i) {
        this.id_asignacion = this.asignaciones[i].id_asignacion;
        this.id_consultorio = this.asignaciones[i].id_consultorio;
        this.id_turno = this.asignaciones[i].id_turno;
        this.cve_doctor = this.asignaciones[i].cve_doctor;
        //alert(this.medidas[this.medicamentos[i].tipo_medida].id_medida-1);
    };
    MostrarAsignacionesComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-asignaciones',
            templateUrl: 'app/consultorios/mostrarasignaciones.component.html',
            styleUrls: ['app/consultorios/mostrarasignaciones.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.AsignacionService, index_1.DoctorService, index_1.ConsultorioService, index_1.TurnoService])
    ], MostrarAsignacionesComponent);
    return MostrarAsignacionesComponent;
}());
exports.MostrarAsignacionesComponent = MostrarAsignacionesComponent;
//# sourceMappingURL=mostrarasignaciones.component.js.map