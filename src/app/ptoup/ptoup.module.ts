import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PtoupPageRoutingModule } from './ptoup-routing.module';

import { PtoupPage } from './ptoup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PtoupPageRoutingModule
  ],
  declarations: [PtoupPage]
})
export class PtoupPageModule {}
