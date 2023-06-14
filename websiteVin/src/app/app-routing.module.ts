import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProduitComponent } from './components/produit/produit.component';

const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'produit',
    component:ProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
