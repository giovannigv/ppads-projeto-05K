import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  private pedido = [];

  constructor(
    private dataProvider: DataProvider,
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.pedido.push(this.dataProvider.getPedSelc());
    console.log(this.pedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
