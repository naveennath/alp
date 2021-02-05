import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { A16PageRoutingModule } from './a16-routing.module';

import { A16Page } from './a16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    A16PageRoutingModule
  ],
  declarations: [A16Page]
})
export class A16PageModule {}
