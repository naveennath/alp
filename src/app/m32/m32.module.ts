import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { M32PageRoutingModule } from './m32-routing.module';

import { M32Page } from './m32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    M32PageRoutingModule
  ],
  declarations: [M32Page]
})
export class M32PageModule {}
