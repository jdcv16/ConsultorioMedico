import { Component } from '@angular/core';
import { Login } from '../logins';
import { LoginService } from '../services/index';

@Component({
selector: 'el-login',
templateUrl: 'app/logins/login.component.html'
})
export class LoginComponent {
    usuario : Array<Login>;
    modelo: any = {};
    constructor(private _loginservice: LoginService){
        this._loginservice = _loginservice;
    }
    clavedeusuario: string = localStorage.getItem('cveu');
    tipodeusuario: string = localStorage.getItem('tipou');
    passworddeusuario:string = localStorage.getItem('passu');

    hacerlogin(){
        if(this.modelo.usuario != undefined && this.modelo.clave != undefined)
        {
            this._loginservice.getUsuario(this.modelo.usuario,this.modelo.clave).subscribe(
                data => {
                    this.usuario = data;
                    localStorage.setItem("cveu",JSON.stringify(this.usuario['cve_usuario']));
                    localStorage.setItem("tipou",JSON.stringify(this.usuario['tipo_usuario']));
                    localStorage.setItem("passu",JSON.stringify(this.usuario['password_usuario']));
                    alert("Bienvenido:");
                },
                error => alert("Error: " + error)
            );
        }
        else{
            alert("Ingrese el nombre de usuario y/o contraseña");
        }
    }
}