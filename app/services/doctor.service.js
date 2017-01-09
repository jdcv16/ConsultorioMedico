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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var DoctorService = (function () {
    function DoctorService(http) {
        this.endpoint_url = "http://localhost/api_cmo/doctores";
        this.http = http;
    }
    DoctorService.prototype.getAllDoctores = function () {
        return this.http.get(this.endpoint_url).map(function (res) { return res.json(); });
    };
    DoctorService.prototype.getDoctoresByDetails = function (detalle) {
        return this.http.get("http://localhost/api_cmo/doctoresnombre" + '/' + detalle).map(function (res) { return res.json(); });
    };
    DoctorService.prototype.postDoctor = function (cve, nom, ap1, ap2, fechanac, tel, email, dir) {
        var body = JSON.stringify({ "cve_doctor": cve, "nom_doctor": nom, "ap1_doctor": ap1, "ap2_doctor": ap2,
            "fecha_nac_doctor": fechanac, "tel_doctor": tel, "email_doctor": email, "dir_doctor": dir });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1/');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        var options = new http_1.RequestOptions({ headers: headers });
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map(function (response) {
            if (response.json().cve_doctor != null) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    DoctorService.prototype.modificarDoctor = function (cve, nom, ap1, ap2, fechanac, tel, email, dir) {
        var body = JSON.stringify({ "cve_doctor": cve, "nom_doctor": nom, "ap1_doctor": ap1, "ap2_doctor": ap2,
            "fecha_nac_doctor": fechanac, "tel_doctor": tel, "email_doctor": email, "dir_doctor": dir });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods', 'PUT');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        var options = new http_1.RequestOptions({ headers: headers });
        options.headers;
        return this.http.put(this.endpoint_url + '/' + cve, body, options)
            .map(function (response) {
            if (response.json().status) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    DoctorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DoctorService);
    return DoctorService;
}());
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map