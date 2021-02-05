import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'a16',
    loadChildren: () => import('./a16/a16.module').then( m => m.A16PageModule)
  },
  {
    path: 's16',
    loadChildren: () => import('./s16/s16.module').then( m => m.S16PageModule)
  },
  {
    path: 'm8',
    loadChildren: () => import('./m8/m8.module').then( m => m.M8PageModule)
  },
  {
    path: 'm16',
    loadChildren: () => import('./m16/m16.module').then( m => m.M16PageModule)
  },
  {
    path: 'aa16',
    loadChildren: () => import('./aa16/aa16.module').then( m => m.Aa16PageModule)
  },
  {
    path: 'a32',
    loadChildren: () => import('./a32/a32.module').then( m => m.A32PageModule)
  },
  {
    path: 's32',
    loadChildren: () => import('./s32/s32.module').then( m => m.S32PageModule)
  },
  {
    path: 'd8',
    loadChildren: () => import('./d8/d8.module').then( m => m.D8PageModule)
  },
  {
    path: 'd16',
    loadChildren: () => import('./d16/d16.module').then( m => m.D16PageModule)
  },
  {
    path: 'btog',
    loadChildren: () => import('./btog/btog.module').then( m => m.BtogPageModule)
  },
  {
    path: 'gtob',
    loadChildren: () => import('./gtob/gtob.module').then( m => m.GtobPageModule)
  },
  {
    path: 'uptoh',
    loadChildren: () => import('./uptoh/uptoh.module').then( m => m.UptohPageModule)
  },
  {
    path: 'm32',
    loadChildren: () => import('./m32/m32.module').then( m => m.M32PageModule)
  },
  {
    path: 'ptoup',
    loadChildren: () => import('./ptoup/ptoup.module').then( m => m.PtoupPageModule)
  },
  {
    path: 'uptop',
    loadChildren: () => import('./uptop/uptop.module').then( m => m.UptopPageModule)
  },
  {
    path: 'sort',
    loadChildren: () => import('./sort/sort.module').then( m => m.SortPageModule)
  },
  {
    path: 'mat',
    loadChildren: () => import('./mat/mat.module').then( m => m.MatPageModule)
  },
  {
    path: 'upa',
    loadChildren: () => import('./upa/upa.module').then( m => m.UpaPageModule)
  },
  {
    path: 'upm',
    loadChildren: () => import('./upm/upm.module').then( m => m.UpmPageModule)
  },
  {
    path: 'pm',
    loadChildren: () => import('./pm/pm.module').then( m => m.PmPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
