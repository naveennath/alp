import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S16PageRoutingModule } from './s16-routing.module';

import { S16Page } from './s16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S16PageRoutingModule
  ],
  declarations: [S16Page]
})
export class S16PageModule {}
