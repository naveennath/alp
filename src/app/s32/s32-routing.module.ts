import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S32Page } from './s32.page';

const routes: Routes = [
  {
    path: '',
    component: S32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S32PageRoutingModule {}
