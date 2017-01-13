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
var ReporteDoctoresComponent = (function () {
    function ReporteDoctoresComponent(_doctorService) {
        this._doctorService = _doctorService;
        this.doctores = [];
        this._doctorService = _doctorService;
    }
    ReporteDoctoresComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ReporteDoctoresComponent.prototype.buscardoctores = function () {
        var _this = this;
        if (this.abuscar != undefined || this.abuscar == "") {
            this._doctorService.getDoctoresByDetails(this.abuscar)
                .subscribe(function (data) { return _this.doctores = data; });
        }
        else {
            alert("Ingrese algo para buscar clientes!!!");
        }
    };
    ReporteDoctoresComponent = __decorate([
        core_1.Component({
            selector: 'reporte-doctores',
            templateUrl: 'app/doctores/reportedoctores.component.html',
            styleUrls: ['app/doctores/reportedoctores.component.css']
        }), 
        __metadata('design:paramtypes', [doctor_service_1.DoctorService])
    ], ReporteDoctoresComponent);
    return ReporteDoctoresComponent;
}());
exports.ReporteDoctoresComponent = ReporteDoctoresComponent;
//# sourceMappingURL=reportedoctores.component.js.map