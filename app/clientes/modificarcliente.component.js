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
var ModificarClienteComponent = (function () {
    function ModificarClienteComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.modelo = {};
        this._clienteService = _clienteService;
    }
    ModificarClienteComponent.prototype.modificarCliente = function () {
        var _this = this;
        this._clienteService.modificarCliente(this.modelo.id_cliente, this.modelo.nom_cliente, this.modelo.ap1_cliente, this.modelo.ap2_cliente, this.modelo.fecha_nac_cliente, this.modelo.fecha_reg_cliente, this.modelo.tel_cliente, this.modelo.dir_cliente)
            .subscribe(function (result) {
            if (result === true) {
                _this.message = '';
                _this.messageOK = 'El cliente se modificó con éxito.';
            }
            else {
                _this.messageOK = '';
                _this.message = 'Error!! El cliente no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    };
    ModificarClienteComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    ModificarClienteComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    ModificarClienteComponent = __decorate([
        core_1.Component({
            selector: 'modificar-cliente',
            templateUrl: 'app/clientes/modificarcliente.component.html'
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], ModificarClienteComponent);
    return ModificarClienteComponent;
}());
exports.ModificarClienteComponent = ModificarClienteComponent;
//# sourceMappingURL=modificarcliente.component.js.map