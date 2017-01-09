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
var cliente_service_1 = require('../services/cliente.service');
var ReporteClientesComponent = (function () {
    function ReporteClientesComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.clientes = [];
        this._clienteService = _clienteService;
    }
    ReporteClientesComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ReporteClientesComponent.prototype.buscarclientes = function () {
        var _this = this;
        if (this.abuscar != undefined || this.abuscar == "") {
            this._clienteService.getClientesByDetails(this.abuscar)
                .subscribe(function (data) { return _this.clientes = data; });
        }
        else {
            alert("Ingrese algo para buscar clientes!!!");
        }
    };
    ReporteClientesComponent = __decorate([
        core_1.Component({
            selector: 'reporte-clientes',
            templateUrl: 'app/clientes/reporteclientes.component.html',
            styleUrls: ['app/clientes/reporteclientes.component.css']
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], ReporteClientesComponent);
    return ReporteClientesComponent;
}());
exports.ReporteClientesComponent = ReporteClientesComponent;
//# sourceMappingURL=reporteclientes.component.js.map