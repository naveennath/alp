import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M8PageRoutingModule } from './m8-routing.module';

import { M8Page } from './m8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M8PageRoutingModule
  ],
  declarations: [M8Page]
})
export class M8PageModule {}
