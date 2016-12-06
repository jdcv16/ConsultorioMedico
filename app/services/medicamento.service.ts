import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MedicamentoService{
    http: Http;
    endpoint_url: string = "http://localhost/api_cmo/medicamentos";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllMedicamentos(){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

    postMedicamento(nom,nom_gen,tipo_med){
        let body = JSON.stringify({"nom_medicamento": nom,"nom_generico":nom_gen,"tipo_medida":tipo_med});
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1/');
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) =>{
                if(response.json().id_medicamento != null){
                    return true;
                } else {
                    return false;
                }
            })
    }


    modificarMedicamento(id,nom, nom_gen, tipo_med){
        let body = JSON.stringify({"nom_medicamento": nom,"nom_generico":nom_gen, "tipo_medida":tipo_med});
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



