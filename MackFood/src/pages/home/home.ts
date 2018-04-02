import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MenuPage } from '../menu/menu';
import { RegistrarPage } from '../registrar/registrar';
import { ConsultaProvider } from './../../providers/consulta/consulta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: FormGroup;

  constructor(public navCtrl: NavController,
    private consultaProvider: ConsultaProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signInUser() {
    console.log(this.user.value);

    this.consultaProvider.validaUsuario(this.user.value).subscribe(
      res => {
        console.log(res);
        this.navCtrl.setRoot(MenuPage);
      },
      err => {
        console.log(err);
        this.presentAlert(err._body);
      }
    )
  }

  signUpUser() {
    this.navCtrl.push(RegistrarPage);
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

}
