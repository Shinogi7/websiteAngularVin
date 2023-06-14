import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from '.././detail/detail.component';
import { ProduitComponent } from './produit.component';

const routes: Routes = [
  {
    path:'',
    component:ProduitComponent
  },
  {
    path:'detail',
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
