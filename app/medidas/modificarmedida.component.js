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
var ModificarMedidaComponent = (function () {
    function ModificarMedidaComponent(_medidaService) {
        this._medidaService = _medidaService;
        this.medidas = [];
        this._medidaService = _medidaService;
    }
    ModificarMedidaComponent.prototype.getAllMedidas = function () {
        var _this = this;
        this._medidaService.getAllMedidas()
            .subscribe(function (data) { return _this.medidas = data; }, function (error) { return alert("Error: " + error); });
    };
    ModificarMedidaComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ModificarMedidaComponent.prototype.modificarMedida = function (id_medida, nom_medida) {
        var _this = this;
        this._medidaService.modificarMedida(id_medida, nom_medida)
            .subscribe(function (result) {
            if (result === true) {
                _this.message = '';
                _this.messageOK = 'Se modificó correctamente la medida.';
                _this.getAllMedidas();
            }
            else {
                _this.messageOK = '';
                _this.message = 'Algo salió mal al modificar la medida';
            }
        });
    };
    ModificarMedidaComponent.prototype.ngOnInit = function () {
        this.getAllMedidas();
    };
    ModificarMedidaComponent = __decorate([
        core_1.Component({
            selector: 'modificar-medida',
            templateUrl: 'app/medidas/modificarmedida.component.html'
        }), 
        __metadata('design:paramtypes', [medida_service_1.MedidaService])
    ], ModificarMedidaComponent);
    return ModificarMedidaComponent;
}());
exports.ModificarMedidaComponent = ModificarMedidaComponent;
//# sourceMappingURL=modificarmedida.component.js.map