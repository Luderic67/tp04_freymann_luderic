import { CartProduct } from 'shared/models/cartProduct';
import { Product } from 'shared/models/product';

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {}
}
export class RemoveProduct {
  static readonly type = '[Product] Remove';

  constructor(public payload: Product) {}
}
export class RemoveAllProduct {
  static readonly type = '[Product] RemoveAll';

  constructor() {}
}
export class SetCart {
  static readonly type = '[Product] Set';

  constructor(public payload: CartProduct[]) {}
}
