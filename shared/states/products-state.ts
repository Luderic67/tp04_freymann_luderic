import { Injectable } from '@angular/core';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddProduct,
  RemoveAllProduct,
  RemoveProduct,
} from 'shared/actions/product.action';
import { CartProduct } from 'shared/models/cartProduct';
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
    return state.products.reduce(
      (total: number, currentValue: CartProduct) =>
        total + 1 * currentValue.quantity,
      0
    );
  }

  @Selector()
  static getProducts(state: ProductsStateModel): CartProduct[] {
    return state.products;
  }

  @Selector()
  static getTotalPrice(state: ProductsStateModel): number {
    const sum: number = state.products.reduce(
      (total: number, currentValue: CartProduct) =>
        total + currentValue.product.price * currentValue.quantity,
      0
    );
    return Math.round(sum * 100) / 100;
  }

  alreadyExist(state: ProductsStateModel, _product: Product): CartProduct {
    let product!: CartProduct;
    state.products.forEach((p) => {
      if (p.product.id === _product.id) product = p;
    });
    return product;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    const cartProduct: CartProduct = this.alreadyExist(state, payload);

    if (cartProduct) {
      cartProduct.quantity++;
      patchState({
        products: [...state.products],
      });
      console.log(state.products);
    } else {
      let newCartProduct = new CartProduct(payload, 1);
      patchState({
        products: [...state.products, newCartProduct],
      });
    }
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<ProductsStateModel>,
    { payload }: RemoveProduct
  ) {
    const state = getState();
    const cartProduct: CartProduct = this.alreadyExist(state, payload);

    if (cartProduct && cartProduct.quantity == 1) {
      patchState({
        products: state.products.filter(
          (cartProdu) => cartProdu.product.id !== payload.id
        ),
      });
    } else if (cartProduct && cartProduct.quantity > 1) {
      cartProduct.quantity--;
      patchState({
        products: state.products,
      });
    }
  }

  @Action(RemoveAllProduct)
  removeAll({ getState, patchState }: StateContext<ProductsStateModel>) {
    patchState({
      products: [],
    });
  }
}
