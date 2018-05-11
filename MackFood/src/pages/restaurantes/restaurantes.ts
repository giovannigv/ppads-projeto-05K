import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { CardapioPage } from '../cardapio/cardapio';
import { ConsultaProvider } from './../../providers/consulta/consulta';
import { DataProvider } from './../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  private t: any;
  private restaurants = [];

  constructor(
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
    this.t = this.dataProvider.getToken();
    this.consultaProvider.consultaAnything('restaurantes', this.t.token).subscribe(
      res => {
        this.restaurants = res.restaurants;
        console.log(this.restaurants);
      }
    );
  }

  doClick() {
    this.menuCtrl.open();
  }

  teste(obj) {
    this.dataProvider.setRestSelc(obj);
    this.navCtrl.push(CardapioPage);
  }
}
