import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpmPageRoutingModule } from './upm-routing.module';

import { UpmPage } from './upm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpmPageRoutingModule
  ],
  declarations: [UpmPage]
})
export class UpmPageModule {}
