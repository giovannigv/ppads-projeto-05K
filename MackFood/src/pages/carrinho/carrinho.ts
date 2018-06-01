import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  private carrinho = [];

  constructor(
    private dataProvider: DataProvider,
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.carrinho = this.dataProvider.getCart();
    console.log(this.carrinho);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

}
