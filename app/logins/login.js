"use strict";
var Login = (function () {
    function Login(id_login, cve_usuario, tipo_usuario, password_usuario) {
        this.id_login = id_login;
        this.cve_usuario = cve_usuario;
        this.tipo_usuario = tipo_usuario;
        this.password_usuario = password_usuario;
    }
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.js.map