import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroProvider } from '../../providers/cadastro/cadastro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the NovoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html',
})
export class NovoProdutoPage {

  private novProd: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private cadastroProvider: CadastroProvider,
              private fb: FormBuilder,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.novProd = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.novProd.value);
    this.cadastroProvider.cadastraUser(this.novProd.value).subscribe(
      res => {
        console.log(res);
        setTimeout(() => this.presentAlert('Novo Produto', this.novProd.value.nome+' = '+this.novProd.value.password ), 100);
        //this.navCtrl.setRoot(HomePage);
      },
      err => {
        console.log(err);
        this.presentAlert('Ops... Temos um problema', err._body);
      }
    )
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
