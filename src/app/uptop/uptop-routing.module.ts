import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UptopPage } from './uptop.page';

const routes: Routes = [
  {
    path: '',
    component: UptopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UptopPageRoutingModule {}
