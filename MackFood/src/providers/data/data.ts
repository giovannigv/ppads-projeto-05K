import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  private token: any;
  private prodSelc: any;
  private pedSelc: any;
  private restSelc: any;

  constructor() { }

  getProdSelc() {
    return this.prodSelc;
  }

  getPedSelc() {
    return this.pedSelc;
  }

  getRestSelc() {
    return this.restSelc;
  }

  getToken() {
    return this.token;
  }

  setPedSelc(obj) {
    console.log(obj);
    this.pedSelc = obj;
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
