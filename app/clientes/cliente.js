"use strict";
var Cliente = (function () {
    function Cliente(id, nom_cliente, ap1_cliente, fecha_nac_cliente, fecha_reg_cliente, tel_cliente, dir_cliente, email_cliente, ap2_cliente) {
        this.id = id;
        this.nom_cliente = nom_cliente;
        this.ap1_cliente = ap1_cliente;
        this.ap2_cliente = ap2_cliente;
        this.fecha_nac_cliente = fecha_nac_cliente;
        this.fecha_reg_cliente = fecha_reg_cliente;
        this.tel_cliente = tel_cliente;
        this.dir_cliente = dir_cliente;
        this.email_cliente = email_cliente;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map