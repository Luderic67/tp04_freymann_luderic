import { Component } from '@angular/core';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
  products: Product[] = [];

  setList(list: Product[]) {
    this.products = list;
  }
}
