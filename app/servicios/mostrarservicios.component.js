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
var MostrarServiciosComponent = (function () {
    function MostrarServiciosComponent(_servicioService) {
        this._servicioService = _servicioService;
        this.servicios = [];
        this._servicioService = _servicioService;
    }
    MostrarServiciosComponent.prototype.getAllServicios = function () {
        var _this = this;
        this._servicioService.getAllServicios()
            .subscribe(function (data) { return _this.servicios = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarServiciosComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarServiciosComponent.prototype.modificarServicio = function () {
        var _this = this;
        if (this.nom_servicio != "" && this.tarifa_servicio != 0) {
            this._servicioService.modificarServicio(this.id_servicio, this.nom_servicio, this.tarifa_servicio)
                .subscribe(function (result) {
                if (result === true) {
                    _this.message = '';
                    _this.messageOK = 'El servicio se modificó con éxito.';
                    _this.ngOnInit();
                }
                else {
                    _this.messageOK = '';
                    _this.message = 'Error!! El servicio no pudo ser modificada';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
            this.ngOnInit();
        }
    };
    MostrarServiciosComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarServiciosComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarServiciosComponent.prototype.ngOnInit = function () {
        this.getAllServicios();
    };
    MostrarServiciosComponent.prototype.cargarmodificar = function (i) {
        this.id_servicio = this.servicios[i].id_servicio;
        this.nom_servicio = this.servicios[i].nom_servicio;
        this.tarifa_servicio = this.servicios[i].tarifa_servicio;
    };
    MostrarServiciosComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-servicios',
            templateUrl: 'app/servicios/mostrarservicios.component.html',
            styleUrls: ['app/servicios/mostrarservicios.component.css']
        }), 
        __metadata('design:paramtypes', [servicio_service_1.ServicioService])
    ], MostrarServiciosComponent);
    return MostrarServiciosComponent;
}());
exports.MostrarServiciosComponent = MostrarServiciosComponent;
//# sourceMappingURL=mostrarservicios.component.js.map