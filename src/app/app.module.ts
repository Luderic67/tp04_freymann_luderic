import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faFrown,
  faFileCode,
} from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from './components/authentication/form/form.component';
import { ControlMessagesComponent } from './components/authentication/control-messages/control-messages.component';
import { ResumeComponent } from './components/authentication/resume/resume.component';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ListComponent } from './components/catalog/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './components/catalog/list-item/list-item.component';
import { SearchbarComponent } from './components/catalog/searchbar/searchbar.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { ClientModule } from './routes/client.module';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ControlMessagesComponent,
    ResumeComponent,
    PhoneNumberPipe,
    ListComponent,
    ListItemComponent,
    SearchbarComponent,
    SignupComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faGithub, faSearch, faFrown, faFileCode);
  }
}
