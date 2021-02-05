import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { A32Page } from './a32.page';

const routes: Routes = [
  {
    path: '',
    component: A32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A32PageRoutingModule {}
