import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GtobPageRoutingModule } from './gtob-routing.module';

import { GtobPage } from './gtob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GtobPageRoutingModule
  ],
  declarations: [GtobPage]
})
export class GtobPageModule {}
