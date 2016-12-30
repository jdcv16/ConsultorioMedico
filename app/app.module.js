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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var index_1 = require('./services/index');
var clientes_1 = require('./clientes');
var medidas_1 = require('./medidas');
var medicamentos_1 = require('./medicamentos');
var servicios_1 = require('./servicios');
var dashboard_1 = require('./dashboard');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [
                app_component_1.AppComponent,
                clientes_1.ClienteComponent,
                clientes_1.MostrarClientesComponent,
                clientes_1.AgregarClienteComponent,
                clientes_1.ModificarClienteComponent,
                medidas_1.MedidaComponent,
                medidas_1.MostrarMedidasComponent,
                medidas_1.ModificarMedidaComponent,
                medidas_1.AgregarMedidaComponent,
                medicamentos_1.MedicamentoComponent,
                medicamentos_1.MostrarMedicamentosComponent,
                medicamentos_1.AgregarMedicamentoComponent,
                medicamentos_1.ModificarMedicamentoComponent,
                servicios_1.MostrarServiciosComponent,
                servicios_1.AgregarServicioComponent,
                dashboard_1.DashboardComponent],
            providers: [index_1.MedidaService, index_1.MedicamentoService, index_1.ClienteService, index_1.ServicioService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map