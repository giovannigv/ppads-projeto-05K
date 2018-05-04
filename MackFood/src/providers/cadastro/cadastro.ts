import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CadastroProvider {

  private headers: Headers;
  private options: RequestOptions;
  private api: string;

  constructor(public http: Http) {
    console.log('Hello CadastroProvider Provider');
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    this.api = 'https://api-mackfood.herokuapp.com';
  }

  cadastraUser(userCadData, opc) {
    console.log(userCadData);
    console.log(this.options);

    return this.http
      .post(`${this.api}${opc}`, userCadData, this.options)
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
