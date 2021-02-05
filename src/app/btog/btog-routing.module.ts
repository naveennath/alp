import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtogPage } from './btog.page';

const routes: Routes = [
  {
    path: '',
    component: BtogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BtogPageRoutingModule {}
