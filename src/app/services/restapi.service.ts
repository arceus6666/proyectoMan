import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private url: string;
  valor: string;
  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:9000';
  }
  public getGlobal<Object>(urlMetodo: string, token: string, param: string) {
    console.log(this.url + urlMetodo)
    return this._http.get<Object>(this.url + urlMetodo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('token', token),
      params: new HttpParams().set('param', param)
    });
  }
  public postGlobal<Object>(objeto: any, url: string, token: string) {
    this.valor = JSON.stringify(objeto);
     return this._http.post<Object>(this.url + url, this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('token', token)
    });
  }
  public deleteGlobal<Object>(codigo: string, url: string, token: string) {
    return this._http.delete<Object>(this.url + url + codigo, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('token', token)
    });
  }
  public putGlobal<Object>(objeto: any, url: string, token: string) {
    this.valor = JSON.stringify(objeto);
    return this._http.put<Object>(this.url + url, this.valor, {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('token', token)
    });
  }

}
