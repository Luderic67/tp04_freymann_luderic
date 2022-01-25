import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AddProduct } from 'shared/actions/product.action';
import { Product } from 'shared/models/product';
import { ListService } from 'src/app/services/list.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product!: Product;
  id!: string;
  error!: boolean;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private store: Store,
    private location: Location
  ) {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.listService
      .getList()
      .subscribe((list: Product[]) => {
        const selectedProduct = list.find((product) => product.id === this.id);
        if (selectedProduct) {
          this.product = selectedProduct;
        } else {
          this.error = true;
        }
      });
  }

  addToCart() {
    this.store.dispatch(new AddProduct(this.product));
  }

  back() {
    this.location.back();
  }
}
