import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A32PageRoutingModule } from './a32-routing.module';

import { A32Page } from './a32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A32PageRoutingModule
  ],
  declarations: [A32Page]
})
export class A32PageModule {}
