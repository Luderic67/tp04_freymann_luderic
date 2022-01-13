import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct } from 'shared/actions/product.action';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Input() product!: Product;
  @Input() isDeletable!: boolean;

  constructor(private store: Store) {}

  addToCart() {
    this.store.dispatch(new AddProduct(this.product));
  }
}
