import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'catalog', component: ListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CatalogModule {}
