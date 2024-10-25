import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IReqLogin } from '../models/IReqLogin.interfase'
import { IResLogin } from '../models/IResLogin.interfase';
import { Observable } from 'rxjs';
import { IEvento } from '../models/IEvento.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlEndpoint: string = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  login(datos: IReqLogin):Observable<IResLogin>{
    let url = `${this.urlEndpoint}/user/login`;
    return this.http.post<IResLogin>(url, datos);
  }

  eventos():Observable<IEvento[]>{
    let url = `${this.urlEndpoint}/evento/lista`;
    return this.http.get<IEvento[]>(url);
  }

  // eventos():Observable<IEvento>{
  //   let url = `${this.urlEndpoint}/evento/lista`;
  //   return this.http.get<IEvento>(url);
  // }
}
