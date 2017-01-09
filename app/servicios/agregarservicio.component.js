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
var servicio_service_1 = require('../services/servicio.service');
var AgregarServicioComponent = (function () {
    function AgregarServicioComponent(_servicioService) {
        this._servicioService = _servicioService;
        this.modelo = {};
        this._servicioService = _servicioService;
    }
    AgregarServicioComponent.prototype.insertarServicio = function () {
        var _this = this;
        alert(this.modelo.nom_servicio);
        alert(this.modelo.tarifa_servicio);
        if (this.modelo.nom_servicio != null && this.modelo.tarifa_servicio != null) {
            this._servicioService.postServicio(this.modelo.nom_servicio, this.modelo.tarifa_servicio)
                .subscribe(function (result) {
                if (result === true) {
                    _this.messageOK = "El servicio se agregó con éxito.";
                }
                else {
                    _this.message = "Error!! El servicio no pudo ser agregado";
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
    AgregarServicioComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarServicioComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarServicioComponent = __decorate([
        core_1.Component({
            selector: 'agregar-servicio',
            templateUrl: 'app/servicios/agregarservicio.component.html',
            styleUrls: ['app/servicios/agregarservicio.component.css']
        }), 
        __metadata('design:paramtypes', [servicio_service_1.ServicioService])
    ], AgregarServicioComponent);
    return AgregarServicioComponent;
}());
exports.AgregarServicioComponent = AgregarServicioComponent;
//# sourceMappingURL=agregarservicio.component.js.map