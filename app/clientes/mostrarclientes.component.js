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
var MostrarClientesComponent = (function () {
    function MostrarClientesComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.clientes = [];
        this._clienteService = _clienteService;
    }
    MostrarClientesComponent.prototype.getAllClientes = function () {
        var _this = this;
        this._clienteService.getAllClientes()
            .subscribe(function (data) { return _this.clientes = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarClientesComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarClientesComponent.prototype.ngOnInit = function () {
        this.getAllClientes();
    };
    MostrarClientesComponent.prototype.modificarCliente = function () {
        var _this = this;
        if (this.id != 0 && this.nom_cliente != "" && this.ap1_cliente != "" && this.ap2_cliente != "" &&
            this.fecha_nac_cliente != "" && this.fecha_reg_cliente != "" && this.tel_cliente != "" && this.dir_cliente != "") {
            this._clienteService.modificarCliente(this.id, this.nom_cliente, this.ap1_cliente, this.ap2_cliente, this.fecha_nac_cliente, this.fecha_reg_cliente, this.tel_cliente, this.dir_cliente)
                .subscribe(function (result) {
                if (result === true) {
                    _this.message = '';
                    _this.messageOK = 'El cliente se modificó con éxito.';
                    _this.ngOnInit();
                }
                else {
                    _this.messageOK = '';
                    _this.message = 'Error!! El cliente no pudo ser modificada';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
        }
    };
    MostrarClientesComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarClientesComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarClientesComponent.prototype.cargarmodificar = function (i) {
        this.id = this.clientes[i].id;
        this.nom_cliente = this.clientes[i].nom_cliente;
        this.ap1_cliente = this.clientes[i].ap1_cliente;
        this.ap2_cliente = this.clientes[i].ap2_cliente;
        this.fecha_nac_cliente = this.clientes[i].fecha_nac_cliente;
        this.fecha_reg_cliente = this.clientes[i].fecha_reg_cliente;
        this.tel_cliente = this.clientes[i].tel_cliente;
        this.dir_cliente = this.clientes[i].dir_cliente;
    };
    MostrarClientesComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-clientes',
            templateUrl: 'app/clientes/mostrarclientes.component.html',
            styleUrls: ['app/clientes/mostrarclientes.component.css']
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService])
    ], MostrarClientesComponent);
    return MostrarClientesComponent;
}());
exports.MostrarClientesComponent = MostrarClientesComponent;
//# sourceMappingURL=mostrarclientes.component.js.map