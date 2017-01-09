import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService{
    http: Http;
    endpoint_url: string = "http://localhost/api_cmo/login";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllUsuarios(){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

    getUsuario(cve,lacontra){
        return this.http.get(this.endpoint_url + '/' + cve + '/' + lacontra).map(res => res.json());
    }

    postUsuario(cve,tipo,lacontra){
        let body = JSON.stringify({"cve_usuario":cve,"tipo_usuario": tipo,"password_usuario":lacontra});
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1/');
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) =>{
                if(response.json().id_login!= null){
                    return true;
                } else {
                    return false;
                }
            })
    }

    modificarUsuario(cve,tipo,lacontra){
        let body = JSON.stringify({"cve_usuario":cve,"tipo_usuario": tipo,"password_usuario":lacontra});
        let headers = new Headers({ 'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1:12345/');
        headers.append('Access-Control-Allow-Methods','PUT');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.put(this.endpoint_url + '/' + cve, body, options)
            .map((response: Response) => {
                if(response.json().status){
                    return true;
                } else {
                    return false;
                }
            })
    }
}



