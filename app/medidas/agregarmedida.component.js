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
var medida_service_1 = require('../services/medida.service');
var AgregarMedidaComponent = (function () {
    function AgregarMedidaComponent(_medidaService) {
        this._medidaService = _medidaService;
        this.modelo = {};
        this._medidaService = _medidaService;
    }
    AgregarMedidaComponent.prototype.insertarMedida = function () {
        var _this = this;
        this._medidaService.postMedida(this.modelo.nom_medida)
            .subscribe(function (result) {
            if (result === true) {
                _this.messageOK = "La medida se agregó con éxito.";
            }
            else {
                _this.message = "Error!! La medida no pudo ser agregada";
            }
        });
        if (this.message != "") {
            this.hidemessage();
        }
        if (this.messageOK != "") {
            this.hidemessageOK();
        }
    };
    AgregarMedidaComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarMedidaComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarMedidaComponent = __decorate([
        core_1.Component({
            selector: 'agregar-medida',
            templateUrl: 'app/medidas/agregarmedida.component.html'
        }), 
        __metadata('design:paramtypes', [medida_service_1.MedidaService])
    ], AgregarMedidaComponent);
    return AgregarMedidaComponent;
}());
exports.AgregarMedidaComponent = AgregarMedidaComponent;
//# sourceMappingURL=agregarmedida.component.js.map