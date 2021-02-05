import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UptohPage } from './uptoh.page';

const routes: Routes = [
  {
    path: '',
    component: UptohPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UptohPageRoutingModule {}
