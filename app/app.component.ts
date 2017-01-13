import { Component,OnInit } from '@angular/core';
import { Config } from './config.service';
import { Cliente, ClienteComponent, MostrarClientesComponent, AgregarClienteComponent, ModificarClienteComponent, ReporteClientesComponent} from './clientes';
import { Medida, MedidaComponent, ModificarMedidaComponent } from './medidas';
import { MedicamentoComponent, MostrarMedicamentosComponent,AgregarMedicamentoComponent, ModificarMedicamentoComponent} from './medicamentos';
import { MostrarServiciosComponent, AgregarServicioComponent } from './servicios';
import { AgregarDoctorComponent,MostrarDoctoresComponent,ReporteDoctoresComponent } from './doctores';
import { AgregarConsultorioComponent,MostrarConsultoriosComponent,AsignarConsultorioComponent,MostrarAsignacionesComponent } from './consultorios';
import { LoginComponent } from './logins';
import { DashboardComponent } from './dashboard';
import { LoginService } from './services/index';
import { Login } from './logins';
@Component({
selector: 'mi-app',
templateUrl: 'app/app.component.html',
styleUrls: ['app/app.component.css']
})
export class AppComponent {
    eseusuario: string;
    esacontra: string;
    clientes : Array<Cliente>;
    clienteSeleccionado: Cliente;
    usuario : Array<Login>;
    modelo: any = {};
    clavedeusuario: string;
    tipodeusuario: string;
    passworddeusuario:string;
    esdoctor: boolean;
    escliente: boolean;
    constructor(private _loginService: LoginService){
        this._loginService = _loginService;
    }

    onSelectCliente(cliente) {
        //console.log(JSON.stringify(cliente));
        this.clienteSeleccionado = cliente;
    }

     hacerlogin(){
         if(this.eseusuario != undefined && this.esacontra != undefined)
         {
             this._loginService.getUsuario(this.eseusuario,this.esacontra).subscribe(
                data => {
                    this.usuario = data;
                    localStorage.setItem("cveu",JSON.stringify(this.usuario['cve_usuario']));
                    localStorage.setItem("tipou",JSON.stringify(this.usuario['tipo_usuario']));
                    localStorage.setItem("passu",JSON.stringify(this.usuario['password_usuario']));
                    if(localStorage.getItem('tipou')!="undefined")
                    {
                        this.clavedeusuario = localStorage.getItem('cveu');
                        this.tipodeusuario = localStorage.getItem('tipou');
                        this.passworddeusuario = localStorage.getItem('passu');
                        if(localStorage.getItem('tipou')=='"CLIENTE"')
                        {
                            this.escliente=true;
                        }
                        else{
                            this.escliente=false;
                        }
                        if(localStorage.getItem('tipou')=='"DOCTOR"')
                        {
                            this.esdoctor=true;
                        }
                        else{
                            this.esdoctor=false;
                        }
                        this.eseusuario="";
                        this.esacontra="";
                    }
                    else{
                        localStorage.removeItem('cveu');
                        localStorage.removeItem('tipou');
                        localStorage.removeItem('passu');
                        this.clavedeusuario = undefined;
                        this.tipodeusuario = undefined;
                        this.passworddeusuario = undefined;
                        this.escliente=false;
                        this.esdoctor=false;
                        this.OnInit();
                        alert("Error: Usuario o Contraseña Incorrecta");
                    }
                    
                },
                error => alert("Error: " + error)
            );
         }
         else
         {
             alert(" Ingrese Usuario Y Contraseña");
         }
    }

    cerrarsesion(){
        localStorage.removeItem('cveu');
        localStorage.removeItem('tipou');
        localStorage.removeItem('passu');
        this.clavedeusuario = undefined;
        this.tipodeusuario = undefined;
        this.passworddeusuario = undefined;
        this.escliente=false;
        this.esdoctor=false;
        this.OnInit();
    }

    OnInit(){
        
    }
}