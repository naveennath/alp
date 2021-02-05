import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D16Page } from './d16.page';

const routes: Routes = [
  {
    path: '',
    component: D16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D16PageRoutingModule {}
