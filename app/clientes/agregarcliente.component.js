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
var AgregarClienteComponent = (function () {
    function AgregarClienteComponent(_clienteService, _loginService) {
        this._clienteService = _clienteService;
        this._loginService = _loginService;
        this.modelo = {};
        this._clienteService = _clienteService;
        this._loginService = _loginService;
    }
    AgregarClienteComponent.prototype.insertarCliente = function () {
        var _this = this;
        this.eltipodeusuario = "CLIENTE";
        if (this.modelo.cve_usuario != undefined && this.modelo.nom_cliente != undefined && this.modelo.ap1_cliente != undefined &&
            this.modelo.fecha_nac_cliente != undefined && this.modelo.fecha_reg_cliente != undefined && this.modelo.tel_cliente != undefined &&
            this.modelo.email_cliente != undefined && this.modelo.dir_cliente != undefined && this.modelo.password_usuario != undefined) {
            this._clienteService.postCliente(this.modelo.cve_usuario, this.modelo.nom_cliente, this.modelo.ap1_cliente, this.modelo.ap2_cliente, this.modelo.fecha_nac_cliente, this.modelo.fecha_reg_cliente, this.modelo.tel_cliente, this.modelo.email_cliente, this.modelo.dir_cliente)
                .subscribe(function (result) {
                if (result === true) {
                    _this._loginService.postUsuario(_this.modelo.cve_usuario, _this.eltipodeusuario, _this.modelo.password_usuario).subscribe(function (result) {
                        if (result === true) {
                            _this.messageOK = "El Cliente se agregó con éxito.";
                        }
                        else {
                            _this.message = "Error!! El Cliente no pudo ser agregado";
                        }
                    });
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
        else {
            alert("Ingrese todos los campos del formulario");
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
            templateUrl: 'app/clientes/agregarcliente.component.html',
            styleUrls: ['app/clientes/agregarcliente.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ClienteService, index_1.LoginService])
    ], AgregarClienteComponent);
    return AgregarClienteComponent;
}());
exports.AgregarClienteComponent = AgregarClienteComponent;
//# sourceMappingURL=agregarcliente.component.js.map