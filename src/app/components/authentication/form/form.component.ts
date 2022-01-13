import { ViewportScroller } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() redirect: EventEmitter<Event> = new EventEmitter();

  locations: string[] = [
    'France',
    'Germany',
    'United Kingdom',
    'Spain',
    'Italy',
  ];
  genders: string[] = ['Male', 'Female', 'Other'];
  registrationForm: any;

  constructor(
    private scroller: ViewportScroller,
    private formBuilder: FormBuilder
  ) {
    this.registrationForm = this.formBuilder.group({
      civility: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: [
        '',
        [Validators.required, ValidationService.phoneNumberValidator],
      ],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      street: ['', Validators.required],
      zip_code: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  scrollToResumeCard(): void {
    this.scroller.scrollToAnchor('resume_card');
  }

  handleSubmit(): void {
    if (this.registrationForm.dirty && this.registrationForm.valid) {
      const data: any = {
        civility: this.registrationForm.value.civility,
        first_name: this.registrationForm.value.first_name,
        last_name: this.registrationForm.value.last_name,
        phone_number: this.registrationForm.value.phone_number,
        email: this.registrationForm.value.email,
        street: this.registrationForm.value.street,
        zip_code: this.registrationForm.value.zip_code,
        city: this.registrationForm.value.city,
        country: this.registrationForm.value.country,
        login: this.registrationForm.value.login,
        password: this.registrationForm.value.password,
      };
      this.redirect.emit(data);

      // Scroll to resume
      this.scrollToResumeCard();
    } else {
      // Toggle errors
      Object.keys(this.registrationForm.controls).forEach((field) => {
        const control = this.registrationForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
