import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D8PageRoutingModule } from './d8-routing.module';

import { D8Page } from './d8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D8PageRoutingModule
  ],
  declarations: [D8Page]
})
export class D8PageModule {}
