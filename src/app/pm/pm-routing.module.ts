import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PmPage } from './pm.page';

const routes: Routes = [
  {
    path: '',
    component: PmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PmPageRoutingModule {}
