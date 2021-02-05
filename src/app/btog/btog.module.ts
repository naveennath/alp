import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BtogPageRoutingModule } from './btog-routing.module';

import { BtogPage } from './btog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BtogPageRoutingModule
  ],
  declarations: [BtogPage]
})
export class BtogPageModule {}
