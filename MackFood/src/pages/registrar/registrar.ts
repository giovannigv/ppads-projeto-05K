import { Component } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HomePage } from './../home/home';
import { CadastroProvider } from './../../providers/cadastro/cadastro';
import { RegistraLanchonetePage } from '../registra-lanchonete/registra-lanchonete'

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  private userCad: FormGroup;
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cadastroProvider: CadastroProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({
      content: 'Cadastrando...'
    });
  }

  ngOnInit() {
    this.userCad = this.fb.group({
      type: ['user'],
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.userCad.value);
    this.loading.present();
    this.cadastroProvider.cadastraUser(this.userCad.value, '/api/users').subscribe(
      res => {
        this.loading.dismiss();
        console.log(res);
        setTimeout(() => this.presentAlert('SUCESSO :)', 'Cadastrado com Sucesso!!!'), 100);
        this.navCtrl.setRoot(HomePage);
      },
      err => {
        this.loading.dismiss();
        console.log(err);
        this.presentAlert('Ops... Temos um problema', err._body);
      }
    )
  }
  //TODO: Colocar um loading quando estiver mandando a informaçao

  signLanchonete() {
    this.navCtrl.push(RegistraLanchonetePage);
  }

  presentAlert(title: string, errorMsg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: errorMsg,
      buttons: [{
        text: 'Ok',
        role: 'Ok'
      }]
    });
    alert.present();
  }

}
