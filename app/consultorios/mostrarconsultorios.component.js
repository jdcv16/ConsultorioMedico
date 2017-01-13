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
var MostrarConsultoriosComponent = (function () {
    function MostrarConsultoriosComponent(_consultorioService) {
        this._consultorioService = _consultorioService;
        this.consultorios = [];
        this._consultorioService = _consultorioService;
    }
    MostrarConsultoriosComponent.prototype.getAllConsultorios = function () {
        var _this = this;
        this._consultorioService.getAllConsultorios()
            .subscribe(function (data) { return _this.consultorios = data; }, function (error) { return alert("Error: " + error); });
    };
    MostrarConsultoriosComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    MostrarConsultoriosComponent.prototype.modificarConsultorio = function () {
        var _this = this;
        if (this.nom_consultorio != "") {
            this._consultorioService.modificarConsultorio(this.id_consultorio, this.nom_consultorio)
                .subscribe(function (result) {
                if (result === true) {
                    _this.message = '';
                    _this.messageOK = 'El Consultorio se modificó con éxito.';
                    _this.ngOnInit();
                }
                else {
                    _this.messageOK = '';
                    _this.message = 'Error!! El Consultorio no pudo ser modificado';
                }
            });
            this.hidemessage();
            this.hidemessageOK();
            this.ngOnInit();
        }
    };
    MostrarConsultoriosComponent.prototype.hidemessage = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.message = ""; }, 3000);
    };
    MostrarConsultoriosComponent.prototype.hidemessageOK = function () {
        var _this = this;
        this.timer = setTimeout(function () { return _this.messageOK = ""; }, 3000);
    };
    MostrarConsultoriosComponent.prototype.ngOnInit = function () {
        this.getAllConsultorios();
    };
    MostrarConsultoriosComponent.prototype.cargarmodificar = function (i) {
        this.id_consultorio = this.consultorios[i].id_consultorio;
        this.nom_consultorio = this.consultorios[i].nom_consultorio;
    };
    MostrarConsultoriosComponent = __decorate([
        core_1.Component({
            selector: 'mostrar-consultorios',
            templateUrl: 'app/consultorios/mostrarconsultorios.component.html',
            styleUrls: ['app/consultorios/mostrarconsultorios.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ConsultorioService])
    ], MostrarConsultoriosComponent);
    return MostrarConsultoriosComponent;
}());
exports.MostrarConsultoriosComponent = MostrarConsultoriosComponent;
//# sourceMappingURL=mostrarconsultorios.component.js.map