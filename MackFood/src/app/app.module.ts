import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { RegistrarPage } from '../pages/registrar/registrar';
import { ConsultaProvider } from '../providers/consulta/consulta';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { RegistraLanchonetePage } from '../pages/registra-lanchonete/registra-lanchonete';
import { MenuUsuarioPage } from '../pages/menu-usuario/menu-usuario';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { RestaurantesPage } from '../pages/restaurantes/restaurantes';
import { MenuLanchonetePage } from '../pages/menu-lanchonete/menu-lanchonete';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SolicitacoesPage } from '../pages/solicitacoes/solicitacoes';
import { NovoProdutoPage } from '../pages/novo-produto/novo-produto';
import { CardapioPage } from '../pages/cardapio/cardapio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    RegistrarPage,
    RegistraLanchonetePage,
    MenuUsuarioPage,
    MenuLanchonetePage,
    PedidosPage,
    RestaurantesPage,
    ProdutosPage,
    SolicitacoesPage,
    NovoProdutoPage,
    CardapioPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    RegistrarPage,
    RegistraLanchonetePage,
    MenuUsuarioPage,
    MenuLanchonetePage,
    PedidosPage,
    RestaurantesPage,
    ProdutosPage,
    SolicitacoesPage,
    NovoProdutoPage,
    CardapioPage
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsultaProvider,
    CadastroProvider
  ]
})
export class AppModule {}
