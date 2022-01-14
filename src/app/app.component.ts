import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetAddress } from 'shared/actions/address.action';
import { SetCart } from 'shared/actions/product.action';
import { Address } from 'shared/models/address';
import { CartProduct } from 'shared/models/cartProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'luderic-freymann-app';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new SetAddress(this.getLocalAddresses()));
    this.store.dispatch(new SetCart(this.getLocalCart()));
  }

  getLocalAddresses(): Address[] {
    const localAddresses = localStorage.getItem('addresses');
    if (localAddresses) {
      return JSON.parse(localAddresses);
    }
    return [];
  }

  getLocalCart(): CartProduct[] {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      return JSON.parse(localCart);
    }

    return [];
  }
}
