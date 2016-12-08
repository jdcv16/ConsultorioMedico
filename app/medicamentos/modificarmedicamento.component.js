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
var ModificarMedicamentoComponent = (function () {
    function ModificarMedicamentoComponent(_medidaService, _medicamentoService) {
        this._medidaService = _medidaService;
        this._medicamentoService = _medicamentoService;
        this.medidas = [];
        this.modelo = {};
        this._medidaService = _medidaService;
        this._medicamentoService = _medicamentoService;
    }
    ModificarMedicamentoComponent.prototype.modificarMedicamento = function () {
        var _this = this;
        this._medicamentoService.modificarMedicamento(this.modelo.id_medicamento, this.modelo.nom_medicamento, this.modelo.nom_generico, this.modelo.tipo_medida)
            .subscribe(function (result) {
            if (result === true) {
                _this.message = '';
                _this.messageOK = 'El medicamento se modificó con éxito.';
            }
            else {
                _this.messageOK = '';
                _this.message = 'Error!! El medicamento no pudo ser modificada';
            }
        });
        this.hidemessage();
        this.hidemessageOK();
    };
    ModificarMedicamentoComponent.prototype.getAllMedidas = function () {
        var _this = this;
        this._medidaService.getAllMedidas()
            .subscribe(function (data) { return _this.medidas = data; }, function (error) { return alert("Error: " + error); });
    };
    ModificarMedicamentoComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    ModificarMedicamentoComponent.prototype.ngOnInit = function () {
        this.getAllMedidas();
    };
    ModificarMedicamentoComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    ModificarMedicamentoComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    ModificarMedicamentoComponent = __decorate([
        core_1.Component({
            selector: 'modificar-medicamento',
            templateUrl: 'app/medicamentos/modificarmedicamento.component.html'
        }), 
        __metadata('design:paramtypes', [index_1.MedidaService, index_1.MedicamentoService])
    ], ModificarMedicamentoComponent);
    return ModificarMedicamentoComponent;
}());
exports.ModificarMedicamentoComponent = ModificarMedicamentoComponent;
//# sourceMappingURL=modificarmedicamento.component.js.map