import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registra-lanchonete',
  templateUrl: 'registra-lanchonete.html',
})
export class RegistraLanchonetePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistraLanchonetePage');
  }
  signLanchonete(){
    
  }

}
