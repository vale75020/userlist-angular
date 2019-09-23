import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { TitleComponent } from './components/title/title.component';
import { GreyUserComponent } from './components/grey-user/grey-user.component';

import { FormsModule } from '@angular/forms'

import { DonneesService } from './services/donnees.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TitleComponent,
    GreyUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
