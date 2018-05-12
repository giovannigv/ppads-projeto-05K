import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  private token: any;
  private prodSelc: any;
  private restSelc: any;


  constructor() {
    console.log('Hello DataProvider Provider');
  }

  getProdSelc() {
    return this.prodSelc;
  }

  getRestSelc() {
    return this.restSelc;
  }

  getToken() {
    return this.token;
  }

  setProdSelc(obj) {
    console.log(obj);
    this.prodSelc = obj;
  }

  setRestSelc(obj) {
    console.log(obj);
    this.restSelc = obj;
  }

  setToken(obj) {
    console.log(obj);
    this.token = obj;
  }

}
