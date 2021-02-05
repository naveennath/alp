import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M16Page } from './m16.page';

const routes: Routes = [
  {
    path: '',
    component: M16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class M16PageRoutingModule {}
