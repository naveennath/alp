import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D8Page } from './d8.page';

const routes: Routes = [
  {
    path: '',
    component: D8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D8PageRoutingModule {}
