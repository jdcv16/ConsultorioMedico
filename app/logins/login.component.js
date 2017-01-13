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
var LoginComponent = (function () {
    function LoginComponent(_loginservice) {
        this._loginservice = _loginservice;
        this.modelo = {};
        this.clavedeusuario = localStorage.getItem('cveu');
        this.tipodeusuario = localStorage.getItem('tipou');
        this.passworddeusuario = localStorage.getItem('passu');
        this._loginservice = _loginservice;
    }
    LoginComponent.prototype.hacerlogin = function () {
        var _this = this;
        if (this.modelo.usuario != undefined && this.modelo.clave != undefined) {
            this._loginservice.getUsuario(this.modelo.usuario, this.modelo.clave).subscribe(function (data) {
                _this.usuario = data;
                localStorage.setItem("cveu", JSON.stringify(_this.usuario['cve_usuario']));
                localStorage.setItem("tipou", JSON.stringify(_this.usuario['tipo_usuario']));
                localStorage.setItem("passu", JSON.stringify(_this.usuario['password_usuario']));
                alert("Bienvenido:");
            }, function (error) { return alert("Error: " + error); });
        }
        else {
            alert("Ingrese el nombre de usuario y/o contraseña");
        }
    };
    LoginComponent.prototype.cerrarsesion = function () {
        localStorage.removeItem('cveu');
        localStorage.removeItem('tipou');
        localStorage.removeItem('passu');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'el-login',
            templateUrl: 'app/logins/login.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map