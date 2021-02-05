import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M8Page } from './m8.page';

const routes: Routes = [
  {
    path: '',
    component: M8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M8PageRoutingModule {}
