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
var index_1 = require('./services/index');
var AppComponent = (function () {
    function AppComponent(_loginService) {
        this._loginService = _loginService;
        this.modelo = {};
        this._loginService = _loginService;
    }
    AppComponent.prototype.onSelectCliente = function (cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    };
    AppComponent.prototype.hacerlogin = function () {
        var _this = this;
        if (this.eseusuario != undefined && this.esacontra != undefined) {
            this._loginService.getUsuario(this.eseusuario, this.esacontra).subscribe(function (data) {
                _this.usuario = data;
                localStorage.setItem("cveu", JSON.stringify(_this.usuario['cve_usuario']));
                localStorage.setItem("tipou", JSON.stringify(_this.usuario['tipo_usuario']));
                localStorage.setItem("passu", JSON.stringify(_this.usuario['password_usuario']));
                if (localStorage.getItem('tipou') != "undefined") {
                    _this.clavedeusuario = localStorage.getItem('cveu');
                    _this.tipodeusuario = localStorage.getItem('tipou');
                    _this.passworddeusuario = localStorage.getItem('passu');
                    if (localStorage.getItem('tipou') == '"CLIENTE"') {
                        _this.escliente = true;
                    }
                    else {
                        _this.escliente = false;
                    }
                    if (localStorage.getItem('tipou') == '"DOCTOR"') {
                        _this.esdoctor = true;
                    }
                    else {
                        _this.esdoctor = false;
                    }
                    _this.eseusuario = "";
                    _this.esacontra = "";
                }
                else {
                    localStorage.removeItem('cveu');
                    localStorage.removeItem('tipou');
                    localStorage.removeItem('passu');
                    _this.clavedeusuario = undefined;
                    _this.tipodeusuario = undefined;
                    _this.passworddeusuario = undefined;
                    _this.escliente = false;
                    _this.esdoctor = false;
                    _this.OnInit();
                    alert("Error: Usuario o Contraseña Incorrecta");
                }
            }, function (error) { return alert("Error: " + error); });
        }
        else {
            alert(" Ingrese Usuario Y Contraseña");
        }
    };
    AppComponent.prototype.cerrarsesion = function () {
        localStorage.removeItem('cveu');
        localStorage.removeItem('tipou');
        localStorage.removeItem('passu');
        this.clavedeusuario = undefined;
        this.tipodeusuario = undefined;
        this.passworddeusuario = undefined;
        this.escliente = false;
        this.esdoctor = false;
        this.OnInit();
    };
    AppComponent.prototype.OnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map