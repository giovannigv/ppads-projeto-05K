import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  singInUser(){
    this.navCtrl.setRoot(MenuPage);
  }

  signUpUser(){
    this.navCtrl.push(RegistrarPage);
  }
}
