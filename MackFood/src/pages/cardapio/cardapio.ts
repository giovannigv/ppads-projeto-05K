import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConsultaProvider } from './../../providers/consulta/consulta';
import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  private t: any;
  private cardapio = [];
  public restSelc: any;

  constructor(
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.restSelc = this.dataProvider.getRestSelc();
   }

  ionViewDidLoad() {
    this.t = this.dataProvider.getToken();
    this.consultaProvider.consultaAnything(`restaurantes/${this.restSelc.id}/produtos`, this.t.token).subscribe(
      res => {
        console.log(res);
        this.cardapio = res.produtos;
        console.log(this.cardapio);
      }
    );
  }



}
