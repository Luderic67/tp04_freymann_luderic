import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/Item';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Output() setList = new EventEmitter();

  searchbarForm: FormGroup;
  filters: string[] = ['Most expensive', 'Cheapest', 'A - Z', 'Z - A'];
  subscription: Subscription | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService
  ) {
    this.searchbarForm = this.formBuilder.group({
      research: [''],
      filter: [''],
    });
  }

  updateList(list: Item[]) {
    this.setList.emit(list);
  }

  ngOnInit(): void {
    this.subscription = this.listService.getList().subscribe((list: Item[]) => {
      this.updateList(list);
    });
  }

  handleResearch(): void {
    this.subscription = this.listService.getList().subscribe((list: Item[]) => {
      if (this.searchbarForm.value.filter === 'Most expensive') {
        list = list.sort((a, b) => b.price - a.price);
      } else if (this.searchbarForm.value.filter === 'Cheapest') {
        list = list.sort((a, b) => a.price - b.price);
      } else if (this.searchbarForm.value.filter === 'A - Z') {
        list = list.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (this.searchbarForm.value.filter === 'Z - A') {
        list = list.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
      }

      if (this.searchbarForm.value.research) {
        list = list.filter((item: Item) => {
          console.log('filter');
          return item.name
            .toLowerCase()
            .includes(this.searchbarForm.value.research.toLowerCase());
        });
      }

      this.updateList(list);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
