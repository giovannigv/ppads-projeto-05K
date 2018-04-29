import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantesPage } from './restaurantes';

@NgModule({
  declarations: [
    RestaurantesPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantesPage),
  ],
})
export class RestaurantesPageModule {}
