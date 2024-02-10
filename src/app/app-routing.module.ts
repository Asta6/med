import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'index1',
    loadChildren: () => import('./index1/index1.module').then( m => m.Index1PageModule)
  },
  {
    path: 'principale',
    loadChildren: () => import('./principale/principale.module').then( m => m.PrincipalePageModule)
  },
  {
    path: 'index0',
    loadChildren: () => import('./index0/index0.module').then( m => m.Index0PageModule)
  },
  {
    path: 'validation',
    loadChildren: () => import('./validation/validation.module').then( m => m.ValidationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
