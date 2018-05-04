import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-registra-lanchonete',
  templateUrl: 'registra-lanchonete.html',
})
export class RegistraLanchonetePage {

  private userCad: FormGroup;
  private loading: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cadastroProvider: CadastroProvider,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({
      content: 'Cadastrando...'
    }); }

  ngOnInit() {
    this.userCad = this.fb.group({
      type: ['comer'],
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.userCad.value);
    this.loading.present();
    this.cadastroProvider.cadastraUser(this.userCad.value).subscribe(
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
