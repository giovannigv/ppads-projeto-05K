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

  constructor(public http: Http) {
    console.log('Hello ConsultaProvider Provider');
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  validaUsuario(userData) {

    console.log(userData);

    let html = `https://api-mackfood.herokuapp.com/api/token`;

    this.headers.append('Authorization', `Basic ${btoa(userData.username + ':' + userData.password)}`);
    return this.http
      .get(html, this.options)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}
