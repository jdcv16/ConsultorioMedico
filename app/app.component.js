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
var clientes_1 = require('./clientes');
var AppComponent = (function () {
    function AppComponent() {
        this.clientes = [new clientes_1.Cliente(1, "José", "Cota", "jdcv.sw.dev@gmail.com", "6681620312", "16-03-1995"),
            new clientes_1.Cliente(2, "Eduardo", "Lopez", "lalolopez@gmail.com", "8123267", "18-08-1988", "Gonzalez")];
    }
    AppComponent.prototype.onSelectCliente = function (cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map