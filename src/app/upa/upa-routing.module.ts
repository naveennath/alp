import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpaPage } from './upa.page';

const routes: Routes = [
  {
    path: '',
    component: UpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpaPageRoutingModule {}
