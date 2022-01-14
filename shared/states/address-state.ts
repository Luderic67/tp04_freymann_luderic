import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Guid } from 'guid-typescript';
import {
  AddAddress,
  RemoveAddress,
  RemoveAllAddress,
  SetAddress,
} from 'shared/actions/address.action';
import { Address } from 'shared/models/address';
import { AddressesStateModel } from './address-state-model';

@State<AddressesStateModel>({
  name: 'addresses',
  defaults: {
    addresses: [],
  },
})
@Injectable()
export class AddressState {
  @Selector()
  static getAddressesLength(state: AddressesStateModel): number {
    return state.addresses.length;
  }

  @Selector()
  static getAddresses(state: AddressesStateModel): Address[] {
    return state.addresses;
  }

  @Selector()
  static getNextId(state: AddressesStateModel): Guid {
    return Guid.create();
  }

  updateLocalCart(_products: Address[]) {
    localStorage.setItem('addresses', JSON.stringify(_products));
  }

  @Action(AddAddress)
  add(
    { getState, patchState }: StateContext<AddressesStateModel>,
    { payload }: AddAddress
  ) {
    const state = getState();

    patchState({
      addresses: [...state.addresses, payload],
    });

    // Localstorage
    this.updateLocalCart([...state.addresses, payload]);
  }

  @Action(RemoveAddress)
  remove(
    { getState, patchState }: StateContext<AddressesStateModel>,
    { payload }: RemoveAddress
  ) {
    const state = getState();

    patchState({
      addresses: state.addresses.filter((address) => address.id !== payload.id),
    });

    // Localstorage
    this.updateLocalCart(
      state.addresses.filter((address) => address.id !== payload.id)
    );
  }

  @Action(RemoveAllAddress)
  removeAll({ getState, patchState }: StateContext<AddressesStateModel>) {
    const state = getState();

    patchState({
      addresses: [],
    });

    // Localstorage
    this.updateLocalCart([]);
  }

  @Action(SetAddress)
  set(
    { getState, patchState }: StateContext<AddressesStateModel>,
    { payload }: SetAddress
  ) {
    patchState({
      addresses: [...payload],
    });
  }
}
