import { Injectable } from '@angular/core';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { AddProduct, RemoveProduct } from 'shared/actions/product.action';
import { Product } from 'shared/models/product';
import { ProductsStateModel } from './products-state-model';

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductState {
  @Selector()
  static getProductsLength(state: ProductsStateModel): number {
    return state.products.length;
  }

  @Selector()
  static getProducts(state: ProductsStateModel): Product[] {
    return state.products;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    patchState({
      products: [...state.products, payload],
    });
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: RemoveProduct
  ) {
    const state = getState();
    patchState({
      products: [
        ...state.products.filter((product) => product.id != payload.id),
      ],
    });
  }
}
