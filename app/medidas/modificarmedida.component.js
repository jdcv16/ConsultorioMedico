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
var core_2 = require('@angular/core');
var ModificarMedidaComponent = (function () {
    function ModificarMedidaComponent(_medidaService) {
        this._medidaService = _medidaService;
        this.modelo = {};
        this.medidas = [];
        this._medidaService = _medidaService;
    }
    ModificarMedidaComponent.prototype.modificarMedida = function () {
        var _this = this;
        this._medidaService.modificarMedida(this.modelo.id_medida, this.modelo.nom_medida)
            .subscribe(function (result) {
            if (result === true) {
                _this.message = '';
                _this.messageOK = 'La medida se modificó con éxito.';
            }
            else {
                _this.messageOK = '';
                _this.message = 'Error!! La medida no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    };
    ModificarMedidaComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    ModificarMedidaComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    ModificarMedidaComponent = __decorate([
        core_1.Component({
            selector: 'modificar-medida',
            templateUrl: 'app/medidas/modificarmedida.component.html',
            styleUrls: ['app/medidas/modificarmedida.component.css']
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [medida_service_1.MedidaService])
    ], ModificarMedidaComponent);
    return ModificarMedidaComponent;
}());
exports.ModificarMedidaComponent = ModificarMedidaComponent;
//# sourceMappingURL=modificarmedida.component.js.map