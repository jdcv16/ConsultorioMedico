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
var MostrarMedidasComponent = (function () {
    function MostrarMedidasComponent(_medidaService) {
        this._medidaService = _medidaService;
        this.medidas = [];
        this._medidaService = _medidaService;
    }
    MostrarMedidasComponent.prototype.getAllMedidas = function () {
        var _this = this;
        this._medidaService.getAllMedidas()
            .subscribe(function (data) { return _this.medidas = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarMedidasComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarMedidasComponent.prototype.modificarMedida = function () {
        var _this = this;
        if (this.nom_medida != "") {
            this._medidaService.modificarMedida(this.id_medida, this.nom_medida)
                .subscribe(function (result) {
                if (result === true) {
                    _this.message = '';
                    _this.messageOK = 'La medida se modificó con éxito.';
                    _this.ngOnInit();
                }
                else {
                    _this.messageOK = '';
                    _this.message = 'Error!! La medida no pudo ser modificada';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
            this.ngOnInit();
        }
    };
    MostrarMedidasComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarMedidasComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarMedidasComponent.prototype.ngOnInit = function () {
        this.getAllMedidas();
    };
    MostrarMedidasComponent.prototype.cargarmodificar = function (i) {
        this.id_medida = this.medidas[i].id_medida;
        this.nom_medida = this.medidas[i].nom_medida;
    };
    MostrarMedidasComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-medidas',
            templateUrl: 'app/medidas/mostrarmedidas.component.html',
            styleUrls: ['app/medidas/mostrarmedidas.component.css']
        }), 
        __metadata('design:paramtypes', [medida_service_1.MedidaService])
    ], MostrarMedidasComponent);
    return MostrarMedidasComponent;
}());
exports.MostrarMedidasComponent = MostrarMedidasComponent;
//# sourceMappingURL=mostrarmedidas.component.js.map