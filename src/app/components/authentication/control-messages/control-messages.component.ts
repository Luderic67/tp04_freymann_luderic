import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.scss'],
})
export class ControlMessagesComponent {
  errorMessage: string = '';
  @Input() control: any;
  constructor() {}

  get errorMessages() {
    for (let propertyName in this.control?.errors) {
      if (
        this.control?.errors.hasOwnProperty(propertyName) &&
        this.control?.touched
      ) {
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control?.errors[propertyName]
        );
      }
    }

    return null;
  }
}
