import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultaProvider } from './../../providers/consulta/consulta';
import { DataProvider } from '../../providers/data/data';
import { NovoProdutoPage } from '../novo-produto/novo-produto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  private t: any;
  private produtos = [];

  constructor(
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.t = this.dataProvider.getToken();
    this.consultaProvider.consultaAnything(`restaurantes/${this.t.id}/produtos`).subscribe(
      res => {console.log(res); this.produtos = res.produtos}
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage opa...');
  }

  addProduto(){
    this.navCtrl.push(NovoProdutoPage);
  }

}
