import { Component } from '@angular/core';
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  products: Product[] = [];

  setList(list: Product[]) {
    this.products = list;
  }
}
