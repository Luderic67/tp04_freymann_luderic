import { Address } from 'shared/models/address';

export class AddAddress {
  static readonly type = '[Address] Add';

  constructor(public payload: Address) {}
}
export class RemoveAddress {
  static readonly type = '[Address] Remove';

  constructor(public payload: Address) {}
}
export class RemoveAllAddress {
  static readonly type = '[Address] RemoveAll';

  constructor() {}
}
