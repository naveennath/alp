import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S32PageRoutingModule } from './s32-routing.module';

import { S32Page } from './s32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S32PageRoutingModule
  ],
  declarations: [S32Page]
})
export class S32PageModule {}
