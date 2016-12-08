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
var AgregarClienteComponent = (function () {
    function AgregarClienteComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.modelo = {};
        this._clienteService = _clienteService;
    }
    AgregarClienteComponent.prototype.insertarCliente = function () {
        var _this = this;
        if (this.modelo.nom_cliente != undefined && this.modelo.ap1_cliente != undefined && this.modelo.ap2_cliente != undefined
            && this.modelo.fecha_nac_cliente != undefined && this.modelo.fecha_reg_cliente != undefined && this.modelo.tel_cliente != undefined
            && this.modelo.dir_cliente != undefined) {
            this._clienteService.postCliente(this.modelo.nom_cliente, this.modelo.ap1_cliente, this.modelo.ap2_cliente, this.modelo.fecha_nac_cliente, this.modelo.fecha_reg_cliente, this.modelo.tel_cliente, this.modelo.dir_cliente)
                .subscribe(function (result) {
                if (result === true) {
                    _this.messageOK = "El cliente se agregó con éxito.";
                }
                else {
                    _this.message = "Error!! El cliente no pudo ser agregada";
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
    AgregarClienteComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarClienteComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarClienteComponent = __decorate([
        core_1.Component({
            selector: 'agregar-cliente',
            templateUrl: 'app/clientes/agregarcliente.component.html'
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], AgregarClienteComponent);
    return AgregarClienteComponent;
}());
exports.AgregarClienteComponent = AgregarClienteComponent;
//# sourceMappingURL=agregarcliente.component.js.map