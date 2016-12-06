"use strict";
var router_1 = require('@angular/router');
var clientes_1 = require('./clientes');
var medidas_1 = require('./medidas');
var medicamentos_1 = require('./medicamentos');
var dashboard_1 = require('./dashboard');
var appRoutes = [
    {
        path: 'el-cliente',
        component: clientes_1.ClienteComponent
    },
    {
        path: 'la-medida',
        component: medidas_1.MedidaComponent
    },
    {
        path: 'agregar-medida',
        component: medidas_1.AgregarMedidaComponent
    },
    {
        path: 'mostrar-medidas',
        component: medidas_1.MostrarMedidasComponent
    },
    {
        path: 'modificar-medida',
        component: medidas_1.ModificarMedidaComponent
    },
    {
        path: 'el-medicamento',
        component: medicamentos_1.MedicamentoComponent
    },
    {
        path: 'mostrar-medicamentos',
        component: medicamentos_1.MostrarMedicamentosComponent
    },
    {
        path: 'agregar-medicamento',
        component: medicamentos_1.AgregarMedicamentoComponent
    },
    {
        path: 'dashboard',
        component: dashboard_1.DashboardComponent
    },
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map