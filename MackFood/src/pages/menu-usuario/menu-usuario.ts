import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ProdutosPage } from '../produtos/produtos';
import { RestaurantesPage } from '../restaurantes/restaurantes';

import { PedidosPage } from '../pedidos/pedidos';

@IonicPage()
@Component({
  selector: 'page-menu-usuario',
  templateUrl: 'menu-usuario.html'
})
export class MenuUsuarioPage {

  restaurantesRoot = RestaurantesPage
  pedidosRoot = PedidosPage


  constructor() {}

}
