import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M32Page } from './m32.page';

const routes: Routes = [
  {
    path: '',
    component: M32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M32PageRoutingModule {}
