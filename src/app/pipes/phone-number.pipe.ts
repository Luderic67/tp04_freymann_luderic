import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: unknown, country: string): unknown {
    if (value === '' || country === '') return '';
    let base: string = '';
    switch (country) {
      case 'France':
        base = '+33 ';
        break;
      case 'Germany':
        base = '+49 ';
        break;
      case 'United Kingdom':
        base = '+44 ';
        break;
      case 'Spain':
        base = '+34 ';
        break;
      case 'Italy':
        base = '+39 ';
        break;
    }
    return base + value;
  }
}
