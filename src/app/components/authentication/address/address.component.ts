import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import {
  AddAddress,
  RemoveAddress,
  SetAddress,
} from 'shared/actions/address.action';
import { Address } from 'shared/models/address';
import { AddressState } from 'shared/states/address-state';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent {
  @Select(AddressState.getAddresses) addresses$!: Observable<Address[]>;
  @Select(AddressState.getAddressesLength)
  addressesLength$!: Observable<number>;
  @Select(AddressState.getNextId) nextId$!: Observable<Guid>;

  locations: string[] = [
    'France',
    'Germany',
    'United Kingdom',
    'Spain',
    'Italy',
  ];
  addressesForm: any;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.addressesForm = this.formBuilder.group({
      street: ['', Validators.required],
      zip_code: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  handleSubmit(): void {
    if (this.addressesForm.dirty && this.addressesForm.valid) {
      const addr = new Address();
      const subscription = this.nextId$.subscribe((id: Guid) => {
        addr.id = id.toJSON().value;
      });
      addr.street = this.addressesForm.value.street;
      addr.zip_code = this.addressesForm.value.zip_code;
      addr.city = this.addressesForm.value.city;
      addr.country = this.addressesForm.value.country;

      this.addAddress(addr);
      subscription.unsubscribe();
    } else {
      // Toggle errors
      Object.keys(this.addressesForm.controls).forEach((field) => {
        const control = this.addressesForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  addAddress(_address: Address) {
    this.store.dispatch(new AddAddress(_address));
  }

  removeAddress(_address: Address) {
    this.store.dispatch(new RemoveAddress(_address));
  }
}
