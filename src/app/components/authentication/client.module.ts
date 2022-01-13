import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: 'signup', component: SignupComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientModule {}
