import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuUsuarioPage } from './menu-usuario';

@NgModule({
  declarations: [
    MenuUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuUsuarioPage),
  ]
})
export class MenuUsuarioPageModule {}
