import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GtobPage } from './gtob.page';

const routes: Routes = [
  {
    path: '',
    component: GtobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GtobPageRoutingModule {}
