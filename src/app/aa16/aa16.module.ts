import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Aa16PageRoutingModule } from './aa16-routing.module';

import { Aa16Page } from './aa16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Aa16PageRoutingModule
  ],
  declarations: [Aa16Page]
})
export class Aa16PageModule {}
