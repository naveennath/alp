import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M16PageRoutingModule } from './m16-routing.module';

import { M16Page } from './m16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M16PageRoutingModule
  ],
  declarations: [M16Page]
})
export class M16PageModule {}
