"use strict";
var Cliente = (function () {
    function Cliente(id, nombre_cliente, apellido1, correo_electronico, tel, fecha_nac, apellido2) {
        this.id = id;
        this.nombre_cliente = nombre_cliente;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.correo_electronico = correo_electronico;
        this.tel = tel;
        this.fecha_nac = fecha_nac;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map