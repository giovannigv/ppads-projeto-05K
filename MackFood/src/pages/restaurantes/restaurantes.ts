import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CardapioPage } from '../cardapio/cardapio';

/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantesPage');
  }

  doClick() {
    this.menuCtrl.open();
  }
  teste() {
    console.log("foi?");
    this.navCtrl.push(CardapioPage);
  }
}
