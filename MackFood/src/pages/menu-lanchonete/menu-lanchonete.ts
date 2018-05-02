import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { SolicitacoesPage } from '../solicitacoes/solicitacoes';
import { ProdutosPage } from '../produtos/produtos';

/**
 * Generated class for the MenuLanchonetePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-lanchonete',
  templateUrl: 'menu-lanchonete.html'
})
export class MenuLanchonetePage {

  solicitacoesRoot = SolicitacoesPage
  produtosRoot = ProdutosPage


  constructor() {}

}
