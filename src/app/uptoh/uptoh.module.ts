import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UptohPageRoutingModule } from './uptoh-routing.module';

import { UptohPage } from './uptoh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UptohPageRoutingModule
  ],
  declarations: [UptohPage]
})
export class UptohPageModule {}
