import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpmPage } from './upm.page';

const routes: Routes = [
  {
    path: '',
    component: UpmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpmPageRoutingModule {}
