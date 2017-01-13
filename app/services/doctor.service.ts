import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DoctorService{
    http: Http;
    endpoint_url: string = "http://localhost/api_cmo/doctores";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllDoctores(){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }

    getDoctoresByDetails(detalle:string){
        return this.http.get(this.endpoint_url + '/' + detalle).map(res => res.json());
    }

    postDoctor(cve,nom,ap1,ap2,fechanac,tel,email,dir){
        let body = JSON.stringify({"cve_doctor":cve,"nom_doctor": nom,"ap1_doctor":ap1,"ap2_doctor":ap2,
        "fecha_nac_doctor":fechanac,"tel_doctor":tel,"email_doctor":email,"dir_doctor":dir});
        let headers = new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin','http://127.0.0.1/');
        headers.append('Access-Control-Allow-Methods','POST');
        headers.append('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
        let options = new RequestOptions({headers: headers});
        options.headers;
        return this.http.post(this.endpoint_url, body, options)
            .map((response: Response) =>{
                if(response.json().cve_doctor!= null){
                    return true;
                } else {
                    return false;
                }
            })
    }

    modificarDoctor(cve,nom,ap1,ap2,fechanac,tel,email,dir){
        let body = JSON.stringify({"cve_doctor":cve,"nom_doctor": nom,"ap1_doctor":ap1,"ap2_doctor":ap2,
        "fecha_nac_doctor":fechanac,"tel_doctor":tel,"email_doctor":email,"dir_doctor":dir});
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



