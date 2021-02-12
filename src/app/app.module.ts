import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import DataManager from 'src/managers/data.manager';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    DataManager,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
