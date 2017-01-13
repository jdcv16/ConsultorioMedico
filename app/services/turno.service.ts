import {Injectable} from '@angular/core';
import {Http, Headers, Request, RequestOptions, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TurnoService{
    http: Http;
    endpoint_url: string = "http://localhost/api_cmo/turnos";
    headers: Headers;
    requestoptions: RequestOptions;

    constructor(http: Http){
        this.http = http;
    }

    getAllTurnos(){
        return this.http.get(this.endpoint_url).map(res => res.json());
    }
}



