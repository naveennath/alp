import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpaPageRoutingModule } from './upa-routing.module';

import { UpaPage } from './upa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpaPageRoutingModule
  ],
  declarations: [UpaPage]
})
export class UpaPageModule {}
