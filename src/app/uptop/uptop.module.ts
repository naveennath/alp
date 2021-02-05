import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UptopPageRoutingModule } from './uptop-routing.module';

import { UptopPage } from './uptop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UptopPageRoutingModule
  ],
  declarations: [UptopPage]
})
export class UptopPageModule {}
