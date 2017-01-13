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
var AgregarConsultorioComponent = (function () {
    function AgregarConsultorioComponent(_consultorioService) {
        this._consultorioService = _consultorioService;
        this.modelo = {};
        this._consultorioService = _consultorioService;
    }
    AgregarConsultorioComponent.prototype.insertarConsultorio = function () {
        var _this = this;
        if (this.modelo.nom_consultorio != undefined) {
            this._consultorioService.postConsultorio(this.modelo.nom_consultorio)
                .subscribe(function (result) {
                if (result === true) {
                    _this.messageOK = "El Consultorio se agregó con éxito.";
                }
                else {
                    _this.message = "Error!! El Consultorio no pudo ser agregado";
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
    AgregarConsultorioComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    AgregarConsultorioComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    AgregarConsultorioComponent = __decorate([
        core_1.Component({
            selector: 'agregar-consultorio',
            templateUrl: 'app/consultorios/agregarconsultorio.component.html',
            styleUrls: ['app/consultorios/agregarconsultorio.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ConsultorioService])
    ], AgregarConsultorioComponent);
    return AgregarConsultorioComponent;
}());
exports.AgregarConsultorioComponent = AgregarConsultorioComponent;
//# sourceMappingURL=agregarconsultorio.component.js.map