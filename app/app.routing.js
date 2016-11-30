"use strict";
var router_1 = require('@angular/router');
var clientes_1 = require('./clientes');
var medidas_1 = require('./medidas');
var appRoutes = [
    {
        path: 'el-cliente',
        component: clientes_1.ClienteComponent
    },
    {
        path: 'la-medida',
        component: medidas_1.MedidaComponent
    }];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map