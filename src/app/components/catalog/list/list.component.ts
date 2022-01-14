import { Component, Input } from '@angular/core';
import { CartProduct } from 'shared/models/cartProduct';
import { Product } from 'shared/models/product';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() products: any = [];
  @Input() isDeletable!: boolean;

  getProduct(product: Product | CartProduct): Product {
    if (product instanceof CartProduct) {
      return product.product;
    } else {
      return product;
    }
  }

  getQuantity(product: Product | CartProduct): number | null {
    if (product instanceof CartProduct) {
      return product.quantity;
    } else {
      return null;
    }
  }
}
