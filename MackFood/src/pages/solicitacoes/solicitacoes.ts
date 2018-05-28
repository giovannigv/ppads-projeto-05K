import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultaProvider } from './../../providers/consulta/consulta';
import { CardapioPage } from '../cardapio/cardapio';
import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-solicitacoes',
  templateUrl: 'solicitacoes.html',
})
export class SolicitacoesPage {

  private t: any;
  private pedidos = [];

  constructor(
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.t = this.dataProvider.getToken();
    console.log(this.t);
  }

  ionViewDidLoad() {
    this.consultaProvider.consultaAnything(`restaurantes/${this.t.id}/pedidos`).subscribe(
      res => {this.pedidos = res.pedidos; console.log(this.pedidos)} 
    );

  }

  teste() {
    console.log("foi?");
    this.navCtrl.push(CardapioPage);
  }
}
