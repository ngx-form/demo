import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormMaterialModule } from '@ngx-form/material';
import { FormElementModule } from '@ngx-form/element';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,

    FormElementModule.forRoot(),
    FormMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
