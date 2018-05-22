import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Observable } from 'rxjs/Observable';

import { DataProvider } from './../data/data';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CadastroProvider {

  private headers: Headers;
  private options: RequestOptions;
  private api: string;

  constructor(
    private dataProvider: DataProvider,
    private http: Http
  ) {
    this.addTokenToHeader(this.dataProvider.getToken());
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    this.api = 'https://mackfood-api.herokuapp.com/api/';
  }

  cadastraUser(userCadData, p) {
    return this.http
      .post(`${this.api}${p}`, userCadData, this.options)
      .map(this.extractData);

  }

  cadastraAnything(userCadData, p) {
    console.log(userCadData);
    return this.http
      .post(`${this.api}${p}`, userCadData, this.options)
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
