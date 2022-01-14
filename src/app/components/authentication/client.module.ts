import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'addresses', component: AddressComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
