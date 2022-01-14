import { Guid } from 'guid-typescript';

export class Address {
  id!: Guid;
  street!: string;
  zip_code!: number;
  city!: string;
  country!: string;
}
