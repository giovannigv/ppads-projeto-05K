import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsultaProvider {

  private headers: Headers;
  private options: RequestOptions;
  private api: string;

  constructor(
    private http: Http
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    this.api = 'https://mackfood-api.herokuapp.com/api/'
  }

  validaUsuario(userData, p) {
    this.headers.append('Authorization', `Basic ${btoa(userData.username + ':' + userData.password)}`);
    return this.http
      .get(`${this.api}${p}`, this.options)
      .map(this.extractData);
  }

  consultaAnything(p) {
    console.log(p);
    console.log(this.headers);
    return this.http
      .get(`${this.api}${p}`, this.options)
      .map(this.extractData);
  }

  addTokenToHeader(t) {
    this.headers.delete('Authorization');
    this.headers.append('x-access-token', `${t.token}`);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}
