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
var medicamento_service_1 = require('../services/medicamento.service');
var medida_service_1 = require('../services/medida.service');
var MostrarMedicamentosComponent = (function () {
    function MostrarMedicamentosComponent(_medicamentoService, _medidaService) {
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
        this.medicamentos = [];
        this.medidas = [];
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
    }
    MostrarMedicamentosComponent.prototype.getAllMedicamentos = function () {
        var _this = this;
        this._medicamentoService.getAllMedicamentos()
            .subscribe(function (data) { return _this.medicamentos = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarMedicamentosComponent.prototype.getAllMedidas = function () {
        var _this = this;
        this._medidaService.getAllMedidas()
            .subscribe(function (data) { return _this.medidas = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarMedicamentosComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarMedicamentosComponent.prototype.ngOnInit = function () {
        this.getAllMedidas();
        this.getAllMedicamentos();
    };
    MostrarMedicamentosComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-medicamentos',
            templateUrl: 'app/medicamentos/mostrarmedicamentos.component.html',
            styleUrls: ['app/medicamentos/mostrarmedicamentos.component.css']
        }), 
        __metadata('design:paramtypes', [medicamento_service_1.MedicamentoService, medida_service_1.MedidaService])
    ], MostrarMedicamentosComponent);
    return MostrarMedicamentosComponent;
}());
exports.MostrarMedicamentosComponent = MostrarMedicamentosComponent;
//# sourceMappingURL=mostrarmedicamentos.component.js.map