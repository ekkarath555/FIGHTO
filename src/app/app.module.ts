import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightoComponent } from './flighto/flighto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    FlightoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "th-TH" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
