import { MenuLanchonetePage } from './../menu-lanchonete/menu-lanchonete';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MenuPage } from '../menu/menu';
import { RegistrarPage } from '../registrar/registrar';
import { ConsultaProvider } from './../../providers/consulta/consulta';
import { MenuUsuarioPage } from '../menu-usuario/menu-usuario';
import { MenuLanchonetePage } from '../menu-lanchonete/menu-lanchonete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: FormGroup;
  private loading: any;

  constructor(public navCtrl: NavController,
    private consultaProvider: ConsultaProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({
      content: 'Cadastrando...'
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
    this.consultaProvider.validaUsuario(this.user.value).subscribe(
      res => {
        this.loading.dismiss();
        console.log(res);
        this.navCtrl.setRoot(MenuUsuarioPage);
      },
      err => {
        this.loading.dismiss();
        console.log(err);
        this.presentAlert(err._body);
      }
    )
  }

  signUpUser() {
    //this.navCtrl.push(RegistrarPage);
    this.navCtrl.setRoot(MenuUsuarioPage);
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
