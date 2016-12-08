import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ClienteService{
    http: Http;
    endpoint_url: string = "http://localhost/api_cmo/clientes";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllClientes(){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

    postCliente(nom,ap1,ap2,fechanac,fechahoy,tel,dir){
        let body = JSON.stringify({"nom_cliente": nom,"ap1_cliente":ap1,"ap2_cliente":ap2,
        "fecha_nac_cliente":fechanac,"fecha_reg_cliente":fechahoy,"tel_cliente":tel,"dir_cliente":dir});
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1/');
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) =>{
                if(response.json().id!= null){
                    return true;
                } else {
                    return false;
                }
            })
    }

    modificarCliente(id,nom,ap1,ap2,fechanac,fechahoy,tel,dir){
        let body = JSON.stringify({"nom_cliente": nom,"ap1_cliente":ap1,"ap2_cliente":ap2,
        "fecha_nac_cliente":fechanac,"fecha_reg_cliente":fechahoy,"tel_cliente":tel,"dir_cliente":dir});
        let headers = new Headers({ 'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods','PUT');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.put(this.endpoint_url + '/' + id, body, options)
            .map((response: Response) => {
                if(response.json().status){
                    return true;
                } else {
                    return false;
                }
            })
    }
}



