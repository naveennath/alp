import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D16PageRoutingModule } from './d16-routing.module';

import { D16Page } from './d16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D16PageRoutingModule
  ],
  declarations: [D16Page]
})
export class D16PageModule {}
