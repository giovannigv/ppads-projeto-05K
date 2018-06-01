import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  private cart = [];
  private pedSelc: any;
  private prodSelc: any;
  private restSelc: any;
  private token: any;

  constructor() { }

  getCart() {
    return this.cart;
  }

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

  setCart(obj) {
    console.log(obj);
    this.cart.push(obj);
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
