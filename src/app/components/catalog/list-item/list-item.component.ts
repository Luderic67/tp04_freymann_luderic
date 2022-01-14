import { Component, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  AddProduct,
  RemoveProduct,
  SetCart,
} from 'shared/actions/product.action';
import { CartProduct } from 'shared/models/cartProduct';
import { Product } from 'shared/models/product';
import { ProductState } from 'shared/states/products-state';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Select(ProductState.getProducts) products$!: Observable<Product[]>;
  @Input() quantity!: number | null;
  @Input() product!: Product;
  @Input() isDeletable!: boolean;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(new AddProduct(this.product));
  }

  removeFromCart() {
    this.store.dispatch(new RemoveProduct(this.product));
  }
}
