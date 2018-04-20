import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MenuUsuarioPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-usuario',
  templateUrl: 'menu-usuario.html'
})
export class MenuUsuarioPage {

  configuracaoRoot = 'ConfiguracaoPage'
  menuRoot = 'MenuPage'
  //PacocaRoot = 'PacocaPage'


  constructor(public navCtrl: NavController) {}

}
