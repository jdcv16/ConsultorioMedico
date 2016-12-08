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
var AgregarMedicamentoComponent = (function () {
    function AgregarMedicamentoComponent(_medicamentoService, _medidaService) {
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
        this.modelo = {};
        this.medidas = [];
        this._medicamentoService = _medicamentoService;
        this._medidaService = _medidaService;
    }
    AgregarMedicamentoComponent.prototype.insertarMedicamento = function () {
        var _this = this;
        if (this.modelo.nom_medicamento != undefined && this.modelo.nom_generico != undefined && this.modelo.tipo_medida != undefined) {
            this._medicamentoService.postMedicamento(this.modelo.nom_medicamento, this.modelo.nom_generico, this.modelo.tipo_medida)
                .subscribe(function (result) {
                if (result === true) {
                    _this.messageOK = "El medicamento se agregó con éxito.";
                }
                else {
                    _this.message = "Error!! El medicamento no pudo ser agregado";
                }
            });
            if (this.message != "") {
                this.hidemessage();
            }
            if (this.messageOK != "") {
                this.hidemessageOK();
            }
        }
    };
    AgregarMedicamentoComponent.prototype.getAllMedidas = function () {
        var _this = this;
        this._medidaService.getAllMedidas()
            .subscribe(function (data) { return _this.medidas = data; }, function (error) { return alert("Error: " + error); });
    };
    AgregarMedicamentoComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarMedicamentoComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarMedicamentoComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    AgregarMedicamentoComponent.prototype.ngOnInit = function () {
        this.getAllMedidas();
    };
    AgregarMedicamentoComponent = __decorate([
        core_1.Component({
            selector: 'agregar-medicamento',
            templateUrl: 'app/medicamentos/agregarmedicamento.component.html'
        }), 
        __metadata('design:paramtypes', [medicamento_service_1.MedicamentoService, medida_service_1.MedidaService])
    ], AgregarMedicamentoComponent);
    return AgregarMedicamentoComponent;
}());
exports.AgregarMedicamentoComponent = AgregarMedicamentoComponent;
//# sourceMappingURL=agregarmedicamento.component.js.map