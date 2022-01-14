import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { ProductState } from 'shared/states/products-state';
import { Observable } from 'rxjs';
import { Product } from 'shared/models/product';
import { Store } from '@ngxs/store';
import { RemoveAllProduct } from 'shared/actions/product.action';
import { CartProduct } from 'shared/models/cartProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Select(ProductState.getProducts) products$!: Observable<CartProduct[]>;
  @Select(ProductState.getTotalPrice) total$!: Observable<number>;

  constructor(private store: Store) {}

  removeAll() {
    this.store.dispatch(new RemoveAllProduct());
  }
}
