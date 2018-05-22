import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConsultaProvider } from './../../providers/consulta/consulta';
import { DataProvider } from './../../providers/data/data';
import { identifierModuleUrl } from '@angular/compiler';
import { MenuLanchonetePage } from '../menu-lanchonete/menu-lanchonete';
import { MenuPage } from '../menu/menu';
import { MenuUsuarioPage } from '../menu-usuario/menu-usuario';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: FormGroup;
  private loading: any;

  constructor(
    private alertCtrl: AlertController,
    private consultaProvider: ConsultaProvider,
    private dataProvider: DataProvider,
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController
  ) {
    this.loading = this.loadingCtrl.create({
      content: 'Acessando...'
    });
  }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signInUser() {
    console.log(this.user.value);
    this.loading.present();
    this.consultaProvider.validaUsuario(this.user.value, 'token').subscribe(
      res => {
        this.loading.dismiss();
        this.dataProvider.setToken(res);
        this.consultaProvider.addTokenToHeader(res);
        if (res.type === 'cliente') {
          this.navCtrl.setRoot(MenuUsuarioPage);
        } else if (res.type === 'restaurante') {
          this.navCtrl.setRoot(MenuLanchonetePage);
        } else if (res.type === 'admin') {
          console.log('Esse é Admin...');
        }
      },
      err => {
        this.loading.dismiss();
        console.log(err);
        this.presentAlert(err._body);
      }
    )
  }

  signUpUser() {
    this.navCtrl.push(RegistrarPage);
    // this.navCtrl.setRoot(MenuUsuarioPage);
  }

  presentAlert(errorMsg: string) {
    let alert = this.alertCtrl.create({
      title: 'Ops... Temos um problema',
      subTitle: errorMsg,
      buttons: [{
        text: 'Ok',
        role: 'Ok'
      }]
    });
    alert.present();
  }

  goku() {
    this.navCtrl.push(MenuLanchonetePage);
  }

}
