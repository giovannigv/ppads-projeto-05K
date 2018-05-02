import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoProdutoPage } from './novo-produto';

@NgModule({
  declarations: [
    NovoProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoProdutoPage),
  ],
})
export class NovoProdutoPageModule {}
