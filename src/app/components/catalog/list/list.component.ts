import { Component } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  items: Item[] = [];

  setList(list: Item[]) {
    this.items = list;
  }
}
