import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultaProvider } from './../../providers/consulta/consulta';
import { PedidoPage } from '../pedido/pedido';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage {

  private t: any;
  private pedidos = [];

  constructor(
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private navCtrl: NavController, 
    private navParams: NavParams)
     {
      this.t = this.dataProvider.getToken();
      console.log(this.t);
  }

  ionViewDidLoad() {
    this.consultaProvider.consultaAnything(`users/${this.t.id}/pedidos`).subscribe(
      res => {
        this.pedidos = res;
        console.log(this.pedidos);
      }
    );
  }

  teste(){
    console.log('oi')
    this.navCtrl.push(PedidoPage);
  }

}
