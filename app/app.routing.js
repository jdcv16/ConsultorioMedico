"use strict";
var router_1 = require('@angular/router');
var clientes_1 = require('./clientes');
var medidas_1 = require('./medidas');
var medicamentos_1 = require('./medicamentos');
var servicios_1 = require('./servicios');
var doctores_1 = require('./doctores');
var consultorios_1 = require('./consultorios');
var logins_1 = require('./logins');
var dashboard_1 = require('./dashboard');
var appRoutes = [
    {
        path: 'el-cliente',
        component: clientes_1.ClienteComponent
    },
    {
        path: 'mostrar-clientes',
        component: clientes_1.MostrarClientesComponent
    },
    {
        path: 'agregar-cliente',
        component: clientes_1.AgregarClienteComponent
    },
    {
        path: 'modificar-cliente',
        component: clientes_1.ModificarClienteComponent
    },
    {
        path: 'reporte-clientes',
        component: clientes_1.ReporteClientesComponent
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
        path: 'mostrar-servicios',
        component: servicios_1.MostrarServiciosComponent
    },
    {
        path: 'agregar-servicio',
        component: servicios_1.AgregarServicioComponent
    },
    {
        path: 'agregar-doctor',
        component: doctores_1.AgregarDoctorComponent
    },
    {
        path: 'mostrar-doctores',
        component: doctores_1.MostrarDoctoresComponent
    },
    {
        path: 'reporte-doctores',
        component: doctores_1.ReporteDoctoresComponent
    },
    {
        path: 'agregar-consultorio',
        component: consultorios_1.AgregarConsultorioComponent
    },
    {
        path: 'mostrar-consultorios',
        component: consultorios_1.MostrarConsultoriosComponent
    },
    {
        path: 'asignar-consultorio',
        component: consultorios_1.AsignarConsultorioComponent
    },
    {
        path: 'mostrar-asignaciones',
        component: consultorios_1.MostrarAsignacionesComponent
    },
    {
        path: 'el-login',
        component: logins_1.LoginComponent
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