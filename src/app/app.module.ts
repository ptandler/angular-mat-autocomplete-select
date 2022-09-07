import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatAutocompleteModule ],
  declarations: [ AppComponent ] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
