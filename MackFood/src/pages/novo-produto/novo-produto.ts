import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { DataProvider } from './../../providers/data/data';
import { ProdutosPage } from '../produtos/produtos';

@IonicPage()
@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html',
})
export class NovoProdutoPage {

  private novProd: FormGroup;
  private t: any;

  constructor(
    private alertCtrl: AlertController,
    private cadastroProvider: CadastroProvider,
    private dataProvider: DataProvider,
    private fb: FormBuilder,
    private navCtrl: NavController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.t = this.dataProvider.getToken();
    this.novProd = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      imagem_url: ['', [Validators.required]],
      preco: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.novProd.value);
    this.cadastroProvider.cadastraAnything(this.novProd.value, `restaurantes/${this.t.id}/produtos`)
      .subscribe(
        res => {
          console.log(res);
          setTimeout(() => this.presentAlert('Novo Produto', this.novProd.value.nome + ' = ' + this.novProd.value.password), 100);
          this.navCtrl.setRoot(ProdutosPage);
        },
        err => {
          console.log(err);
          this.presentAlert('Ops... Temos um problema', err._body);
        }
      );
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
