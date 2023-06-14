import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProduitComponent } from './components/produit/produit.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'produit',
    loadChildren:() => import('./components/produit/produit.module').then(m=>m.ProduitModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
